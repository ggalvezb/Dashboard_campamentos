import React, { Component } from 'react';
import {Button} from "react-mdl";

export default class LandingPage extends Component {
    render() {
        return (
            <div className='container'>
                <div>
                <h1>Este reporte está hecho en base a los datos del Catastro Nacional de Campamentos del 2019, realizado por el MINVU.</h1>
                </div>
                <div>
                <h2>Si quieres ver otros proyectos, visita mi<a href="https://ggalvezb.github.io/streaming_twitter/" rel="noopener noreferrer" target="_blank"> PÁGINA</a></h2>
                </div>
                <div>
                <iframe width="1100" height="6000" src="https://app.powerbi.com/view?r=eyJrIjoiOGI3N2I2MGQtYTA3MS00NTI2LTk4MGEtM2RmY2RiOTI3N2E1IiwidCI6IjdjZjBmMGRjLTZjNzctNDBhZi1hZmNlLWQwZWY2ZjU2YzJlYiJ9" frameborder="0" allowFullScreen="true"></iframe>
                </div>
            </div>
        )
    }
}
