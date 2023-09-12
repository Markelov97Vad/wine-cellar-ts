import { Route, Routes } from "react-router-dom";
import Main from "../main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
