import React from 'react';
import { GoogleMap, useJsApiLoader} from "@react-google-maps/api"

// const libraries = ["places"];

const containerStyle = {
  width: '48vw',
  height: '60vh'
};
// const center = {
//   lat: 41.40338,
//   lng: 2.17403,
// };

// const options = {
//   styles: mapStyles,
//   disableDefaultUI: true,
//   zoomControl: true,
// }

export const Testimonials = () => {
 
 const {isLoaded} = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      // libraries,
    });
    
  

  const GoogleMapsComponent = () => {
    const [map, setMap] = React.useState(null)

  
    // if (loadError) return "Error loading maps";
    // if (!isLoaded) return "Loading Maps";
        const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
  

    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        // center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={(e) => {
          console.log(e);
        }}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      ) : <></>

  }
  

  return (
    <div id='testimonials'>
      <div className="container">
        <div className='row'>
          <div className='"col-xs-12 col-sm-4 col-md-6"'>
            <h2>Plantei uma muda para o desafio Terra Doce Lar</h2>
            <p>Queremos lembrar do poder individual de transformação exponencial que temos quando nos conectamos ao coletivo.</p>
            <p>Acreditamos em um mundo em que os alimentos são gratuitos, abundantes e disponíveis para todos os seres do planeta.</p>
          </div>
          <div className='"col-xs-12 col-sm-6 col-md-6"'>
          <GoogleMapsComponent/>
          </div>
        </div>
      </div>
    </div>
  )
}
