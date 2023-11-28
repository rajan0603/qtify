import React from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";


const Section = ({albumData,title}) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        (async () => {
        const data = await albumData();
        console.log(data);
        setCards(data);
        })();
    }, []);

    return (
        <div className = {styles.wrapper}>
            <div className = {styles.sectionHeader}>
                <p className = {styles.sectionTitle}>{title}</p>
                <button className = {styles.sectionButton}>
                    <p className = {styles.show}>Collapse</p>
                </button>
            </div>
            <div className = {styles.gridCard}>
            {cards &&cards.map((card) => (
                <Card type = "album"
                    data={{
                        title: card.title,
                        image: card.image,
                        follows: card.follows,
                        slug: card.slug,
                    }}
                    key={card.id}
                />
            ))};
            </div>
        </div>
    );
}

export default Section;