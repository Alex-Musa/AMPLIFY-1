import React from 'react'
import logo from "./images/scorpion.jpg"

function Carousel() {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

            <img src={logo} class="d-block w-100" alt="..." />


            <img src={logo} class="d-block w-100" alt="..." />


            <img src={logo} class="d-block w-100" alt="..." />


            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )



}


export default Carousel