export const OurStore = (props) => {
  return (
    <div id='ourStore' className='text-center'>
      <div className='container'>
        <div className='ourstore-title'>
          <h2>Loja Terra Doce Lar</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3'>
                  {' '}
                  <div className='ourstore-desc'>
                    <img src={d.icon} className={d.icon}></img>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <h4>R${d.price}</h4>
                  </div>
                </div> 
              ))
            : 'loading'}
        </div>
        <div className="button">
          <a href="https://terradocelar.com/collections"><button>Visite nossa loja</button></a>
        </div>
      </div>
    </div>
  )
}
