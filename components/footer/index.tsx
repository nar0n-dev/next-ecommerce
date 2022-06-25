import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>JS </span>Store</h6>
            <p>House My Brand designs clothing for the young, the old & everyone in between – but most
              importantly, for the fashionable</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>

            <ul>
              <li>Informações</li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Find a store</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Bacome a member</a></li>
              <li><a href="#">Site feedback</a></li>
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