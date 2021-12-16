import { useState, useContext } from 'react';
import RecipeItem from './InterfaceRecipeItem';
// import PlayerForm from './PlayerForm';
// import players from './players';
import FavoritesListRow from './FavoritesListRow';

import FavoriteTitle from './assets/favorites.png'
import FavoritesContext from './FavoritesContext';
import PrintIcon from './assets/rmprint.png'
import SaveIcon from './assets/rmsave.png'
import './FavoritesList.css'

function FavoritesList() {
    const [, ] = useState<RecipeItem[]>([
        { label: "Peyton Manning", healthLabels: '012', cuisineType: "American" }
    ]);
    const context = useContext(FavoritesContext);
    
    

    return (
        <div className="favoritesListContainer">
            <div className="favoritesListTitle">
                <img src={FavoriteTitle}></img><div className="iconContainer"><img src={SaveIcon}></img><img src={PrintIcon}></img></div>
            </div>

            <table>
                <thead><td>Label</td><td>Health Labels</td><td>Cuisine Type</td><td>Full Recipe Link</td><td>Remove Favorite</td></thead>
                {
                    context.favorites.map((recipeItem, i) => <FavoritesListRow recipeItem={recipeItem} index={i}/>)
                    
                }
                {/* {context.favorites} */}
            </table>

        </div>
    )
}

export default FavoritesList;

            {/* <Recipe onSubmit={(recipeItem) => {
                setRecipeItems([...recipeItems, recipeItem])
            }} />  */}

// export default interface RecipeItem {
//     hits: string;
//     label: string;
//     healthLabels: string;
//     cuisineType: string;
//     thumbNail: string;
//     // favorite: boolean;
//     url: string;
// }