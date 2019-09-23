import React from 'react';
import blackpanther from '../assets/blackpanther.jpg';
import mib from '../assets/mib.jpg';
import Endgame from '../assets/Endgame.jpg';
import guard from '../assets/guard.jpg';
import infinitywar from '../assets/infinitywar.jpg';
import us from '../assets/us.jpg';
import johnwick from '../assets/johnwick.jpg';
import underworld from '../assets/underworld.jpeg';
import hobbsshaw from '../assets/hobbsshaw.jpg';
import showman from '../assets/showman.jpeg';

import avatar from '../assets/avatar.jpg';
import brave from '../assets/brave.jpg';
import intothespiderverse from '../assets/intothespiderverse.jpg';
import richasians from '../assets/richasians.jpg';
import logan from '../assets/logan.jpg';
import petsematary from '../assets/petsematary.jpg';
import residentevil from '../assets/residdentevil.jpg';
import babydriver from '../assets/babydriver.jpeg';
import themummy2017 from '../assets/themummy2017.jpg';
import angelsanddemons from '../assets/angelsanddemons.jpeg';
import thor from '../assets/thor.jpg';
import venom from '../assets/venom.jpg';
import wonderwoman from '../assets/wonderwoman.jpg';
import stuber from '../assets/stuber.jpg';
import startrekbeyond from '../assets/startrekbeyond.jpg';
import potc from '../assets/potc.jpeg';
import sherlock from '../assets/sherlock.jpg';
import homealone from '../assets/homealone.jpg';
import daddydaycare from '../assets/daddydaycare.jpg';
import aquaman from '../assets/aquaman.jpeg';
import again from '../assets/again.jpg';


const Movie = (props) => {

    let image = "";

    switch(props.name) {
        case "Black Panther":
            image = blackpanther;
            break;
        case "Men In Black: International":
            image = mib;
            break;
        case "Avengers: End Game":
            image = Endgame;
            break;
        case "Guardians of The Galaxy Vol. 2":
            image = guard;
            break;
        case "Avengers: Infinity War":
            image = infinitywar;
            break;
        case "Us":
            image = us;
            break;
        case "John Wick 3":
            image = johnwick;
            break;
        case "Underworld":
            image = underworld;
            break;
        case "Hobbs & Shaw":
            image = hobbsshaw;
            break;
        case "The Greatest Showman":
            image = showman;
            break;

        case "Avatar":
            image = avatar;
            break;
        case "Brave":
            image = brave;
            break;
        case "Into The Spider Verse":
            image = intothespiderverse;
            break;
        case "Crazy Rich Asians":
            image = richasians;
            break;
        case "Logan":
            image = logan;
            break;
        case "Pet Sematary":
            image = petsematary;
            break;
        case "Resident Evil":
            image = residentevil;
            break;
        case "Baby Driver":
            image = babydriver;
            break;
        case "The Mummy":
            image = themummy2017;
            break;
        case "Angels and Demons":
            image = angelsanddemons;
            break;
        case "Thor: The Dark World": 
            image = thor;
            break;
        case "Venom":
            image = venom;
            break;
        case "Wonder Woman":
            image = wonderwoman;
            break;
        case "Stuber":
            image = stuber;
            break;
        case "Star Trek Beyond":
            image = startrekbeyond;
            break;
        case "Pirates of The Carribean: Dead man tell no tale":
            image = potc;
            break;
        case "Sherlock Holmes":
            image = sherlock;
            break;
        case "Home Alone 1":
            image = homealone;
            break;
        case "Daddy Day Care":
            image = daddydaycare;
            break;
        case "Aquaman":
            image = aquaman;
            break;
        case "17 Again":
            image = again;
            break;    
        default:
            image="" 
    }

    let cover = {
        backgroundImage: 'url(' + image + ')'
    }
    
    return (
        <div className="movie-container">
          <div className="movie-image" style={cover}></div>
          <p className="movie-title">{props.name}</p>
          <p className="movie-year">{props.year}</p>
        </div>
    );

}

export default Movie;