import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import scorpion from "./images/scorpion.jpg"
import styles from "../utils/styles/Carousel.css"


const emblem = {
    marginLeft: "100px"
}


function carousel() {

    return (
        <div className="test">
            <h1 style={emblem}><bold>Prestige Hair Studios</bold></h1>
            <Carousel>
                <img src={scorpion} alt="..." style={styles} />
                <img src={scorpion} alt="..." style={styles} />
                <img src={scorpion} alt="..." style={styles} />
            </Carousel>
        </div>
    )
}


export default carousel