import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    return (

        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message= "Hi, how are you?" like="15"/>
            <Post message="It's my ferst post!" like = "20"/>
            <Post message= "My name's Dmitry!" like ="30"/>
            <Post like= "50"/>
        </div>

    );
}

export default MyPosts;