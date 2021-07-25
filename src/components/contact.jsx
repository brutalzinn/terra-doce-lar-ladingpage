import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(name, email, message)
  //   emailjs
  //     .sendForm(
  //       'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //         clearState()
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       }
  //     )
  // }
  return (
    <div>
    <div id='contact'>
    <div className='container'>
    <div className='col-md-8'>
    <div className='row'>
    <div className='section-title'>
    <h2>Registro colaborativo das Mudas Plantadas</h2>
    </div>
    <div className='row'>
    <div className='col-md-6'>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScGPS3m8B_l37BifJEliMLWF8vlIsC8MYHva-k71AnLq2zMRg/viewform?embedded=true" width="800" height="800" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
    </div>
    </div>
    </div>
    </div>



    </div>
    </div>
    <div id='footer'>
    <div className='container text-center'>
    <p>
    &copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}
    <a href='http://www.templatewire.com' rel='nofollow'>
    TemplateWire
    </a>
    </p>
    </div>
    </div>
    </div>
    )
  }
