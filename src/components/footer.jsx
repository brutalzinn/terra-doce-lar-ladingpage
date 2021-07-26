export const Footer = (props) => {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='footer-row'>
          <div className='footer-info-group'>
            <img src="img/terra_doce_lar_logo_2_360x.png" className="img-logotype" alt="Logo Terra Doce Lar" />{" "}
          </div>
          <div className='footer-info-group'>
            {/* <img src="img/terra_doce_lar_logo_2_360x.png" className="img-logotype" alt="Logo Terra Doce Lar" />{" "} */}
            <a href='https://terradocelar.com/policies/terms-of-service' rel='nofollow'>
              Termos de Serviços
            </a>
            <a href='https://terradocelar.com/policies/privacy-policy' rel='nofollow'>
              Política de Privacidade
            </a>
            <a href='https://terradocelar.com/policies/refund-policy' rel='nofollow'>
              Devoluções
            </a>
            <a href='https://terradocelar.com/policies/shipping-policy' rel='nofollow'>
              Frete
            </a>
            <a href='https://terradocelar.com/policies/legal-notice' rel='nofollow'>
              Aviso Legal
            </a>
            <a href='https://terradocelar.com/pages/faq' rel='nofollow'>
              FAQ
            </a>
          </div>
          <div className='footer-info-group'>
            <h3>
              Contato:
            </h3>
            <a href='mailto:contato@terradocelar.com' rel='nofollow'>
              contato@terradocelar.com
            </a>
            <a rel='nofollow'>
              ASA SUL - BRASÍLIA/DF
            </a>
            <a rel='nofollow'>
              CEP: 70200.130
            </a>
            <a rel='nofollow'>
              CNPJ: 41.833.231/0001-63
            </a>
            <a rel='nofollow'>
              Whatsapp: (61) 996558860
            </a>
          </div>
          <div className='footer-info-group'>
            <h3>
              Siga-nos
            </h3>
            <ul className='social'>
              <li>
                <a href={props.data ? props.data.youtube : 'https://www.youtube.com/channel/UCE5GolJwATy2gG1RHRiRqqg'}>
                  <i className='fa fa-youtube-play'></i>
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.facebook : 'http://www.facebook.com/terradocelar'}>
                  <i className='fa fa-facebook-square'></i>
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.twitter : 'http://www.instagram.com/terradocelarbr'}>
                  <i className='fa fa-instagram'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <p>
          &copy; 2021 Issaaf Kattan React Land Page Template. Design by{' '}
          <a href='http://www.templatewire.com' rel='nofollow'>
            TemplateWire
          </a>
        </p> */}
      </div>
    </footer>
  )
}