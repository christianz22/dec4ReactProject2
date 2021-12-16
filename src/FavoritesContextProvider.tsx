import { ReactNode, useState } from "react";
import RecipeItem from './InterfaceRecipeItem'
import FavoritesContext from './FavoritesContext'


interface Props { children: ReactNode; }

function FavoritesContextProvider({children}: Props) {
    const [favorites, setFavorites] = useState<RecipeItem[]>([]);

    function addFavorite(favorite: RecipeItem): void {
        setFavorites(prev => [...prev, favorite]);
    }

    const removeFavorite = (i: number): void => {
        setFavorites((prevFavorites) => {
        return [...prevFavorites.slice(0, i), ...prevFavorites.slice(i + 1)];
    })
    }
    // THIS MUST BE THE AREA FOR THIS FUNCTION TO APPLY CONTEXT TO ALL

    return (
        <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;