import './DisplayContainer.css'
import nut from './assets/peanutAllergy.jpg';
import gluten from './assets/glutenFree.jpg';
import egg from './assets/eggFree.png';
import dairy from './assets/dairyFree.png'; 
import soy from './assets/soyFree.png'

import { useSearchParams } from 'react-router-dom'

function DisplayAllergies() {
    let [searchParams, setSearchParams] = useSearchParams();
    const setQuery = (q: string) => {
        setSearchParams({ 'query': q })
    }
    searchParams
    return(
        <div>
            <div className="categoryPicturesContainer">
                <div className="categoryPicture" onClick = {() => {setQuery('"dairy-free"')}}>
                    <h3>Dairy Allergy</h3>
                    <img src={dairy} alt="dairy allergy"></img>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('"egg-free"')}}>
                    <h3>Egg Allergy</h3>
                    <img src={egg} alt="egg free"></img>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('"gluten-free"')}}>
                    <h3>Gluten Free</h3>
                    <img src={gluten} alt="gluten free"></img>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('"nut-free"')}}>
                    <h3>Nut Allergies</h3>
                    <img src={nut} alt="nut allergies"/>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('"soy-free"')}}>
                    <h3>Soy Allergy</h3>
                    <img src={soy} alt="soy allergy"></img>
                </div>
            </div>
            {/* <div className='recipeList'>
                <Recipe query={query}/>
            </div> */}
        </div>
    )
}

export default DisplayAllergies;