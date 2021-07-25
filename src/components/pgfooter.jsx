import React from 'react';

export const PageFooter = (props) => {


    return (

        <div id='footer' className="container-fluid bg-rodape1">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4" >
                        <img id="logofooter" src="/img/logo.png" alt="logo" />

                    </div>
                    <div className="col-md-4" >
                        <h5>CONTATO</h5>
                        <p>contato@terradocelar.com</p>
                        <p>Assa Sul - Brasília/DF</p>
                        <p>Cep: 70.200-130</p>
                   
                    </div>
                    <div className="col-md-4" >

                    </div>
                </div>
            </div>
        </div>
    );

}