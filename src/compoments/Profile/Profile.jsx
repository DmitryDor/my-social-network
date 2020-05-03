import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {

    return (
        <div className={classes.content}>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg"/>
            </div>
            <div>
                ava+discription
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;