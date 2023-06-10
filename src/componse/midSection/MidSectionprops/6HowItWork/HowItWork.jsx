import React from "react";


function Type(props) {
    return (
        <div  data-aos={props.animetion} data-aos-duration={props.daley} className="howitworkSection">
            {props.icon}
            <h1 data-aos= "fade-up" data-aos-duration="1000" className="lastSectionTitle">{props.title}</h1>
            <p data-aos= "fade-up" data-aos-duration="1000" className="typesPara">{props.subject}</p>
        </div>
    )
}

function HowItWork() {
    return (
        <div>
            
            <div data-aos="fade-down" data-aos-duration="1000" id="view-all" class="howItwork-viewAll aos-init aos-animate">
                    <div class="live-title-container">
                        <h6 data-aos="fade-down" data-aos-duration="1000" class="AUCTIONS aos-init aos-animate">
                            <span class="logoColor">HOW IT WORK</span>
                            <span><i class="wordIco far fa-horizontal-rule"></i> </span>
                        </h6>
                        <h1 data-aos="fade-down" data-aos-duration="1000" class="h-Mid aos-init aos-animate">Create and sall your NEFs</h1>
                    </div>
                </div>

            {/* <h6 data-aos= "fade-right" data-aos-duration="1000" className="titles"><span className="logoColor">HOW IT WORK</span> <span><i className="wordIco far fa-horizontal-rule" ></i> </span></h6>
            <h1 data-aos= "fade-right" data-aos-duration="1000" className="h-Mid">Create and sall your NEFs</h1> */}

            <div className="continer">
                <div id="howItworkSection">

                    <Type
                    animetion = "fade-right"
                    daley = "1000"
                        icon={<i className="lastSectionIcon fal fa-wallet"></i>}
                        title="Set up your wallet"
                        subject="Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support."
                    />

                    <Type
                    animetion = "fade-down"
                    daley = "1000"
                        icon={<i class="lastSectionIcon fal fa-th-large" />}
                        title="Create your collection"
                        subject="Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."
                    />

                    <Type
                    animetion = "fade-up"
                    daley = "1000"
                        icon={<i class="lastSectionIcon fab fa-firstdraft" />}
                        title="Add your NFTs"
                        subject="Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."
                    />

                    <Type
                    animetion = "fade-left"
                    daley = "1000"
                        icon={<i class="lastSectionIcon fal fa-shopping-bag" />}
                        title="List them for sale"
                        subject="Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!"
                    />

                </div>
            </div>
        </div>
    )
}


export default HowItWork;