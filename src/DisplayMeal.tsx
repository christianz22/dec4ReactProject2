import './DisplayContainer.css'
import breakfast from './assets/breakfast.jpg';
import lunch from './assets/lunch.jpg';
import brunch from './assets/brunch.jpeg';
import dinner from './assets/dinner.jpg';
import dessert from './assets/dessert.jpg';

import { useSearchParams } from 'react-router-dom'

function DisplayMeal() {
    let [searchParams, setSearchParams] = useSearchParams();
    const setQuery = (q: string) => {
        setSearchParams({ 'query': q })
    }
    searchParams
    return(
        <div>
            <div className="categoryPicturesContainer">
                <div className="categoryPicture" onClick = {() => {setQuery('breakfast')}}>
                    <h3>Breakfast</h3>
                    <img src={breakfast} alt="breakfast food"/>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('brunch')}}>
                    <h3>Brunch</h3>
                    <img src={brunch} alt="brunch food"></img>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('lunch')}}>
                    <h3>Lunch</h3>
                    <img src={lunch} alt="lunch food"></img>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('dinner')}}>
                    <h3>Dinner</h3>
                    <img src={dinner} alt="dinner food"></img>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('dessert')}}>
                    <h3>Dessert</h3>
                    <img src={dessert} alt="dessert food"></img>
                </div>
            </div>
            {/* <div className='recipeList'>
                <Recipe query={query}/>
            </div> */}
        </div>
    )
}

export default DisplayMeal;