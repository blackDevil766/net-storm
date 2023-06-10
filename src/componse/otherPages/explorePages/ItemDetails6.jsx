import React, { useState } from "react";
import Auctions from "../../midSection/data/LiveAuctions";
import Footer from "../../midSection/MidSectionprops/7Footer/Footer";

export default function Items(props) {






    const [active, setActive] = useState(() => {
        return {
            c1: "active-tab",
            c2: "",
            c3: ""

        }
    })

    const [tap, setTap] = useState(() => {
        return {
            bids: <Bids />,
            history: "",
            details: ""
        }
    });


    // const [classes, setClasses] = useState(() => {
    //     return {
    //         bidClass: "bid-tab",
    //         historyClass: "history-tab-hide",
    //         detailsClass: "details-tab-hide"
    //     }
    // })

    function activeit(data) {

        var dataNumber = data.target.innerHTML;

        if (dataNumber === "bids") {

            console.log("its bids");

            setActive(() => {
                return {
                    c1: "active-tab"
                }


            })

            setTap(() => {
                return {
                    bids: <Bids />
                }
            })

            // setClasses(() => {
            //     return {
            //         bidClass: "bid-tab",
            //         historyClass: "history-tab-hide",
            //         detailsClass: "details-tab-hide"
            //     }
            // })


        } else if (dataNumber === "history") {

            console.log("its history");

            setActive(() => {
                return {
                    c2: "active-tab"
                }
            })

            setTap(() => {
                return {
                    history: <History />
                }
            })

            // setClasses(() => {
            //     return {
            //         bidClass: "bid-tab-hide",
            //         historyClass: "history-tab",
            //         detailsClass: "details-tab-hide"
            //     }
            // })

        } else if (dataNumber === "details") {

            console.log("its Details");

            setActive(() => {
                return {
                    c3: "active-tab"

                }
            })

            setTap(() => {
                return {
                    details: <Details />
                }
            })

            // setClasses(() => {
            //     return {
            //         bidClass: "bid-tab-hide",
            //         historyClass: "history-tab-hide",
            //         detailsClass: "details-tab"
            //     }
            // })
        }

    }


    function Bids(props) {
        return (
            <>
                <ul className="bid-tab">
                    <li className="single-tab-list">
                        <img src="https://netstorm-react.theme-land.com/img/avatar_1.jpg" alt="" />
                        <p>Bid listed for <strong>14 ETH </strong> 4 hours ago <br /> by <a href="/author">@arham</a></p>
                    </li>

                    <li className="single-tab-list">
                        <img src="https://netstorm-react.theme-land.com/img/avatar_2.jpg" alt="" />
                        <p>Bid listed for <strong>10 ETH </strong> 8 hours ago <br /> by <a href="/author">@junaid</a></p>
                    </li>

                    <li className="single-tab-list">
                        <img src="https://netstorm-react.theme-land.com/img/avatar_3.jpg" alt="" />
                        <p>Bid listed for <strong>12 ETH </strong> 3 hours ago <br /> by <a href="/author">@yasmin</a></p>
                    </li>

                </ul>
            </>
        )
    }



    function History(props) {
        return (
            <>
                <ul className="history-tab">
                    <li className="single-tab-list">
                        <img src="https://netstorm-react.theme-land.com/img/avatar_4.jpg" alt="" />
                        <p>Bid listed for <strong>32 ETH </strong> 10 hours ago <br /> by <a href="/author">@hasan</a></p>
                    </li>

                    <li className="single-tab-list">
                        <img src="https://netstorm-react.theme-land.com/img/avatar_5.jpg" alt="" />
                        <p>Bid listed for <strong>24 ETH </strong> 6 hours ago <br /> by <a href="/author">@artnox</a></p>
                    </li>

                    <li className="single-tab-list">
                        <img src="https://netstorm-react.theme-land.com/img/avatar_6.jpg" alt="" />
                        <p>Bid listed for <strong>29 ETH </strong> 12 hours ago <br /> by <a href="/author">@meez</a></p>
                    </li>
                </ul>
            </>
        )
    }


    function Details(props) {
        return (
            <>
                <ul className="details-tab">
                    <li id="special-tab" className="single-tab-list">

                        <div className="owner-item-details">
                            <span>Owned</span>
                            <div className="owner-meta">

                                <a href="/author">
                                    <img alt="" src="https://netstorm-react.theme-land.com/img/avatar_1.jpg" />
                                    <h6 className="ml-2">Themeland</h6>
                                </a>

                            </div>
                        </div>
                        <h5>Created : 10 Apr 2023</h5>
                    </li>
                </ul>
            </>
        )
    }



    return (
        <>
            <div className="itemDetails-container">

                <section className="breadcrumb-area">

                    <div className="containerBreadcrumb">
                        <h2>Item Details</h2>
                        <ol className="breadcrumb-list">
                            <li className="breadcrumb-home">home</li>
                            <li className="breadcrumb-pages">Explore</li>
                            <li className="breadcrumb-wallet">Item Details</li>
                        </ol>
                    </div>
                </section>

                <div className="items-containr">

                    <div className="ItemsAndContect-container">

                        <div className="item-details-area">

                            <div className="item-info-left">
                                <img src="https://netstorm-react.theme-land.com/img/auction_2.jpg" alt="" />
                            </div>
                            <div className="cardBelowItemImg"></div>

                            <ul className="netstorm-tab">
                                <li onClick={activeit} className={active.c1}>bids</li>
                                <li onClick={activeit} className={active.c2}>history</li>
                                <li onClick={activeit} className={active.c3}>details</li>
                            </ul>


                            <div className="tab-content">
                                <div className="bids-items">

                                    {tap.bids}
                                    {tap.history}
                                    {tap.details}

                                </div>

                                <div className="history-items">

                                </div>

                                <div className="details-items">

                                </div>

                            </div>


                        </div>

                        <div className="contect-right">
                            <h3>Walking On Air</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                            <div className="owner-item-details">
                                <span>Owned By</span>
                                <a className="owner-meta" href="/author">
                                    <img alt="" src="https://netstorm-react.theme-land.com/img/avatar_1.jpg" />
                                    <h6 className="ml-2">Themeland</h6>
                                </a>
                            </div>

                            <div className="item-info-list">

                                <ul className="list-priceAndInfo">

                                    <li className="price">
                                        <span>Current Price 1.5 ETH</span>
                                        <span>$500.89</span>
                                        <span>1 of 5</span>
                                    </li>

                                    <li>
                                        <span>Size </span>
                                        <span>14000 x 14000 px</span>
                                    </li>

                                    <li>
                                        <span>Volume Traded </span>
                                        <span>64.1</span>
                                    </li>

                                </ul>

                            </div>

                            <div className="row-items">
                                <div className="contect-row-item">

                                    <div className="card-row-item">
                                        <div className="single-saller-row-item">
                                            <a href="">
                                                <img src="https://netstorm-react.theme-land.com/img/avatar_1.jpg" alt="" />
                                            </a>
                                            <div className="seller-info ml-3">
                                                <a className="seller mb-2" href="/author">@ArtNoxStudio</a>
                                                <span>Creator</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="contect-row-item">

                                    <div className="card-row-item">
                                        <div className="single-saller-row-item">
                                            <a href="">
                                                <img src="https://netstorm-react.theme-land.com/img/avatar_2.jpg" alt="" />
                                            </a>
                                            <div className="seller-info ml-3">
                                                <a className="seller mb-2" href="/author">@ArtNoxStudio</a>
                                                <span>Creator</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="contect-row-item highest-bid">

                                    <div className="card-row-item">
                                        <div className="single-saller-row-item highest-bid-single-row">
                                            <h4 className="mt-0 mb-2">Highest Bid</h4>
                                            <div className="price d-flex justify-content-between align-items-center">
                                                <span>2.9 BNB</span>
                                                <span>1 of 5</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <a className="d-block card-row-item-btn btn-bordered-white mt-4" href="/wallet-cart">Place a Bid</a>

                        </div>

                    </div>


                </div>

                <div className="explore4-carousel">

                    <div data-aos="fade-down" data-aos-duration="1000" id="view-all" class="explore-viewAll aos-init aos-animate">
                        <div class="Explore2-title-container">
                            <h6 data-aos="fade-down" data-aos-duration="1000" class="AUCTIONS aos-init aos-animate">
                                <span class="logoColor">Explore</span>

                            </h6>
                            <h1 data-aos="fade-down" data-aos-duration="1000" class="h-Mid aos-init aos-animate">Exclusive Digital Assets</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                        </div>

                    </div>

                    <Auctions />

                </div>

            </div>
            <Footer />
        </>
    )
}












































{/* <TabContant
    name="@arham"
    href="/author"
    data="Bid listed for <strong>14 ETH </strong> 4 hours ago <br /> by"
    img="https://netstorm-react.theme-land.com/img/avatar_1.jpg"
/>
<TabContant
    name="@junaid"
    href="/author"
    data="Bid listed for <strong>10 ETH </strong> 8 hours ago <br /> by"
    img="https://netstorm-react.theme-land.com/img/avatar_2.jpg"
/>


<TabContant
    name="@yasmin"
    href="/author"
    data="Bid listed for <strong>12 ETH </strong> 3 hours ago <br /> by"
    img="https://netstorm-react.theme-land.com/img/avatar_3.jpg"
/> */}