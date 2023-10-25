'use client';
import WineLibrary from '../components/WineLibrary/WineLibrary';
import { useLazyFetchUserWinesQuery } from '../store/wine-query/reducer';
import AddWineComp from '../components/AddWineComp/AddWineComp';
import { useEffect } from 'react';

function MyCollection() {
  const [getUserWines, { data , isLoading: isLoadingGetUserWines }] = useLazyFetchUserWinesQuery();

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    getUserWines(token!)
  }, []);
  return (
    <>
      <AddWineComp />
      <WineLibrary wines={data} isLoading={isLoadingGetUserWines}/>;
    </>
  )
}

export default MyCollection;
