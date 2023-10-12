"use client"
import FavoriteCardList from "@/app/components/FavoritCardList/FavoriteCardList";
import WineCard from "@/app/components/WineLibrary/WineCard/WineCard";
import WineCardList from "@/app/components/WineLibrary/WineCardList/WineCardList";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux";
import { useAddFavoriteWineMutation, useDeleteFavoriteWineMutation, useGetFavoriteWineQuery, useLazyGetFavoriteWineQuery } from "@/app/store/currentUserWine/reducer";
import { checkAuthUser } from "@/app/store/user/userApi";
import { getWines } from "@/app/store/wine/wineApi";
import { Wine } from "@/types/wine.type";
import { Metadata } from "next";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: 'Favorite'
// }

function Favorites() {
  const dispatch = useAppDispatch();
  // const { wines , loading, isSuccess } = useAppSelector(state => state.wines);
  const { user } = useAppSelector(state => state.user);
  const { data } = useGetFavoriteWineQuery('', {
    // refetchOnFocus: true
    // refetchOnMountOrArgChange: true
  });
  const [getFavorites, {}] = useLazyGetFavoriteWineQuery();
  const [favoriteWines, setFavoritesWines] = useState<Wine[]>([]);

  useEffect(() => {
    // const getFaf = async () => {
    //   await getFavorites('')
    // }
    // getFaf();
    // getFavorites()
    // dispatch(checkAuthUser());
    setFavoritesWines(data)
    console.log('Data', data);
  }, [data])
  console.log('Look', favoriteWines);
  

  return (
    <div >
      <span>AAAAA</span>
      {
        favoriteWines?.map((wine: Wine)=> (
          <WineCard key={wine._id} wineElem={wine}/>
        ))
      }
    </div>
  );
}

export default Favorites;