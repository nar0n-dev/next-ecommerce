import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{ backgroundImage: 'url(/images/featured-1.jpg)' }} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>New arrivals are now in!</h3>
              <a href="#" className="btn btn--rounded">Ver Mais</a>
            </div>
          </article>

          <article style={{ backgroundImage: 'url(/images/featured-2.jpg)' }} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Basic t-shirts $29,99</h3>
              <a href="#" className="btn btn--rounded">Ver Mais</a>
            </div>
          </article>

          <article style={{ backgroundImage: 'url(/images/featured-3.jpg)' }} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Sale this summer</h3>
              <a href="#" className="btn btn--rounded">Ver Mais</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Por que você deve escolher a JS Store?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Envio Grátis</h4>
                <p>Todos os pedidos que for para Piracicaba, saí totalmente gratuito.</p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Pagamento Seguro</h4>
                <p>Todos os pagamentos serão feitos via PIX ou Cartão de Crédito​​</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Garantia de Dano</h4>
                <p>
                  Se um item chegou danificado, você trocar por outra peça do mesmo valor ou solicitar um reembolso total.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Melhor qualidade</h4>
                <p>Projetado para durar, cada um de nossos produtos foi elaborado com os melhores materiais.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage