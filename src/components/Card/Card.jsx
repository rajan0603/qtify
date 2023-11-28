import React from "react";
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import styles from "./Card.module.css";


const Card = ({data,type}) => {
    const getCard = (type) => {
        switch(type){
            case "album" : {
                const {title,image,follows, slug ,songs} = data;
                return (
                        <Tooltip title = {songs} placement = "top" arrow >
                            <a href = {`album${slug}`} >
                                <div className = {styles.wrapper}>
                                    <div className = {styles.card}>
                                        <img src = {image} alt = "album" className = {styles.cardImage} loading = "lazy" />
                                        <div className={styles.banner}>
                                            <Chip label={`${follows} Follows`} className = {styles.chip} />
                                        </div>
                                    </div>
                                    <div className = {styles.cardTitle}>
                                        <p>
                                            {title}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Tooltip>
                );
            }
            case "song" :{
                const {title,image,likes} = data;
                return (
                    <div className = {styles.wrapper}>
                        <div className = {styles.card}>
                            <img src = {image} alt = "song" loading = "lazy"/>
                            <div className={styles.banner}>
                                <div>
                                <p>{likes} Likes</p>
                                </div>
                            </div>
                        </div>
                        <div className = {styles.cardTitle}>
                            <p>{title}</p>
                        </div>
                    </div>
                );
            }
            default :
                <></>
            }
    }
    return getCard(type);

};

export default Card;

