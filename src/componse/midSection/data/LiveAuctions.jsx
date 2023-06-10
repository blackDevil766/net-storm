import CardInfo from "../../midSection/data/CardInfo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/swiper.min.css'


export default function Auctions() {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={4}
        pagination={{ clickable: true }}
        // loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <CardInfo
            title="Collectibles"
            name="@Richard"
            personalImg="https://netstorm-react.theme-land.com/img/avatar_1.jpg"
            img="https://netstrom-angular.theme-land.com/assets/img/auction_1.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardInfo
            title="Arts"
            name="@JohnDeo"
            personalImg="https://netstorm-react.theme-land.com/img/avatar_2.jpg"
            img="https://netstrom-angular.theme-land.com/assets/img/auction_2.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardInfo
            title="Robotic Arts"
            name="@MKHblots"
            personalImg="https://netstorm-react.theme-land.com/img/avatar_3.jpg"
            img="https://netstrom-angular.theme-land.com/assets/img/auction_3.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardInfo
            title="Design Illusions"
            name="@RioArham"
            personalImg="https://netstorm-react.theme-land.com/img/avatar_4.jpg"
            img="https://netstrom-angular.theme-land.com/assets/img/auction_4.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardInfo
            title="Virtual Worlds"
            name="@ArtNox"
            personalImg="https://netstorm-react.theme-land.com/img/avatar_5.jpg"
            img="https://netstrom-angular.theme-land.com/assets/img/auction_5.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardInfo
            title="Design Illusions"
            name="@Junaid"
            personalImg="https://netstorm-react.theme-land.com/img/avatar_6.jpg"
            img="https://netstrom-angular.theme-land.com/assets/img/auction_6.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardInfo
            title="Photography"
            name="@Richard"
            personalImg="https://netstorm-react.theme-land.com/img/avatar_7.jpg"
            img="https://netstrom-angular.theme-land.com/assets/img/auction_7.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
