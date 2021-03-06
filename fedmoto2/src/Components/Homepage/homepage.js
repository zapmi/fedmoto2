import React from 'react';
import { Link } from 'react-router-dom';
import "./homepage.css";
import trashHand from "../Images/trashHand.jpg";
import aboutFed from "../Images/aboutFed.jpg";
import bikes from "../Images/bikes.jpg";
import ig from "../Images/ig.jpg";
import service from "../Images/service.png";






const HomePage = () => {
    return (
        <div>
            <div class="col-sm-8">
                <a href="https://www.instagram.com/sphynxdaddy" target="_blank">
                    {" "}
                    <div class="wintStorage ">CLICK HERE TO BOOK YOUR WINTER STORAGE</div>
                </a>

                <img src={trashHand} class="img-fluid" id="trashHand" alt="trashHand" />
                <div>
                    <button class="bigSuziButton">CHECK OUT FED-014 "BIG SUZIE"</button>
                </div>

                <div id="fedMoto">
                    Federal Moto makes one-off custom bikes and functional goods that are
                    inspired and ridden from the city streets to the mountain peaks. Based
                    in Chicago, Illinois.
        </div>
                <hr></hr>
                <hr></hr>
            </div>


            <div class="col-sm-8">
                <Link to='/bikes' ><img src={bikes} class="img-fluid" id="bikesPic" alt="bikes" /></Link>
                <img src={ig} class="img-fluid" id="igPic" alt="ig" />
                <Link to='/serviceAppointment' ><img src={service} class="img-fluid" id="servicePic" alt="service" /></Link>
                <img src={aboutFed} class="img-fluid" id="aboutFedPic" alt="about" />
            </div>
        </div>

    );
}
export default HomePage;