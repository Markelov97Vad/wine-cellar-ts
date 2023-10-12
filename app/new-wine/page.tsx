import Header from "../components/Header/Header";
import AddWineComp from '../components/AddWineComp/AddWineComp'
import { Metadata } from "next";
import WineLibrary from "../components/WineLibrary/WineLibrary";
import ProtectedRoute from "../hoc/ProtectedRoute";

export const metadata: Metadata = {
  title: 'Library',
  description: 'Add new wine in library',
};

function AddNewWine () {
  return (
      <ProtectedRoute>
        <main>
          <AddWineComp />
          <WineLibrary/>
        </main>
      </ProtectedRoute>
  )
}

export default AddNewWine;