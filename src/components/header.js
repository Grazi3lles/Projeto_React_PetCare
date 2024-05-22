import React from "react";
import LogoPetCare from '../assets/LogoPetCare.png';
import PetIcon from '../assets/PetIcon.svg';

const Header = () =>{
    return(
        <section className="navBar">
            <img className="Logo" src={LogoPetCare} alt="Logotipo Pet Care"></img>

            <img className="Icon-Burguer" src={PetIcon} alt="icon"></img>
        </section>
    )
}

export default Header;