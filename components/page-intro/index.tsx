import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.png')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Ofertas na Coleção de Inverno</h2>
                <a href="products" className="btn-shop"><i className="icon-right"></i>Compre Agora</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.png')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Até 50% de Desconto</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Compre Agora</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Envio Grátis</h4>
                <p>Para Piracicaba</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% Clientes Satisfeitos</h4>
                <p>As opiniões dos nossos clientes falam por si</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Melhor qualidade</h4>
                <p>Com os melhores materiais.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro