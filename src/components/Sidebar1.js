import React from "react";
import "../css/Sidebar.css";
import { sidebardata } from './sidebardata1';


function sidebar() {
    return (
        <div className="sidebar1">
            <ul className="sidebarlist">
                {sidebardata.map((val, key) => {
                    return (
                        <li key={key}
                            className="row"

                            onClick={() => { window.location.pathname = val.link }}>
                            {""}
                            <div id="icon">{val.icon}</div>{" "}
                            <div id="title">
                                {val.title}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default sidebar;