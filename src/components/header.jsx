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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Model/>
    </div>

    </div>
    </div>
    </div>
    </div>
    </header>
    )
  }
