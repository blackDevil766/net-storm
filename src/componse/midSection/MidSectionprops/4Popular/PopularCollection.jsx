import React, { useState } from "react";




function PopularCards(props) {
    return (
        <div data-aos="zoom-in-down" data-aos-duration="1000" id="card-collection" className="cardss card" style={{ width: "17.6rem" }}>
            <a href="/items">
                <img data-aos="zoom-in-up" data-aos-duration="1000" id="card-collection-background" src={props.background} alt="..." />
            </a>

            <div className="populer-card-body">

                <a href="/items">
                    <img data-aos="zoom-in-down" data-aos-duration="1000" className="characterCardImg" id={props.id} src={props.characterImg} alt="..." />
                </a>
                <a href="/items"><h3 data-aos="zoom-in-up" data-aos-duration="1000" className="cardText" id={props.cardTextId}>{props.title}</h3></a>

                <p id="cardPara">{props.type}</p>
            </div>
        </div>
    )
}


function Popular() {

    return (
        <div className="Popular-Collections">

            <div data-aos="fade-down" data-aos-duration="1000" id="view-all" className="popular-viewAll aos-init aos-animate">
                <div className="live-title-container">
                    <h6 data-aos="fade-down" data-aos-duration="1000" className="AUCTIONS aos-init aos-animate">
                        <span className="logoColor">MOST POPULAR</span>
                        <span><i className="wordIco far fa-horizontal-rule"></i> </span>
                    </h6>
                    <h1 data-aos="fade-down" data-aos-duration="1000" className="h-Mid aos-init aos-animate">Popular Collections</h1>
                </div>

                <a href="/explore2">
                    <p className="liveText">ExplorMore<i className="viewAllIco fas fa-arrow-right"></i></p>
                </a>
                
            </div>




            {/* <div className="shig">
                <h6 className="titles"><span className="logoColor">MOST POPULAR</span> <span><i className="wordIco far fa-horizontal-rule" ></i> </span></h6>
                <h1 className="h-Mid">Popular Collections</h1>
            </div>

            <div className="leftt" id="ExploreViews">
                <ViewAllPara View="ExplorMore" />
            </div> */}


            <div className="popularCardsContiner">

                <PopularCards
                    id="card-collection-img1"
                    cardTextId="cardText1"
                    background="https://netstrom-angular.theme-land.com/assets/img/author_1.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_1.jpg"
                    title="Virtual Worlds"
                    type="ERC-729"
                />

                <PopularCards
                    id="card-collection-img2"
                    cardTextId="cardText2"
                    background="https://netstrom-angular.theme-land.com/assets/img/author_2.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_2.jpg"
                    title="Digital Arts"
                    type="ERC-522"
                />

                <PopularCards
                    id="card-collection-img3"
                    cardTextId="cardText3"
                    background="https://netstrom-angular.theme-land.com/assets/img/author_3.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_3.jpg"
                    title="Sports"
                    type="ERC-495"
                />

                <PopularCards
                    id="card-collection-img4"
                    cardTextId="cardText4"
                    background="https://netstrom-angular.theme-land.com/assets/img/author_4.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_4.jpg"
                    title="Digital Arts"
                    type="ERC-522"
                />

                <PopularCards
                    id="card-collection-img5"
                    cardTextId="cardText5"
                    background="https://netstrom-angular.theme-land.com/assets/img/author_5.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_5.jpg"
                    title="Trading Cards"
                    type="ERC-397"
                />

                <PopularCards
                    id="card-collection-img6"
                    cardTextId="cardText6"
                    background="https://netstrom-angular.theme-land.com/assets/img/author_6.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_6.jpg"
                    title="Walking On Air"
                    type="ERC-403"
                />

                <PopularCards
                    id="card-collection-img7"
                    cardTextId="cardText7"
                    background="https://netstrom-angular.theme-land.com/assets/img/author_7.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_7.jpg"
                    title="Domain Names"
                    type="ERC-687"
                />

                <PopularCards
                    id="card-collection-img8"
                    cardTextId="cardText8"
                    background="https://netstrom-angular.theme-land.com/assets/img/author_8.jpg"
                    characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_8.jpg"
                    title="Collectibles"
                    type="ERC-972"
                />



            </div>


        </div>
    )
}


export default Popular;






// function MouseOut1(chackHovers) {

//     var cardImg = document.querySelector("#card-collection-img")
//     var cardText = document.querySelector("#cardText")
//     if (chackHovers) {
//         cardImg.classList.remove("img1")
//         cardText.style.color = "#fff"
//     }
// }


// function MouseOver1(chackHover) {
//     var cardImg = document.querySelector("#card-collection-img")
//     var cardText = document.querySelector("#cardText")
//     const cardd = document.getElementById("card-collection")

//     var whatGotHoverd = chackHover;
//     if (whatGotHoverd) {
//         cardImg.classList.add("img1")
//         cardText.style.color = "red"
//     }
// }