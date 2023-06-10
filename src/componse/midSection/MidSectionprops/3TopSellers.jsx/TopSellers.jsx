import React from "react";

function Sellers(props) {
    return (
        <div className="sallers-top">
            <a href="/liveAuctions"><img className="sallars-img" src={props.characterImg} alt="" /></a>

            <div className="sallersData">

                <a href="/liveAuctions">
                    <h5 className="sallers-name">{props.name}</h5>
                </a>

                <p className="sallers-rish para-color">{props.rish}</p>

            </div>

        </div>

    )
}

function TopSallers() {
    return (
        <div className="top-sallers-container">
            <div className="topSallers">
                <div className="sallers-titles-container">
                    <h6 data-aos="zoom-in" data-aos-duration="1000" className="titles"><span className="logoColor">CREATIVE ARTIST</span> <span><i className="wordIco far fa-horizontal-rule" ></i> </span></h6>
                    <h1 data-aos="zoom-in-up" data-aos-duration="1000" className="h-Mid">Top Sallers</h1>
                </div>
                <div className="startMidSection topSallersSection">

                    <div className="sellers-part-section1">
                        <Sellers characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_1.jpg" name="@Richard" rish="1.5 BNB" />
                        <Sellers characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_2.jpg" name="@JohnDeo" rish="2.3 BNB" />
                        <Sellers characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_3.jpg" name="@Junaid" rish="2.5 BNB" />
                    </div>

                    <div className="sellers-part-section1">
                        <Sellers characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_4.jpg" name="@Yasmin" rish="1.9 BNB" />
                        <Sellers characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_5.jpg" name="@ArhamH" rish="3.2 BNB" />
                        <Sellers characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_6.jpg" name="@Sara" rish="4.7 BNB" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopSallers;



























































// import React from "react";

// function Sellers(props) {
//     return (
//         <div className="sallers-continer">
//             <div className="sallers-top">
//                     <img className="sallars-img" src={props.characterImg} alt="" />
//                 <div className="sallersData">
//                     <h5 className="sallers-name">{props.name}</h5>
//                     <p className="sallers-rish para-color">{props.rish}</p>
//                 </div>
//             </div>
//         </div>

//     )
// }

// function TopSallers() {
//     return (
//         <div className="top-sallers-container">
//             <div className="topSallers">
//                 <div className="sallers-titles-container">
//                     <h6 data-aos="zoom-in" data-aos-duration="1000" className="titles"><span className="logoColor">CREATIVE ARTIST</span> <span><i className="wordIco far fa-horizontal-rule" ></i> </span></h6>
//                     <h1 data-aos="zoom-in-up" data-aos-duration="1000" className="h-Mid">Top Sallers</h1>
//                 </div>
//                 <div className="startMidSection topSallersSection">

//                     <Sellers characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_1.jpg" name="@Richard" rish="1.5 BNB" />
//                     <Sellers characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_2.jpg" name="@JohnDeo" rish="2.3 BNB" />
//                     <Sellers characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_3.jpg" name="@Junaid" rish="2.5 BNB" />
//                     <Sellers characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_4.jpg" name="@Yasmin" rish="1.9 BNB" />
//                     <Sellers characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_5.jpg" name="@ArhamH" rish="3.2 BNB" />
//                     <Sellers characterImg="https://netstrom-angular.theme-land.com/assets/img/avatar_6.jpg" name="@Sara" rish="4.7 BNB" />

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TopSallers;







