import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Home from './components/Home/Home';
import RecipeDesc from './components/Home/RecipeDesc';
import NewRecipe from './components/Home/NewRecipe';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Login/></>}/>
        <Route path="/signup" element={<><Signup/></>}/>
        <Route path="/Home" element={<><Navbar/><Home/></>}/>
        <Route path="/recipeDesc" element={<><Navbar/><RecipeDesc/></>}/>
        <Route path="/newRecipe" element={<><NewRecipe/></>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
