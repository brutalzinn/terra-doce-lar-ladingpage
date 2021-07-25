export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src="img/terra_doce_lar_logo_360x.png" className="img-logotype" alt="Logo Terra Doce Lar" />{" "}
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Sobre Nós
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Plantio
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Loja
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Blog
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Contato
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll-doar'>
                Doar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
