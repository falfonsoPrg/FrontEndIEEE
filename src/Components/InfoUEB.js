import React, { Component } from 'react';

class InfoUEB extends Component
{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
            <p>
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    IEEE en la Universidad El Bosque
                </button>
            </p>
                <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    El IEEE en la UNIVERSIDAD EL BOSQUE...
                </div>
                </div>
            </div>
        );
    }
}

export default InfoUEB;