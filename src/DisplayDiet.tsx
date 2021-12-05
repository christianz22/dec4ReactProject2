import './DisplayContainer.css'
import keto from './assets/keto.jpg';
import pescatarian from './assets/pescatarian.jpg';
import vegan from './assets/vegan.jpg';
import vegetarian from './assets/vegetarian.jpg';
import kosher from './assets/kosher.png';
import {useState} from 'react';
import Recipe from './recipe';

function DisplayDiet() {
    const [query, setQuery] = useState('');
    // const [pesc, setPesc] = useState('');
    // const [vegan, setVegan] = useState('');
    // const [vegatarian, setVegatarian] = useState('');
    // const [kosher, setKosher] = useState('');

    return(
        <div>
            <div className="categoryPicturesContainer">
                <div className="categoryPicture" onClick = {() => {setQuery('keto')}}>
                    <h3>Keto</h3>
                    <img src={keto} alt="keto diet"/>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('kosher')}}>
                    <h3>Kosher</h3>
                    <img src={kosher} alt="kosher diet"></img>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('Pescatarian')}}>
                    <h3>Pescatarian</h3>
                    <img src={pescatarian} alt="pescatarian diet"></img>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('vegan')}}>
                    <h3>Vegan</h3>
                    <img src={vegan} alt="vegan diet"></img>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('vegetarian')}}>
                    <h3>Vegetarian</h3>
                    <img src={vegetarian} alt="vegetarian diet"></img>
                </div>
            </div>
            <hr></hr>
            <div className='recipeList'>
                <Recipe query={query}/>
            </div>
        </div>
    )
}

export default DisplayDiet;