'use client';
import WineLibrary from '../components/WineLibrary/WineLibrary';
import { useFetchUserWinesQuery } from '../store/wine-query/reducer';
import AddWineComp from '../components/AddWineComp/AddWineComp';

function MyCollection() {
  const token = localStorage.getItem('jwt')
  const { data } = useFetchUserWinesQuery(token!, {
    refetchOnMountOrArgChange: true
  });
  return (
    <>
      <AddWineComp />
      <WineLibrary wines={data} />;
    </>
  )
}

export default MyCollection;
