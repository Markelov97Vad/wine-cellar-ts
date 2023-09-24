import Header from "../components/Header/Header";
import AddWineComp from '../components/AddWineComp/AddWineComp'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'New wine',
  description: 'Add new wine in library',
};

function AddNewWine () {
  return (
    <>
      {/* <Header/> */}
      <main>
        <AddWineComp />
      </main>
    </>
  )
}

export default AddNewWine;