import LayoutError from '../layouts/404';

const ErrorPage = () => (
  <LayoutError>
    <section className="error-page">
      <div className="container">
        <h1>Error 404</h1>
        <p>Ops. Está página não existe!</p>
        <a href="/" className="btn btn--rounded btn--yellow">Voltar para Página Inicial</a>
      </div>
    </section>
  </LayoutError>
)

export default ErrorPage