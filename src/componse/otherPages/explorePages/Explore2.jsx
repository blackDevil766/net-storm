import React from "react";
import { useState } from "react";
import { ExploreCard } from "../../midSection/MidSectionprops/5Explore/Explore"
import Footer from "../../midSection/MidSectionprops/7Footer/Footer";
import Explorey from "./Explorey";


export default function Explore2() {

    const [genre, setGenre] = useState(0);

    if (genre === 0) {
        console.log("genre 0");
        var a0 = ".a0 {display: block !important;}"
    } else if (genre === 1) {
        var a1 = ".a1 {display: block !important;}"
    }
    else if (genre === 2) {
        var a2 = ".a2 {display: block !important;}"
    } else if (genre === 3) {
        var a3 = ".a3 {display: block !important;}"
    } else if (genre === 4) {
        var a4 = ".a4 {display: block !important;}"
    }



    return (
        <>
            <style jsx>
                {a0}
                {a1}
                {a2}
                {a3}
                {a4}

            </style>


            <div className="explore1-container">

                <section className="breadcrumb-area">

                    <div className="containerBreadcrumb">
                        <h2>Explore</h2>
                        <ol className="breadcrumb-list">
                            <li className="breadcrumb-home">home</li>
                            <li className="breadcrumb-pages">Explore</li>
                            <li className="breadcrumb-wallet">Explore style 2</li>
                        </ol>
                    </div>
                </section>

                <div className="exploreCard-container">

                    <div data-aos="fade-down" data-aos-duration="1000" id="view-all" class="explore-viewAll aos-init aos-animate">
                        <div class="Explore2-title-container">
                            <h6 data-aos="fade-down" data-aos-duration="1000" class="AUCTIONS aos-init aos-animate">
                                <span class="logoColor">Explore</span>

                            </h6>
                            <h1 data-aos="fade-down" data-aos-duration="1000" class="h-Mid aos-init aos-animate">Exclusive Digital Assets</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                        </div>

                    </div>

                    <div className="explore-list-type">
                        <button onClick={() => { setGenre(0) }} id="all" className={genre === 0 ? "active" : ""}>all</button>
                        <button onClick={() => { setGenre(1) }} id="art" className={genre === 1 ? "active" : ""}>art</button>
                        <button onClick={() => { setGenre(2) }} id="music" className={genre === 2 ? "active" : ""}>music</button>
                        <button onClick={() => { setGenre(3) }} id="collection" className={genre === 3 ? "active" : ""}>collection</button>
                        <button onClick={() => { setGenre(4) }} id="sports" className={genre === 4 ? "active" : ""}>sports</button>
                    </div>

                    <div className="Explore1-cards">
                        {Explorey.map(card => {
                            return (
                                <ExploreCard
                                    id={card.id}
                                    class={card.class}
                                    background={card.background}
                                    title={card.title}
                                    owner={card.owner}
                                    theOwner={card.theOwner}
                                    para1={card.para1}
                                    type1={card.type1}
                                />
                            )
                        }

                        )
                        }

                    </div>
                </div>


            </div>

            <Footer />

        </>
    )
}