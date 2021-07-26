export const Footer = (props) => {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='footer-row'>
          <div className='footer-info-group'>
            <img src="img/terra_doce_lar_logo_2_360x.png" className="img-logotype" alt="Logo Terra Doce Lar" />{" "}
            <a href='htth3://www.templatewire.com' rel='nofollow'>
              Termos de Serviços
            </a>
            <a href='htth3://www.templatewire.com' rel='nofollow'>
              Política de Privacidade
            </a>
            <a href='htth3://www.templatewire.com' rel='nofollow'>
              Devoluções
            </a>
            <a href='htth3://www.templatewire.com' rel='nofollow'>
              Frete
            </a>
            <a href='htth3://www.templatewire.com' rel='nofollow'>
              Aviso Legal
            </a>
            <a href='htth3://www.templatewire.com' rel='nofollow'>
              FAQ
            </a>
          </div>
          <div className='footer-info-group'>
            <h3>
              Contato:
            </h3>
            <a href='htth3://www.templatewire.com' rel='nofollow'>
              contato@terradocelar.com
            </a>
            <a href='htth3://www.templatewire.com' rel='nofollow'>
              ASA SUL - BRASÍLIA/DF
            </a>
            <a href='htth3://www.templatewire.com' rel='nofollow'>
              CEP: 70200.130
            </a>
            <a href='htth3://www.templatewire.com' rel='nofollow'>
              CNPJ: 41.833.231/0001-63
            </a>
            <a href='htth3://www.templatewire.com' rel='nofollow'>
              Whatsapp: (61) 996558860
            </a>
          </div>
          <div className='footer-info-group'>
            <h3>
              Siga-nos
            </h3>
            <ul className='social'>
              <li>
                <a href={props.data ? props.data.youtube : '/'}>
                  <i className='fa fa-youtube-play'></i>
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.facebook : '/'}>
                  <i className='fa fa-facebook-square'></i>
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.twitter : '/'}>
                  <i className='fa fa-instagram'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p>
          &copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}
          <a href='http://www.templatewire.com' rel='nofollow'>
            TemplateWire
          </a>
        </p>
      </div>
    </footer>
  )
}