import React, { useState } from 'react';


export const PlantationMap = () => {
  const [form, setForm] = useState({})

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


  return (
    <div id='pantationmap'>
      <div className="container">
        <div className='row'>
          <div className="map-textandform-group">
            <div className="map-text-group">
              <h2>Plantei uma muda para o desafio Terra Doce Lar</h2>
              <p>Queremos lembrar do poder individual de transformação exponencial que temos quando nos conectamos ao coletivo.</p>
              <p>Acreditamos em um mundo em que os alimentos são gratuitos, abundantes e disponíveis para todos os seres do planeta. </p>
            </div>
            <div className="mapform">
              <form>
                <input 
                  type="text" id="description" value={form.value || ""} onChange={handleChange}
                  name="description" placeholder="diga para gente onde está sua muda" 
                />
                <button>Carregar Foto</button>
                <button>Incluir no Mapa</button>
              </form>
            </div>
          </div>
          <div className='footer-info-group'>
            <img src="img/map_exemple.png" className="img-logotype" alt="Logo Terra Doce Lar" />{" "}
          </div>
        </div>
      </div>
    </div>
  )
}

