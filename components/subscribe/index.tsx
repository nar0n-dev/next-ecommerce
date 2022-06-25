const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{ backgroundImage: 'url(/images/subscribe.jpg)' }} className="subscribe__content">
          <h4>Inscreva-se para receber ofertas exclusivas todos finais de semana!</h4>

          <form className="subscribe__form">
            <input type="email" placeholder="E-mail" />
            <button type="submit" className="btn btn--rounded btn--yellow">Inscreve-se</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe