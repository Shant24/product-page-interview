import React, { memo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ImageViewer from 'react-simple-image-viewer';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './productSlider.scss';
import nextArrow from '../../assets/images/next-arrow.png';
import prevArrow from '../../assets/images/prev-arrow.png';
import nike1 from '../../assets/images/nike/1.webp';
import nike2 from '../../assets/images/nike/2.webp';
import nike3 from '../../assets/images/nike/3.webp';
import nike4 from '../../assets/images/nike/4.webp';
import nike5 from '../../assets/images/nike/5.webp';
import nike6 from '../../assets/images/nike/6.webp';
import nike7 from '../../assets/images/nike/7.webp';
import nike8 from '../../assets/images/nike/8.webp';
import nike9 from '../../assets/images/nike/9.webp';

SwiperCore.use([Navigation, Thumbs, EffectFade]);

const photos = [
  { src: nike1, id: uuidv4() },
  { src: nike2, id: uuidv4() },
  { src: nike3, id: uuidv4() },
  { src: nike4, id: uuidv4() },
  { src: nike5, id: uuidv4() },
  { src: nike6, id: uuidv4() },
  { src: nike7, id: uuidv4() },
  { src: nike8, id: uuidv4() },
  { src: nike9, id: uuidv4() },
];

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [viewModalIsOpen, setViewModalIsOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(7);

  const handleOpenModal = (i) => {
    document.body.style.overflow = 'hidden';

    if (window.innerHeight < document.body.offsetHeight) {
      document.body.style.paddingRight = '17px';
    }

    setModalImageIndex(i);
    setViewModalIsOpen(true);
  };

  const handleCloseModal = () => {
    document.body.style.overflow = 'unset';
    document.body.style.paddingRight = '0';

    setViewModalIsOpen(false);
  };

  const bigSlide = photos.map(({ src, id }, i) => (
    <SwiperSlide tag="span" key={`slide-${id}`}>
      <img src={src} alt={`nike-${i + 1}`} />
      <div className="openViewModal" onClick={() => handleOpenModal(i)}>
        Clair Pick
      </div>
    </SwiperSlide>
  ));

  const leftSlide = photos.map(({ src, id }, i) => (
    <SwiperSlide tag="span" key={`thumb-${id}`}>
      <img src={src} alt={`nike-${i + 1}`} />
    </SwiperSlide>
  ));

  const viewImages = photos.map(({ src }) => src);

  return (
    <div className="productSliderContainer">
      <div className="productSlider">
        <Swiper
          className="thumbs"
          spaceBetween={20}
          slidesPerView={6}
          direction="vertical"
          watchSlidesVisibility
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          onSlideChange={setThumbsSwiper}
          breakpoints={{
            320: {
              slidesPerView: 5,
            },
            1320: {
              slidesPerView: 6,
            },
          }}
        >
          {leftSlide}
        </Swiper>

        <div className="bigSliderContainer">
          <Swiper
            autoHeight={true}
            className="bigSlider"
            effect="fade"
            spaceBetween={0}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper }}
            navigation={{
              nextEl: '.swiperButtonNext',
              prevEl: '.swiperButtonPrev',
            }}
          >
            {bigSlide}
          </Swiper>

          <div className="swiperButtonPrev">
            <img src={prevArrow} alt="prev_arrow" />
          </div>
          <div className="swiperButtonNext">
            <img src={nextArrow} alt="next_arrow" />
          </div>
        </div>
      </div>

      {viewModalIsOpen && (
        <ImageViewer
          src={viewImages}
          currentIndex={modalImageIndex}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default memo(ProductSlider);
