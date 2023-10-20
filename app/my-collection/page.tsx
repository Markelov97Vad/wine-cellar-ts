'use client';
import WineLibrary from '../components/WineLibrary/WineLibrary';
import { useFetchUserWinesQuery } from '../store/wine-query/reducer';
import AddWineComp from '../components/AddWineComp/AddWineComp';

function MyCollection() {
  const { data } = useFetchUserWinesQuery('');
  return (
    <>
      <AddWineComp />
      <WineLibrary wines={data} />;
    </>
  )
}

export default MyCollection;
