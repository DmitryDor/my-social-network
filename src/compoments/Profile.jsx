import React from 'react';
import classes from './Profile.module.css';


const Profile = () => {
    return (
        <div className={classes.content}>
            <div >
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg"/>
            </div>
            <div>
                ava+discription
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div>
                    <div className={classes.item}>
                        post1
                    </div>
                    <div className={classes.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;