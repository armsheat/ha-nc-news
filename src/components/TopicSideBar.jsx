import { useEffect, useState } from "react";
import {Link } from "react-router-dom";

function TopicSideBar(props) {

const [AllTopics, setAllTopics] = useState([]);

useEffect(() => {
    fetch("https://heathers-news.herokuapp.com/api/topics")
    .then((res) => res.json())
    .then(({ topics }) => {
      setAllTopics(topics);
    });
}, [])


    return( 
        <nav className="sidebar">
            <h3>Topics</h3>
                <ul className="TopicList">
                    {AllTopics.map(({ slug }) => {
                         return (<Link to={`/articles/${slug}`} key={ slug }><li>
                            <h4>{ slug }</h4>
                         </li>
                        </Link>)
                    })}
                </ul>
            </nav>
    )
}

export default TopicSideBar