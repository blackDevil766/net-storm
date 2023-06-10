import React from "react"
import AOS from "aos";






function WelcomeSection() {
    AOS.init();

    return (

        <>
            <div className="section1">

                <div className="frontPageContianer">



                    <h6 className="NETSTORM"><span className="logoColor">NETSTORM</span> <span><i className="wordIco far fa-horizontal-rule" ></i> </span></h6>
                    <h1 data-aos="fade-right" data-aos-duration="500" className="header">Discover, collect,</h1>
                    <h1 data-aos="fade-right" data-aos-duration="1000" className="header">and sell</h1>
                    <h1 data-aos="fade-right" data-aos-duration="1500" className="header">extraordinary NFTs</h1>
                    <p data-aos="fade-up" data-aos-duration="1000" className="para" >Explore on the world's best & largest NFT marketplace</p>

                    <div id="front-section-btn">
                        <div data-aos="fade-up" data-aos-duration="1000" className="rocket-btn">
                            <a href="/explore1"><div id="startFrontPage-btn1" type="button"> <i id="rocket" className="fal fa-rocket"></i> Explore</div></a>

                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000" className="note-btn">
                            <a href="/create">
                                <div id="startFrontPage-btn2" type="button" > <i id="note" className="fal fa-clipboard"></i> Create</div>
                            </a>
                        </div>

                    </div>

                </div>

                <div className="frontBackGround"></div>

            </div>

        
        </>
    )
}

export default WelcomeSection;