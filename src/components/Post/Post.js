import React, {useState, useEffect} from "react";
import './Post.scss';

const Post = ({post}) => {
    const [img, addImg] = useState(null);
    const [imgLoading, toggleImgLoading] = useState(false);
    useEffect(() => {
        fetch(`http://veloloco.pl/wp-json/wp/v2/media/${post.featured_media}`)
            .then(response => response.json())
            .then(img => {
                addImg(img.source_url);
            });
    }, [imgLoading]);


    return (
        <article className="news" key={post.id}>
            <h3 className="news_data-title">{post.title.rendered}</h3>
            <div className="news_data-date">opublikowano: {
                new Date(post.date).getDay() + "." +
                new Date(post.date).getMonth() + "." +
                new Date(post.date).getFullYear()
            }</div>
            <div className="news_data">
                <img className="news_img" src={img} alt={post.title.rendered}/>
                <div className="news_data-content"> {post.content.rendered.replace(/<\/?[^>]+>/ig, "")}</div>
            </div>
        </article>)
};

export default Post;