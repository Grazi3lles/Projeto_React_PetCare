import React from "react";
import dog1 from '../assets/Dog1.png'

const Banner = () => {

    return(
        <section className="banner">
            <div className="bannerText">
                    <h3>Precisa encontrar o melhor lugar para dar banho no seus pets?</h3>
                    <p>A PetCare te ajuda</p>
            </div>

            <div className="bannerImgs">
                <img src={dog1} alt="dog"></img>
            </div>

        </section>
    );

}

export default Banner;