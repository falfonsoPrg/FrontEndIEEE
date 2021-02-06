import React, {Component} from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class Articles extends Component
{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="card" style="width: 18rem;">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><a href={this.props.article.link}><h5>{this.props.article.name}</h5><EditIcon/><DeleteIcon/></a></li>
                </ul>
            </div>
        );
    }
}

export default Articles;