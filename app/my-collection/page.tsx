'use client';
import WineLibrary from '../components/WineLibrary/WineLibrary';
import { useFetchUserWinesQuery } from '../store/currentUserWine/reducer';

function MyCollection() {
  const { data } = useFetchUserWinesQuery('');
  return <WineLibrary wines={data} />;
}

export default MyCollection;
