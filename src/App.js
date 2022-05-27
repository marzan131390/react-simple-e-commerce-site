// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SemiHeader from './components/Semi-header/SemiHeader';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Review from './components/Review/Review';
import Manage from './components/Managing/Manage';
import NoMatch from './components/NoMatch/NoMatch';
import ProductDetail from './components/ProductDetail/ProductDetail';
function App() {
  return (
    <div>
      <Header></Header>
      <SemiHeader></SemiHeader>
      <BrowserRouter> 
        <Routes> 
          <Route path="/shop" element={<Shop></Shop>} />
          <Route path="/review" element={<Review></Review>} /> 
          <Route path="/" element = {<Shop></Shop>} />
          <Route path="/manage" element={<Manage></Manage>} />
          <Route path="/product/:productKey" element= {<ProductDetail></ProductDetail>} />
          <Route path="*" element={<NoMatch></NoMatch>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
