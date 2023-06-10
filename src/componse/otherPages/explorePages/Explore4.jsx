import React, { useState } from "react";
import CardInfo from "../../midSection/data/CardInfo";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'
import Footer from "../../midSection/MidSectionprops/7Footer/Footer";

import 'swiper/swiper.min.css'
// import 'swiper/modules/pagination/pagination.min.css'

export default function Explore4(props) {



    return (
        <div className="explore1-container">

            <section className="breadcrumb-area">

                <div className="containerBreadcrumb">
                    <h2>Explore</h2>
                    <ol className="breadcrumb-list">
                        <li className="breadcrumb-home">home</li>
                        <li className="breadcrumb-pages">Explore</li>
                        <li className="breadcrumb-wallet">Explore style 4</li>
                    </ol>
                </div>
            </section>


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

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <CardInfo img="https://netstrom-angular.theme-land.com/assets/img/auction_1.jpg" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardInfo img="https://netstrom-angular.theme-land.com/assets/img/auction_2.jpg" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardInfo img="https://netstrom-angular.theme-land.com/assets/img/auction_3.jpg" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardInfo img="https://netstrom-angular.theme-land.com/assets/img/auction_4.jpg" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardInfo img="https://netstrom-angular.theme-land.com/assets/img/auction_5.jpg" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardInfo img="https://netstrom-angular.theme-land.com/assets/img/auction_6.jpg" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardInfo img="https://netstrom-angular.theme-land.com/assets/img/auction_7.jpg" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardInfo img="https://netstrom-angular.theme-land.com/assets/img/auction_8.jpg" />
                    </SwiperSlide>


                </Swiper>





            </div>
            <Footer />
        </div>
    )
}