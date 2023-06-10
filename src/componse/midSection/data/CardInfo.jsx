import React, { useState } from "react";


function CardInfo(props) {

   

    return (
        <div id="cards" className="card" style={{ width: "19rem" }}>
           
            <a href="/items"><img id="card-img" src={props.img} className="card-img-top" alt="..." /></a>

            <div id="card-body" className="card-body">

                <a href="/items"><h5 className="card-title">{props.title}</h5></a>  

                <div className="card-personal-data">
                    <img src={props.personalImg} alt="" />
                    <a href="/items"><span>{props.name}</span></a>
                </div>
                
                <div class="card-bottom d-flex justify-content-between">
                    <span>1.7 BNB</span>
                    <span>1 of 1</span>
                </div>

                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}

            </div>
                {/* <div className="dates"> */}
                {/* </div> */}
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}

        </div>
    )
}


export default CardInfo;























































// import React, { useState } from "react";


// function CardInfo(props) {

//     var now = new Date();
//     const days = now.getDay();
//     const hours = now.getHours();
//     const mins = now.getMinutes();
//     const secs = now.getSeconds();

//     const [Timer, setTimer] = useState(() => {
//         return {
//             day: "",
//             hour: "",
//             min: "",
//             sec: ""
//         }
//     })

//     setInterval(() => {
        
//         setTimer({
//             day: "",
//             hour: "",
//             min: "",
//             sec: ""
//         })
//     }, 1000);

//     return (
//         <div id="cards" className="card" style={{ width: "19rem" }}>
           
//             <img id="card-img" src={props.img} className="card-img-top" alt="..." />

//             <div id="card-body" className="card-body">

//                 <div className="dates">
//                     <h5 id="cardDate" className="card-title">DAYS</h5>
//                     <h5 id="cardDate" className="card-title">HOURS</h5>
//                     <h5 id="cardDate" className="card-title">MINUTES</h5>
//                     <h5 id="cardDate" className="card-title">SECONDS</h5>

//                     <h5 id="days1" className="card-title days">{days}</h5>
//                     <h5 id="hours1" className="card-title hours">{hours}</h5>
//                     <h5 id="mins1" className="card-title mins">{mins}</h5>
//                     <h5 id="secs1" className="card-title secs">{secs}</h5>
//                 </div>

//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//     )
// }


// export default CardInfo;