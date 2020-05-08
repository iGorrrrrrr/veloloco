import React, {useState, useEffect} from 'react';
import './Main.scss'
import News from "../News/News";

const Main = () => {
    const [posts, addPosts] = useState([]);

    const [postLoaded, togglePostLoaded] = useState(false);

    useEffect( () => {
        fetch('http://veloloco.pl/wp-json/wp/v2/posts/')
            .then(response => response.json())
            .then(posts => { addPosts(posts)});
    }, [postLoaded]);

//html.replace(/<\/?[^>]+>/ig, " ")



    return (
        <div className="wrapper">
            {/*/!*<Slider/>*!/*/}
            {/*<img className="slider_placeholder" src={"https://via.placeholder.com/1200x300.png?text=slider - nie zdążyłem ;("}/>*/}
            <News posts={posts}/>
        </div>
    )
};

export default Main;