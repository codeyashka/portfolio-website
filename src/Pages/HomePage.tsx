import { useRef, useEffect, useState } from "react";

import { Swiper, type SwiperRef, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Keyboard, EffectFade, Mousewheel } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

import "swiper/swiper-bundle.css";

import WelcomeSlide from "../Components/WelcomeSlide/WelcomeSlide.tsx";
import AboutSlide from "../Components/AboutSlide/AboutSlide.tsx";
import ExperienceSlide from "../Components/ExperienceSlide/ExperienceSlide.tsx";
import PortfolioSlide from "../Components/PortfolioSlide/PortfolioSlide.tsx";
import ContactSlide from "../Components/ContactSlide/ContactSlide.tsx";

import "./HomePage.css";

const HomePage = () => {
    const swiperRef = useRef<SwiperRef>(null);
    const [visitedSlides, setVisitedSlides] = useState<boolean[]>([true, false, false, false, false]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.el.focus();
        }
    }, []);

    const handleSlideChange = (swiper: SwiperType) => {
        const newVisitedSlidesArr = [...visitedSlides];
        const visitedSlide = swiper.activeIndex;

        newVisitedSlidesArr[visitedSlide] = true;

        setVisitedSlides(newVisitedSlidesArr);
        setCurrentSlideIndex(visitedSlide);
    };

    console.log(visitedSlides);

    return (
        <Swiper
            ref={swiperRef}
            modules={[Scrollbar, A11y, Keyboard, Mousewheel, EffectFade]}
            scrollbar={{ draggable: true }}
            keyboard={{
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            }}
            mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: 1,
            }}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            spaceBetween={0}
            slidesPerView={1}
            grabCursor={true}
            loop={false}
            speed={700}
            tabIndex={0}
            onSlideChange={handleSlideChange}
        >
            <SwiperSlide>
                <WelcomeSlide />
            </SwiperSlide>
            <SwiperSlide>
                <AboutSlide />
            </SwiperSlide>
            <SwiperSlide>
                <ExperienceSlide />
            </SwiperSlide>
            <SwiperSlide>
                <PortfolioSlide />
            </SwiperSlide>
            <SwiperSlide>
                <ContactSlide />
            </SwiperSlide>
        </Swiper>
    );
};

export default HomePage;
