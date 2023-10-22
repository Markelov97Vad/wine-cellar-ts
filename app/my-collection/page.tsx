'use client';
import WineLibrary from '../components/WineLibrary/WineLibrary';
import { useFetchUserWinesQuery } from '../store/wine-query/reducer';
import AddWineComp from '../components/AddWineComp/AddWineComp';
import Cookies from 'universal-cookie';
import { useEffect } from 'react';
function MyCollection() {
  const { data } = useFetchUserWinesQuery('');
  useEffect(() => {
    const cookies = new Cookies();
    let cookieFake = cookies.get("jwt")
    console.log('cookieFake', cookies.get("jwt"));

  }, []);
  return (
    <>
      <AddWineComp />
      <WineLibrary wines={data} />;
    </>
  )
}

export default MyCollection;
