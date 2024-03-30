import { Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./Main";
import '../src/components/style/Hero.scss'

function App() {
  console.log(
    IF()
  );
    function IF(){
      if(5 !== 3 && 5 !== 4 ){
        console.log(true);
      }else{
        console.log(false);
      }
      // && => false
      // || => true
      // !==
      // ? :
      // 5 === 5 ? 'true' : 'false'
      // 5 + 5
      // +5
    }
  return (
      <div style={{
      }} className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
