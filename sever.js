const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root!123',
    database: 'helpinghands'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/signup", (req1, res1) => {
    const fullname = req1.body.name;
    const email = req1.body.email;
    const password = req1.body.psw;
    const address = req1.body.add;
    const idno = req1.body.idno;
    const phone = req1.body.phone;
    bcrypt.hash(password, 10, function (err, hash) {
        bcrypt.hash(address, 10, function (err2, address1) {
            bcrypt.hash(idno, 10, function (err3, idno1) {
                bcrypt.hash(phone, 10, function (err4, phone1) {

                    console.log(fullname, email, hash);
                    if (fullname == "" || email == "" || password == "" || address == "" || idno == "" || phone == "") {
                        res1.send({ message: "Enter all the details !!!" })
                    }
                    db.query("SELECT emailid from helpinghands.signup where emailid=?", [email], (err, res11) => {

                        if (err) throw err;
                        if (res11.length === 0) {

                            db.query("INSERT INTO helpinghands.signup (name,emailid,phone,address,idno,password) VALUES (?,?,?,?,?,?)", [fullname, email, phone1, address1, idno1, hash], function () {

                            })
                        }
                        else if (res11.length > 0) {
                            res1.send({ message: "Email id already exists!!!" })
                        }

                        res1.end();
                    })
                })
            })
        })
    })


});
app.post('/login', (req, res) => {
    var email = req.body.email;
    const password = req.body.password;
    if (password && email) {
        db.query('SELECT * FROM signup WHERE emailid = ?', [email], function (err, hashrec, req) {
            if (hashrec.length > 0) {
                if (email && password) {
                    db.query('SELECT password FROM signup WHERE emailid = ?', [email], function (err, hash, req) {
                        var resultArrayh = Object.values(JSON.parse(JSON.stringify(hash)))
                        bcrypt.compare(password, resultArrayh[0].password, function (err, resh) {
                            console.log(resh, hash, password, resultArrayh)
                            console.log(resultArrayh[0].password)
                            console.log("resh is" + resh)
                            db.query('SELECT * FROM signup WHERE emailid = ? AND password = ? ', [email, resultArrayh[0].password], function (err, results, req) {
                                console.log(results)
                                if (results.length > 0 && resh) {


                                    res.status(200).json({
                                        status: 'success'

                                    });
                                }
                                else {
                                    res.send({ message: 'Incorrect Email and/or Password!' });
                                    res.end();
                                }
                            });
                        }
                        )
                    })
                }
            }
            else {
                res.send({ message: 'Incorrect Email and/or Password!' });
                res.end();
            }
        })
    }
    else {
        res.send({ message: 'Please enter Email id and Password!' });
        res.end();
    }
}
)
app.post("/forgot", (req1, res1) => {
    const email = req1.body.email;
    const password = req1.body.password;
    console.log(email, password);
    bcrypt.hash(password, 10, function (err, hash) {
        console.log(hash)
        if (email == "" || password == "") {
            res1.send({ message: "Enter  Email id and Password to Reset Password !!!" })
        }
        db.query("SELECT emailid from signup where emailid=?", [email], (err, res11,) => {
            console.log(res11)
            if (res11.length == 0) {
                res1.send({ message: "Email id does not exists!!!" })
            }
            else if (res11.length > 0) {
                db.query("UPDATE signup SET password=? WHERE emailid=?", [hash, email])
            }
        })
        res1.end();
    })
});

app.post("/sdetails", (req1, res1) => {

    db.query("select  id,name,emailid from signup", (err, res) => {
        res1.send(res);
    })
})
app.post("/count", (req1, res1) => {
    db.query("select count(*) from signup", (err, r) => {
        res1.send(r);
    })

})
const nodePickle = require('node-pickle');


app.post("/eligible", (req, res) => {

    console.log(req)
    if (req) {
        res.send("NOT   NULL")
    }
    else {
        res.send("null");
    }

})
app.listen(3001, () => {
    console.log("running on port 3001");
});
