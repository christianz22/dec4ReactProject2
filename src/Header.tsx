import './Header.css'
import { useState } from 'react'
import DisplayAllergies from './DisplayAllergies'
import DisplayDiet from './DisplayDiet'
// import DisplayMeal from './DisplayMeal'
import DisplayCuisine from './DisplayCuisine'
import favoritesHeart from './assets/rmfavselected2.png'
// import american from '../public/americanFood.jpg';
import { Link, Navigate, useSearchParams } from 'react-router-dom'
import ReciMeTitle from './assets/rmheader2.png'
import ReciMeLogo from './assets/rmlogo2.png'
import HomeButton from './assets/rmhome2.png'
import SearchText from './assets/rmsearch2.png'
// import FullRecipeButton from './assets/fullrecipe.png'
// import MoreDetailsButton from './assets/moredetails.png'
import CuisineButton from './assets/cuisinetype.png'
import DietButton from './assets/diettype.png'
import AllergiesButton from './assets/allergies.png'

function Header() {
    const [subcategories, setSubcategories] = useState(false)
    const [favorites, setFavorites] = useState(false)


    function coupledCuisineFunctionFalse() {
        clickCuisine(); 
        setSubcategories(true);
    }

    function coupledDietFunctionFalse() {
        clickDiet(); 
        setSubcategories(true);
    }

    function coupledAllergiesFunctionFalse() {
        clickAllergies(); 
        setSubcategories(true);
    }

    function coupledCuisineFunctionTrue() {
        setCuisineOn(false); 
        setSubcategories(false);
    }

    function coupledDietFunctionTrue() {
        setDietOn(false); 
        setSubcategories(false);
    }

    function coupledAllergiesFunctionTrue() {
        setAllergiesOn(false); 
        setSubcategories(false);
    }


    

    // function coupledMealFunctionFalse() {
    //     clickMeal; 
    //     setSubcategories(True);
    // }

    // function coupledMealFunctionTrue() {
    //     clickMeal; 
    //     setSubcategories(false);
    // }

    function offCuisine() {
        setCuisineOn(false)
    }

    function offDiet() {
        setDietOn(false)
    }

    // function offMeal() {
    //     setMealOn(false)
    // }

    function offAllergies() {
        setAllergiesOn(false)
    }



    let [searchParams, setSearchParams] = useSearchParams();
    const setQuery = (q: string) => {
        setSearchParams({ 'query': q })
    }

    let [searchQuery, setSearchQuery] = useState('')
    // searchParams.get('query') default state

    const [cuisine, setCuisineOn] = useState(false)
    // const [meal, setMealOn] = useState(false)
    const [diet, setDietOn] = useState(false)
    const [allergies, setAllergiesOn] = useState(false)

    function clickCuisine() {
        // setMealOn(false)
        setDietOn(false)
        setAllergiesOn(false)
        setCuisineOn(true)
    }

    // function clickMeal() {
    //     setDietOn(false)
    //     setAllergiesOn(false)
    //     setCuisineOn(false)
    //     // setMealOn(true)
    // }
    
    function clickDiet() {
        // setMealOn(false)
        setAllergiesOn(false)
        setCuisineOn(false)
        setDietOn(true)
    }
    
    function clickAllergies() {
        // setMealOn(false)
        setDietOn(false)
        setCuisineOn(false)
        setAllergiesOn(true)
    }

    function resetCategories() {
        setSubcategories(false)
        setCuisineOn(false)
        setDietOn(false)
        setAllergiesOn(false)
    }

    function coupledFavoritesOnClick() {
        setFavorites(true)
        setSubcategories(false)
        resetCategories();
    }

    return (
        <div className="headerContainer">
            <div className='titleContainer'>
                <div className='recimeTitle'><img src={ReciMeTitle} alt="title"></img></div>
                <div className='recimeLogo'><img src={ReciMeLogo} alt="logo"></img></div>
            </div>
            <form className="searchBarContainer" onSubmit={(e) => 
            {
                e.preventDefault()
                setQuery(searchQuery)
            }

            }>
                <div className="searchBar">
                    <section className='favoritesSection'>
                        <div className='favoritesInnerSection'>
                            <Link to='/dec4ReactProject2/' onClick={() => {setFavorites(false)}}><img alt="home" onClick={resetCategories} src={HomeButton}></img></Link>
                            <Link to='/dec4ReactProject2/favorites' onClick={coupledFavoritesOnClick}><img alt="favorites" src={favoritesHeart}></img></Link>
                        </div>
                    </section>
                    <img src={SearchText} alt="search"></img><input className="searchInput" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
                </div>
                {/* Style adjustments needed here, to make appearance of favorites icon + text more cohesive */}
            </form>
            {favorites=== false
            && <div className="categoriesContainer">
                {/* <h2 className="sortText">Sort by: </h2> */}
                <ul className="categoryButtons">
                    {subcategories===false
                        ? <img src={CuisineButton}onClick={coupledCuisineFunctionFalse}></img>
                        : <img src={CuisineButton}onClick={coupledCuisineFunctionTrue}></img>
                    }
                    {/* <button onClick={clickMeal}>Meal Type</button> */}
                    {subcategories===false
                        ? <img src={DietButton}onClick={coupledDietFunctionFalse}></img>
                        : <img src={DietButton}onClick={coupledDietFunctionTrue}></img>
                    }
                    {subcategories===false
                        ? <img src={AllergiesButton}onClick={coupledAllergiesFunctionFalse}></img>
                        : <img src={AllergiesButton}onClick={coupledAllergiesFunctionTrue}></img>
                    }
                </ul>
            </div>
            }
            <div className="subCategoriesContainer">
                {cuisine===true && <DisplayCuisine />}
                {/* {meal===true && <DisplayMeal />} */}
                {diet===true && <DisplayDiet />}
                {allergies===true && <DisplayAllergies />}
                {/* <hr className='bar'></hr> */}
            </div>
            
        </div>
    )
}

export default Header;