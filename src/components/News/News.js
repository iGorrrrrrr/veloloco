import React from "react";
import Post from "../Post/Post";
import './News.scss';

const News = ({posts}) => {
    return (
        <div className="posts">
            {posts.map(el => <Post post={el} key={el.id}/>)}
        </div>
    )
};

export default News