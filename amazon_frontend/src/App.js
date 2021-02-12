import React from 'react';
import { BrowserRouter, Route ,Link} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import Signin from './screens/Signin';

function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>

            <a className="headname" href="/"> amazon</a>
          </div>

          <div>
          <Link to="/screens/RegisterScreen">Sign Up</Link>
          <Link to="/cart">
              Cart
              
            </Link>

          </div>
        </header>
        <main>
          
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/screens/Signin" component={Signin}/>
          <Route path="/screens/RegisterScreen" component={RegisterScreen}/>
          <Route path="/cart/:id?" component={CartScreen}></Route>


        </main>
        <footer className="row center">Happy Shopping with us!</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
