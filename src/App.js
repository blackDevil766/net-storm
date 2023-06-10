import React, { useState } from 'react';
// import MidSection from "./componse/midSection/Midsection";
import Navbar from "./componse/nav/Navbar";
import WelcomeSection from "./componse/WelcomeSection";
import LiveAuctions from "./componse/midSection/MidSectionprops/2LiveAuction/LiveAuctions";
import TopSallers from "./componse/midSection/MidSectionprops/3TopSellers.jsx/TopSellers";
import Popular from "./componse/midSection/MidSectionprops/4Popular/PopularCollection";
import Explore from "./componse/midSection/MidSectionprops/5Explore/Explore";
import HowItWork from "./componse/midSection/MidSectionprops/6HowItWork/HowItWork";
import Footer from "./componse/midSection/MidSectionprops/7Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cart from "./componse/otherPages/1Cart";
import { BrowserRouter } from 'react-router-dom';
// explore imports
import { Explore1, Explore2, Explore3, Explore4, Live, Items } from "./componse/otherPages/2Explore";
import Create from './componse/otherPages/3Create';
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'swiper/modules/free-mode/free-mode.min.css';
// import 'swiper/modules/thumbs/thumbs.min.css';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css/swiper.css'

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {apiResponse: }
//   }

//   callAPI(){
//     fetch("http://localhost:9000/testAPI")
//     .then(res => res.text())
//     .then(res => this.setState({apiResponse: res}))
//   }

//   componentWillMount(){
//     this.callAPI();
//   }

// render(){
{/* {this.state.apiResponse} */ }


function App() {

  const [searchIt, setSearchIt] = useState("searshContainerHidden");


  function leave() {
    setSearchIt("searshContainerHidden")
  }

  function Search(event) {
    setSearchIt("searshContainer")
  }


  return (
    <>
      <div id="searchId" className={searchIt}>

        <div className="titleAndExit">
          <h3>Search</h3>
          
          <img src="\imgs\close.svg" alt="" onClick={leave} />
        </div>

        <div className="searchPartDetails">
          <h1>What are you looking for?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="inputAndSubmitBtn">
            <input type="search" className="searchInput" placeholder='Enter your Keywords' />
            <button className='submitSearchBtn' type="submit">Search</button>
          </div>

        </div>


      </div>

      <Navbar searchPro={Search} />

      <BrowserRouter>
        <Router>
          <Switch>

            {/* EXPLORE SECTIONS  */}

            <Route path="/explore1">
              <Explore1 />
            </Route>

            <Route path="/explore2">
              <Explore2 />
            </Route>

            <Route path="/explore3">
              <Explore3 />
            </Route>

            <Route path="/explore4">
              <Explore4 />
            </Route>

            <Route path="/liveAuctions">
              <Live />
            </Route>

            <Route path="/items">
              <Items />
            </Route>

            {/* EXPLORE SECTIONS  */}

            <Route path="/create">
              <Creates />
            </Route>


            <Route path="/wallet-cart">
              <Carts />
            </Route>

            <Route path="/">
              <Homey />
            </Route>

          </Switch>

        </Router>
      </BrowserRouter>
    </>


  );
}




function Homey() {

  return (
    <>
      <section className="projectSection">
        <WelcomeSection />
        <div id="mid-section-contanir">
          <LiveAuctions />
          <TopSallers />
          <Popular />
          <Explore />
          <HowItWork />
          <Footer />
        </div>
      </section>


    </>
  )
}

function Carts() {


  return (
    <>
      <section className="projectSection">
        <Cart />
        <Footer />
      </section>
    </>
  )

}

function Creates(params) {
  return (
    <>
      <section className="projectSection">
        <Create />
        <Footer />
      </section>

    </>
  )

}

/***********************
 *  EXPLORE SECTIONS *
 ***********************/




export default App;