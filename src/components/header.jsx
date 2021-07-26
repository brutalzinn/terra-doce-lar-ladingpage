import  Model  from './videoModal'
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div class="youtube-video-container">
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                  <Model/>
              </div>
              <div className='video-container-text'>
                <p>E se nós acreditarmos, um mundo de celebração é possível</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    )
  }
