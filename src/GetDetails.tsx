// import { useState } from "react";
// import  {RecipeResponse}  from "./GetRecipe";
  
// const ReadMore = ( children: string ) => {
 
//   const [moreDetails, setmoreDetails] = useState(false);
  

//   const toggleMoreDetails = () => {
//     setmoreDetails(!moreDetails);
    
//   };
//   return (
//     <p className="text">
      
//       <button onClick={toggleMoreDetails} className="read-or-hide">
//         {moreDetails ? "...read more" : " show less"}
//       </button>
      
//     </p>
//   );
// };
  
// const Content = () => {
//     const [moreRecipe, setmoreRecipe] = useState<RecipeResponse[]>([]);
    

//   return (
//     {
//        moreRecipe
//     }
     
    
//   );
// };
  
// export default ReadMore;