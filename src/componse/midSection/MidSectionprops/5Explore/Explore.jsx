import React, { useState } from "react";
// import ViewAllPara from "../data/ViewAllPara";


function ExploreCard(props) {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" id={props.id} className={props.class} style={{ width: "17.9rem" }}>

            <a href="/items">
                <img id="card-collection-background" src={props.background} className="card-img-top" alt="..." />
            </a>

            <div data-aos="zoom-in-up" data-aos-duration="1000" className="card-body">
                <a href="/items">
                    <h5 id="cardTitle">{props.title}</h5>
                </a>
                <a href="/author">
                    <p id="cardOwnerd">{props.owner} <span className="ownerName">{props.theOwner}</span></p>
                </a>
                
                <p id="cardPara1">{props.para1} <span className="ownerType">{props.type1}</span></p>
                <a id="explore-Btn" href="/login" class="btn btn-primary"> <i class="explore-bag fal fa-briefcase" style={{ fontSize: "15px" }}></i> Place a Bid</a>
            </div>
        </div>
    )
}


function Explore() {



    // function clicked(clickedd) {
    //     var btn = document.getElementById("loadMore-Btn");
    //     var btn1 = document.getElementById("loadMore-Btn1");
    //     var Showcards1 = document.querySelector(".cards1");


    //     if (clickedd) {
    //         Showcards1.style.display = "inline-flex"
    //         btn.style.display = "none"
    //         btn1.style.display = "flex"
    //     }
    // }

    // function clicked1(clickedd) {
    //     var btn1 = document.getElementById("loadMore-Btn1");
    //     // var btn2 = document.getElementById("loadMore-Btn2");
    //     var ShowCards2 = document.querySelector(".cards2");


    //     if (clickedd) {
    //         ShowCards2.style.display = "inline-flex"
    //         btn1.style.display = "none"
    //         // btn2.style.display = "inline-block"
    //     }
    // }


    // function clicked2(clickedd) {
    //     var btn = document.getElementById("loadMore-Btn");
    //     // var btn2 = document.getElementById("loadMore-Btn2");
    //     var Showcards1 = document.querySelector(".cards1");
    //     var ShowCards2 = document.querySelector(".cards2");

    //     if (clickedd) {
    //         Showcards1.style.display = "none"
    //         ShowCards2.style.display = "none"
    //         btn.style.display = "inline-flex"
    //         // btn2.style.display = "none"
    //     }
    // }

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
        <div data-aos="fade-up" data-aos-duration="1000" className="explore">

            <div data-aos="fade-down" data-aos-duration="1000" id="view-all" class="explore-viewAll aos-init aos-animate">
                <div class="live-title-container">
                    <h6 data-aos="fade-down" data-aos-duration="1000" class="AUCTIONS aos-init aos-animate">
                        <span class="logoColor">EXCLUSIVE ASSETS</span>
                        <span><i class="wordIco far fa-horizontal-rule"></i> </span>
                    </h6>
                    <h1 data-aos="fade-down" data-aos-duration="1000" class="h-Mid aos-init aos-animate">Explore</h1>
                </div>

                <a href="/explore3">
                    <p class="liveText">View All<i class="viewAllIco fas fa-arrow-right"></i></p>
                </a>
            </div>

            {/* <h6 className="titles"><span className="logoColor">EXCLUSIVE ASSETS</span> <span><i className="wordIco far fa-horizontal-rule" ></i> </span></h6>
            <h1 className="h-Mid">Explore</h1>

            <div id="view-all">
                <ViewAllPara View="View All" />
            </div> */}
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
            </div>

            {btnChanger.btn1}
            {btnChanger.btn2}

            {/* <a onClick={clicked2} id="loadMore-Btn2" class="btn btn-primary" >Show Less</a> */}

        </div>
    )
}


export default Explore;
export { ExploreCard }