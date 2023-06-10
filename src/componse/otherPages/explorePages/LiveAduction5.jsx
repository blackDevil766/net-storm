import React from "react";
import { useState } from "react";
import { ExploreCard } from "../../midSection/MidSectionprops/5Explore/Explore"
import Footer from "../../midSection/MidSectionprops/7Footer/Footer";


export default function Lives() {


    const [classChanger, setClassChanger] = useState(() => {
        return {
            cards1: "",
            cards2: ""
        }
    });

    const [btnChanger, setBtnChanger] = useState(() => {
        return {
            btn1: <a onClick={FirstLoadMore} id="loadMore-Btn" class="btn btn-primary" >Load More</a>,
            btn2: ""
        }
    });

    function FirstLoadMore() {
        setClassChanger(() => {
            return {
                cards1: "loadedCards1",
                cards2: ""
            }
        })

        setBtnChanger(() => {
            return {
                btn1: "",
                btn2: <a onClick={SecLoadMore} id="loadMore-Btn1" class="btn btn-primary" >Load More</a>
            }
        })
    }

    function SecLoadMore(params) {
        setClassChanger(() => {
            return {
                cards1: "loadedCards1",
                cards2: "loadedCards2"
            }
        })

        setBtnChanger(() => {
            return {
                btn1: "",
                btn2: ""
            }
        })
    }



    return (
        <>

            <div className="explore1-container">

                <section className="breadcrumb-area">

                    <div className="containerBreadcrumb">
                        <h2>Auctions</h2>
                        <ol className="breadcrumb-list">
                            <li className="breadcrumb-home">home</li>
                            <li className="breadcrumb-pages">Explore</li>
                            <li className="breadcrumb-wallet">Live Auctions</li>
                        </ol>
                    </div>
                </section>

                <div className="exploreCard-container">

                    <div data-aos="fade-down" data-aos-duration="1000" id="view-all" class="explore-viewAll aos-init aos-animate">
                        <div class="Explore2-title-container">
                            <h6 data-aos="fade-down" data-aos-duration="1000" class="AUCTIONS aos-init aos-animate">
                                <span class="logoColor">AUCTIONS</span>

                            </h6>
                            <h1 data-aos="fade-down" data-aos-duration="1000" class="h-Mid aos-init aos-animate">Live Auctions</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                        </div>

                    </div>


                    {/* <div className="Explore1-cards"> */}
                        <div className="moreCards">

                            <div className="cardsHolder">
                                <div className="cards">
                                    <ExploreCard
                                        id="Card-Explore-default"
                                        background="https://netstrom-angular.theme-land.com/assets/img/auction_1.jpg"
                                        title="Walking On Air"
                                        owner="Owned by"
                                        theOwner="Richard"
                                        para1="1.5 ETH"
                                        type1="1 of 1"
                                    />

                                    <ExploreCard
                                        id="Card-Explore-default"
                                        background="https://netstrom-angular.theme-land.com/assets/img/auction_2.jpg"
                                        title="Domain Names"
                                        owner="Owned by"
                                        theOwner="John Deo"
                                        para1="2.7 ETH"
                                        type1="1 of 1"
                                    />

                                    <ExploreCard
                                        id="Card-Explore-default"
                                        background="https://netstrom-angular.theme-land.com/assets/img/auction_3.jpg"
                                        title="Trading Cards"
                                        owner="Owned by"
                                        theOwner="Arham"
                                        para1="2.3 ETH"
                                        type1="1 of 1"
                                    />

                                    <ExploreCard
                                        id="Card-Explore-default"
                                        background="https://netstrom-angular.theme-land.com/assets/img/auction_4.jpg"
                                        title="Industrial Revolution"
                                        owner="Owned by"
                                        theOwner="Yasmin"
                                        para1="1.8 ETH"
                                        type1="1 of 1"
                                    />

                                </div>

                                <div id={classChanger.cards1} className="cards1 w3-container w3-animate-bottom">
                                    <ExploreCard
                                        id="Card-ExploreSection1"
                                        background="https://netstrom-angular.theme-land.com/assets/img/auction_5.jpg"
                                        title="Utility"
                                        owner="Owned by"
                                        theOwner="Junaid"
                                        para1="1.7 ETH"
                                        type1="1 of 1"
                                    />

                                    <ExploreCard
                                        id="Card-ExploreSection1"
                                        background="https://netstrom-angular.theme-land.com/assets/img/auction_6.jpg"
                                        title="Sports"
                                        owner="Owned by"
                                        theOwner="ArtNox"
                                        para1="1.7 ETH"
                                        type1="1 of 1"
                                    />

                                    <ExploreCard
                                        id="Card-ExploreSection1"
                                        background="https://netstrom-angular.theme-land.com/assets/img/auction_7.jpg"
                                        title="Cartoon Heroes"
                                        owner="Owned by"
                                        theOwner="Junaid"
                                        para1="3.2 ETH"
                                        type1="1 of 1"
                                    />

                                    <ExploreCard
                                        id="Card-ExploreSection1"
                                        background="https://netstrom-angular.theme-land.com/assets/img/auction_8.jpg"
                                        title="Gaming Chair"
                                        owner="Owned by"
                                        theOwner="Johnson"
                                        para1="0.69 ETH"
                                        type1="1 of 1"
                                    />
                                </div>

                                <div id={classChanger.cards2} className="cards2 w3-container w3-animate-bottom">
                                    <ExploreCard
                                        id="Card-ExploreSection2"
                                        background="https://netstrom-angular.theme-land.com/assets/img/auction_9.jpg"
                                        title="Utility"
                                        owner="Owned by"
                                        theOwner="Junaid"
                                        para1="1.7 ETH"
                                        type1="1 of 1"
                                    />

                                    <ExploreCard
                                        id="Card-ExploreSection2"
                                        background="https://netstrom-angular.theme-land.com/assets/img/auction_10.jpg"
                                        title="Domain Names"
                                        owner="Owned by"
                                        theOwner="ArtNox"
                                        para1="2.7 ETH"
                                        type1="1 of 1"
                                    />

                                    <ExploreCard
                                        id="Card-ExploreSection2"
                                        background="https://netstrom-angular.theme-land.com/assets/img/auction_3.jpg"
                                        title="Trading Cards"
                                        owner="Owned by"
                                        theOwner="Arham"
                                        para1="2.3 ETH"
                                        type1="1 of 1"
                                    />

                                    <ExploreCard
                                        id="Card-ExploreSection2"
                                        background="https://netstrom-angular.theme-land.com/assets/img/auction_4.jpg"
                                        title="Industrial Revolution"
                                        owner="Owned by"
                                        theOwner="Yasmin"
                                        para1="1.8 ETH"
                                        type1="1 of 1"
                                    />
                                </div>
                            </div>
                            {btnChanger.btn1}
                            {btnChanger.btn2}
                        </div>


                    {/* </div> */}
                </div>


            </div>

            <Footer />

        </>
    )
}