"use client";

import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Page() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation]}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {Array.from(Array(3), (e, i) =>
                <SwiperSlide key={i}>
                    <img src={'/images/2d/' + i + '.jpg'}
                         className={'block mx-auto w-auto max-h-screen'}
                    />
                </SwiperSlide>
            )}
        </Swiper>
    );
}
