import React from "react";
import styles from "./SlideMaterials.module.css";

//Images
import firstPhoto from "../../assets/images/photo-materials.png";
import prevSlider from "../../assets/images/prev-slider.svg";
import nextSlider from "../../assets/images/next-slider.svg";

// Swiper
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const materials = [
    {
        img: firstPhoto,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date_publish: "22 Outubro 2022",
        autor_publish: "Escritor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor eget odio sit amet gravida. Maecenas semper, nibh nec cursus egestas, urna velit suscipit risus, id commodo odio augue ac ipsum. Curabitur libero risus, interdum nec imperdiet ac, dignissim eu nisi. Pellentesque magna erat, dignissim eget est quis, fringilla congue lectus. Cras eu nibh quis libero scelerisque varius quis ut erat. Mauris malesuada sapien in massa mollis, vitae iaculis enim vehicula. Nulla at aliquam dui. Aliquam vitae sodales tellus. Nam tristique luctus tortor vitae aliquet. Aliquam eu odio nisi. Nullam porta justo non congue dignissim."
    },
    {
        img: firstPhoto,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date_publish: "22 Outubro 2022",
        autor_publish: "Escritor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor eget odio sit amet gravida. Maecenas semper, nibh nec cursus egestas, urna velit suscipit risus, id commodo odio augue ac ipsum. Curabitur libero risus, interdum nec imperdiet ac, dignissim eu nisi. Pellentesque magna erat, dignissim eget est quis, fringilla congue lectus. Cras eu nibh quis libero scelerisque varius quis ut erat. Mauris malesuada sapien in massa mollis, vitae iaculis enim vehicula. Nulla at aliquam dui. Aliquam vitae sodales tellus. Nam tristique luctus tortor vitae aliquet. Aliquam eu odio nisi. Nullam porta justo non congue dignissim."
    },
    {
        img: firstPhoto,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date_publish: "22 Outubro 2022",
        autor_publish: "Escritor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor eget odio sit amet gravida. Maecenas semper, nibh nec cursus egestas, urna velit suscipit risus, id commodo odio augue ac ipsum. Curabitur libero risus, interdum nec imperdiet ac, dignissim eu nisi. Pellentesque magna erat, dignissim eget est quis, fringilla congue lectus. Cras eu nibh quis libero scelerisque varius quis ut erat. Mauris malesuada sapien in massa mollis, vitae iaculis enim vehicula. Nulla at aliquam dui. Aliquam vitae sodales tellus. Nam tristique luctus tortor vitae aliquet. Aliquam eu odio nisi. Nullam porta justo non congue dignissim."
    },
];

export default function SlideMaterials() {
    return (
        <div className={styles.slider}>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    prevEl: ".prev-slider",
                    nextEl: ".next-slider",
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    1200: {
                        pagination: false,
                    }
                }}
            >
                {materials.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.sliderItem}>
                            <img src={slide.img} alt="Foto do Material" />

                            <h3>{slide.title}</h3>

                            <small>{slide.date_publish} | Por <b>{slide.autor_publish}</b></small>

                            <p>{slide.description}</p>

                            <button>Continuar lendo</button>
                        </div>
                    </SwiperSlide>
                ))}
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

