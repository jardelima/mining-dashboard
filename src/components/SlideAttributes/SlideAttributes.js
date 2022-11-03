import React from "react";
import styles from "./SlideAttributes.module.css";

// Swiper Slide
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
import graphic from "../../assets/images/lorem-graphic.png";
import prevSlider from "../../assets/images/prev-slider.svg";
import nextSlider from "../../assets/images/next-slider.svg";
import cloud from "../../assets/images/cloud.svg";

export default function SlideAttributes() {
    return (
        <div className={styles.attributesItems}>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    prevEl: ".prev-slider",
                    nextEl: ".next-slider",
                }}
            >
                <SwiperSlide>
                    <div className={styles.attributesItem}>
                        <h4>22 de Janeiro</h4>

                        <img src={graphic} alt="Gráfico" />

                        <button>
                            Baixar relatório
                            <img src={cloud} alt="Baixar relatório" />
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.attributesItem}>
                        <h4>22 de Janeiro</h4>

                        <img src={graphic} alt="Gráfico" />

                        <button>
                            Baixar relatório
                            <img src={cloud} alt="Baixar relatório" />
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.attributesItem}>
                        <h4>22 de Janeiro</h4>

                        <img src={graphic} alt="Gráfico" />

                        <button>
                            Baixar relatório
                            <img src={cloud} alt="Baixar relatório" />
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.attributesItem}>
                        <h4>22 de Janeiro</h4>

                        <img src={graphic} alt="Gráfico" />

                        <button>
                            Baixar relatório
                            <img src={cloud} alt="Baixar relatório" />
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className={`${styles.prevSlider} prev-slider`}>
                <img src={prevSlider} alt="Slide anterior" />
            </div>

            <div className={`${styles.nextSlider} next-slider`}>
                <img src={nextSlider} alt="Próximo slide"/>
            </div>
        </div>
    )
}
