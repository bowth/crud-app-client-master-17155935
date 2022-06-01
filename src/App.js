import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Topbar from './components/topbar/topbar';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newPage/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Analytics from './pages/analytics/Analytics';
import Sales from './pages/Sales/Sales';


function App() {
  return (
    <Router>
      <Topbar/>
      <div className='container'>
        <Sidebar/>
        <Switch>


           <Route path='/users'>
             
             <UserList/>
          </Route>
          
          <Route path="/user/:userId">
            <User />
          </Route>

          <Route path="/newUser">
            <NewUser/>
          </Route>

        <Route path="/products">
          <ProductList/>
        </Route>

        <Route path="/product/:productId">
            <Product/>
          </Route>

          <Route path="/newProduct">
            <NewProduct/>
          </Route>
          <Route path="/analytics">
            <Analytics/>
          </Route>
          <Route path="/sales">
            <Sales/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
        
      
      </div>
  
    </Router>
  );
}

export default App;
