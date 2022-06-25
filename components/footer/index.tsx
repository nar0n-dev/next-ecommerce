import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo />
              {/* <span>JS </span> Store*/}
            </h6>
            <p></p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Ajuda</li>
              <li><a href="#">Suporte</a></li>
            </ul>

            <ul>
              <li>Informações</li>
              <li><a href="#">Newsletter</a></li>
            </ul>

            <ul>
              <li>Contato</li>
              <li><a href="#">jessicacsantos10@hotmail.com</a></li>
              <li><a href="#">WhatsApp: (19) 00000-0000</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>Copyright 2022 - Sweetspot Mídia. Todos os Direitos Reservados.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer