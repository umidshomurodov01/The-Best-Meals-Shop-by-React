// import './App.css';
import './index.css'
import {Route, Switch} from 'react-router-dom'

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Category from './components/pages/Category';
import Recipe from './components/pages/Recipe';
import NotFound  from './components/pages/NotFound';




function App() {
 
  return (
    <div>
      <Header/>
      <main className=" container content  ">

        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/category/:name" component={Category}/>
        <Route path="/meal/:id" component={Recipe}/>
        <Route component={NotFound} />
        </Switch>
    
      </main>
      <Footer/>
    </div>


  )
}

export default App;
