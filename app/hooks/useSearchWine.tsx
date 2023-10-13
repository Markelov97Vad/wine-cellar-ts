import { CheckboxsType } from "@/types/allTypes.types";
import { Wine } from "@/types/wine.type";
import { useState } from "react";

function useSearchWine() {
  const [filteredWine, setFilteredWine] = useState();

  const handleWineFilter = (wines: Wine[], keywords: string, types: string[]) => {
    let result = wines
    // console.log('keyword',keywords);


    if (types.length > 0) {
      result = wines.filter(wine => {
        // console.log(wine.name?.toLowerCase() === keywords.toLowerCase());
        // console.log(wine.name?.toLowerCase());
        // console.log(keywords.toLowerCase());
        console.log(types);

        // console.log(types.includes(wine.colorWine as string) && types.includes(wine.typeWine as string));

        // return wine.name?.toLowerCase().includes(keywords.toLowerCase())
        // return types.includes(wine.colorWine as string) || types.includes(wine.typeWine as string) ||  wine.name?.toLowerCase().includes(keywords.toLowerCase())
        return types.includes(wine.colorWine as string) || types.includes(wine.typeWine as string)
      })

    }
    // if (keywords) {
    //   result = wines.filter(wine => {
    //     // console.log(wine.name?.toLowerCase() === keywords.toLowerCase());
    //     // console.log(wine.name?.toLowerCase());
    //     // console.log(keywords.toLowerCase());
    //     // console.log(types);

    //     // console.log(types.includes(wine.colorWine as string) && types.includes(wine.typeWine as string));

    //     return wine.name?.toLowerCase().includes(keywords.toLowerCase())
    //     // return types.includes(wine.colorWine as string) || types.includes(wine.typeWine as string) ||  wine.name?.toLowerCase().includes(keywords.toLowerCase())
    //     // return types.includes(wine.colorWine as string) || types.includes(wine.typeWine as string)
    //   })

    // }

    return result;
  }

  return {handleWineFilter};
}

export default useSearchWine;
