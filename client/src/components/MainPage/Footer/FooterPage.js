

const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__block">
          <div className="logo footer__logo">
            &
            <strong className="logo__text"><i>COME<br></br>COOK</i></strong>
          </div>
          <p className="subtitle footer__subtitle">Здесь какая то инфа</p>
          <ul className="info footer__info">
            <li className="info__item info__item--primary">
              <a href="!#">О нас</a>
            </li>
            <li className="info__item"><a href="!#">Ссылка</a></li>
            <li className="info__item"><a href="!#">Ссылка</a></li>
            <li className="info__item"><a href="!#">Ссылка</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default FooterPage
