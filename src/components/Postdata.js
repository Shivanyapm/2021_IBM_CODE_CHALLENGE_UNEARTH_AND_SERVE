import React from 'react'
import PostData from '../assets/data/Education_XGBoost.ipynb'
import Header from '../components/Header1'
import Sidebar from '../components/Sidebar1';
import Post from '../components/Postdata';
class PostList extends React.Component {
    render = () => {
        return (
            <div>
                {PostData.map((postDetail, index) => {
                    return <h1>{postDetail.AadharID}</h1>
                })}


                HDetails</div>
        )
    }
}
export default PostList;