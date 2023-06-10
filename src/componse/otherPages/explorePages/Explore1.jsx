import React from "react";
import { ExploreCard } from "../../midSection/MidSectionprops/5Explore/Explore"
import Footer from "../../midSection/MidSectionprops/7Footer/Footer";

export default function Explore1() {
    return (
        <>
            <div className="explore1-container">

                <section className="breadcrumb-area">

                    <div className="containerBreadcrumb">
                        <h2>Explore</h2>
                        <ol className="breadcrumb-list">
                            <li className="breadcrumb-home">home</li>
                            <li className="breadcrumb-pages">Explore</li>
                            <li className="breadcrumb-wallet">Explore style 1</li>
                        </ol>
                    </div>
                </section>

                <div className="exploreCard-container">

                    <div data-aos="fade-down" data-aos-duration="1000" id="view-all" class="explore-viewAll aos-init aos-animate">
                        <div class="live-title-container">
                            <h6 data-aos="fade-down" data-aos-duration="1000" class="AUCTIONS aos-init aos-animate">
                                <span class="logoColor">EXCLUSIVE ASSETS</span>
                                <span><i class="wordIco far fa-horizontal-rule"></i> </span>
                            </h6>
                            <h1 data-aos="fade-down" data-aos-duration="1000" class="h-Mid aos-init aos-animate">Explore</h1>
                        </div>
                        <p class="liveText">View All<i class="viewAllIco fas fa-arrow-right"></i></p>
                    </div>

                    <div className="Explore1-cards">

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


                        <ExploreCard
                            id="Card-Explore-default"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_5.jpg"
                            title="Utility"
                            owner="Owned by"
                            theOwner="Junaid"
                            para1="1.7 ETH"
                            type1="1 of 1"
                        />

                        <ExploreCard
                            id="Card-Explore-default"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_6.jpg"
                            title="Sports"
                            owner="Owned by"
                            theOwner="ArtNox"
                            para1="1.7 ETH"
                            type1="1 of 1"
                        />

                        <ExploreCard
                            id="Card-Explore-default"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_7.jpg"
                            title="Cartoon Heroes"
                            owner="Owned by"
                            theOwner="Junaid"
                            para1="3.2 ETH"
                            type1="1 of 1"
                        />

                        <ExploreCard
                            id="Card-Explore-default"
                            background="https://netstrom-angular.theme-land.com/assets/img/auction_8.jpg"
                            title="Gaming Chair"
                            owner="Owned by"
                            theOwner="Johnson"
                            para1="0.69 ETH"
                            type1="1 of 1"
                        />
                    </div>
                </div>


            </div>

            <Footer />

        </>
    )
}