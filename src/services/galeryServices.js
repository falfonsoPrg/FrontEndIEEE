import request from 'superagent';
import { Component } from 'react';


class galeryServices extends Component
{
    componentDidMount()
    {
        request.post('http://localhost:3000/api/Pictures/upload')
        .type('json')
        .send('{description: "Bienvenido", id_chapter: 1, acknowledgement: a, id_associate: 1, id_event: 1, picture}')
    }

    render()
    {
        return(
            <div></div>
        )
    }
}