import { useState, useEffect, useContext, useMemo } from "react";
import getRecipe from "./GetRecipe";
import RecipeItem from "./InterfaceRecipeItem";
import './recipe.css'
import { useSearchParams } from "react-router-dom";
import FavoritesContext from "./FavoritesContext";
import RecipeDetailItem from "./recipeItem";

// export interface Props {
// query: string;
// }

function Recipe() {
    let [searchParams, setSearchParam] = useSearchParams();
    const query = searchParams.get('query') || '' ;
    setSearchParam
    useEffect(() => {
        getRecipe(query).then(data => setRecipe(data));
        }, [query])

    const [recipe, setRecipe] = useState<RecipeItem[]>([])
    const {addFavorite} = useContext(FavoritesContext);
        addFavorite
    const recipeList = useMemo(() => {
        return recipe.map((item, index) => <RecipeDetailItem recipe={item} key={index} />)
        }, [recipe]);

    return (
        <div>
            {recipeList}
            
            {
        //    recipe.map((item, index) => 
        //    <form className="recipeContainer" key={index} onSubmit={(e) => {
        //     e.preventDefault();
        //     // onSubmit({ name, score });
        //     // clear();
        // }}>
        //        <p>{item.hits}</p>
        //        <p>{item.label}<button onClick={() => addFavorite(item)}className="favoritesButton"><img src={favoritesHeart} ></img></button></p>
        //        <p>Cuisine Type: {item.cuisineType}</p>
        //        <p>{item.healthLabels[0]}, {item.healthLabels[1]}, {item.healthLabels[2]}</p>
        //        <img src={item.thumbNail}></img>
        //        <div className="detailsContainer">
        //             <Link to={item.label}>More Details</Link>
        //             <p></p>

        //             {/* PLACEHOLDER UNTIL URL LINK MADE---------*/}
        //             {/* <Link to={item.url}>Full Recipe</Link> */}
        //             <a target='_blank' href={item.url}>Full recipe</a>
        //             <p></p>
        //             {/* PLACEHOLDER UNTIL URL LINK MADE---------*/}


        //             {/* May Move favoritesHeart next to the recipe title, for ease of use */}
        //        </div>
        //    </form>)
          
            
           }
            
        </div>
    )
}

export default Recipe;




// import { useState, useEffect, useContext } from "react";
// import getRecipe from "./GetRecipe";
// import RecipeItem from "./InterfaceRecipeItem";
// import {Link} from 'react-router-dom';
// import favoritesHeart from './assets/rmfavselected.png'
// import './recipe.css'
// import { useSearchParams } from "react-router-dom";
// import FavoritesContext from "./FavoritesContext";
// import FullRecipeButton from './assets/fullrecipe.png'
// import MoreDetailsButton from './assets/moredetails.png'

// // export interface Props {
// // query: string;
// // }

// function Recipe() {
//     let [searchParams, setSearchParam] = useSearchParams();
//     const query = searchParams.get('query') || '' ;

//     useEffect(() => {
//         getRecipe(query).then(data => setRecipe(data));
//         }, [query])

//     const [recipe, setRecipe] = useState<RecipeItem[]>([])
//     const {addFavorite} = useContext(FavoritesContext);

//     return (
//         <ul>
//             {
//            recipe.map((item, index) => 
//            <form className="recipeContainer" key={index} onSubmit={(e) => {
//             e.preventDefault();
//             // onSubmit({ name, score });
//             // clear();
//         }}>
//                <p>{item.hits}</p>
//                <p>{item.label}<button onClick={() => addFavorite(item)}className="favoritesButton"><img src={favoritesHeart} ></img></button></p>
//                <p>Cuisine Type: {item.cuisineType}</p>
//                <p>{item.healthLabels[0]}, {item.healthLabels[1]}, {item.healthLabels[2]}</p>
//                <img src={item.thumbNail}></img>
//                <div className="detailsContainer">
//                     <Link to={item.label}><img src={MoreDetailsButton}></img></Link>
//                     <p></p>
//                     <a target='_blank' href={item.url}><img src={FullRecipeButton}></img></a>
//                     <p></p>
//                </div>
//            </form>)
//            }
//         </ul>
//     )
// }

// export default Recipe;


