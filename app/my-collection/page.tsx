'use client';
import WineLibrary from '../components/WineLibrary/WineLibrary';
import { useFetchUserWinesQuery, useLazyFetchUserWinesQuery } from '../store/wine-query/reducer';
import AddWineComp from '../components/AddWineComp/AddWineComp';
import { useEffect } from 'react';

function MyCollection() {
  const [getUserWines, { data }] = useLazyFetchUserWinesQuery();

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    getUserWines(token!)
  }, []);
  return (
    <>
      <AddWineComp />
      <WineLibrary wines={data} />;
    </>
  )
}

export default MyCollection;
