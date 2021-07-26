export const Navigation = (props) => {
  function openInNewTab(url) {
    window.open(url, '_blank').focus();
   }
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
    <a href='#header' className='page-scroll'>
    Home
    </a>
    </li>
    <li>
    <a href='#plantio' className='page-scroll'>
    Plantio
    </a>
    </li>
    {/* <li>
      <a href='#about' className='page-scroll'>
      Sobre Nós
      </a>
    </li> */}

    <li>
    <a href='#ourstore' className='page-scroll'>
    Loja
    </a>
    </li>
    <li>
    <a href='#footer' className='page-scroll'>
    Contato
    </a>
    </li>
    <li>
    <a href='#blog' className='page-scroll'>
    Blog
    </a>
    </li>
    <li>
    <a className='page-scroll' onClick={()=>openInNewTab('http://vaka.me/6rmj1a')}>
    Doar
    </a>
    </li>
    </ul>
    </div>
    </div>
    </nav>
    )
  }
