import React from "react";
import Navbar from "../nav/Navbar";

export default function Cart() {

    function Connect(props) {
        return (
            <a href="/login">
                <div className="connect">
                    <img src={props.img} alt="" />
                    <h3 className="connectTitle">{props.title}</h3>
                    <p>{props.details}</p>
                </div>
            </a>
        )
    }
    return (
        <>

            <div className="cart-container">

                <section className="breadcrumb-area">

                    <div className="containerBreadcrumb">
                        <h2>wallet connect</h2>
                        <ol className="breadcrumb-list">
                            <li className="breadcrumb-home">home</li>
                            <li className="breadcrumb-pages">pages</li>
                            <li className="breadcrumb-wallet">wallet connect</li>
                        </ol>
                    </div>
                </section>

                <section className="wallet-connect-area">
                    <div className="wallet-cart-container">
                        <div className="headerOfCartSection">
                            <div className="cart-header">
                                <span>wallet connect</span>
                                <h3>Connect your Wallet</h3>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit. </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="waysToConnect">
                    <div className="connectContainer">
                        <Connect title="MetaMask" details="A browser extension with great flexibility. The web's most popular wallet " img="https://netstorm-react.theme-land.com/img/metamask.png" />
                        <Connect title="Authereum" details="A user-friendly wallet that allows you to sign up with your phone number on any device" img="https://netstorm-react.theme-land.com/img/authereum.png" />
                        <Connect title="WalletConnect" details="Pair with Trust, Argent, MetaMask & more. Works from any browser, without an extension" img="https://netstorm-react.theme-land.com/img/walletconnect.png" />
                        <Connect title="Dapper" details="A security-focused cloud wallet with pin codes and multi-factor authentication" img="https://netstorm-react.theme-land.com/img/dapper.png" />
                        <Connect title="Kaikas" details="A simple-to-use wallet that works on both mobile and through a browser extension" img="https://netstorm-react.theme-land.com/img/kaikas.png" />
                    </div>
                </section>

            </div>
        </>
    )
}