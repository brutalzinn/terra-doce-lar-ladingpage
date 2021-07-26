
export const Overallnumber = (props) => {
  return (
    <div id='overallnumber'>
      <div className='container'>
        {/* <div className='section-title text-center'>
          <h2>What our clients say</h2>
        </div> */}
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='overallnumber'>
                    <div className='overallnumber-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='overallnumber-content'>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
