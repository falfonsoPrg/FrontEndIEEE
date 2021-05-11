import React, {Component} from 'react';
import NavChapters from './chapterComponent/NavChapters';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Inicio from './chapterComponent/Inicio';
import AchivementArea from './chapterComponent/AchivementArea';
import EventsArea from './chapterComponent/EventsArea';
import GaleryArea from './chapterComponent/GaleryArea';
import AddPictureForm from './Forms/AddPictureForm';
import ModalArticles from './chapterComponent/ModalArticles';
import MyScheduler from './chapterComponent/MyScheduler';
import AddChapterMember from './Forms/AddChapterMember';

class ChapterArea extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            id_chapter: this.props.match.params.id_chapter
        };
        this.setState({id_chapter: this.props.match.params.id_chapter})
    }

    render()
    {
        console.log(this.props)
        return(
            <div>
                    <NavChapters id_chapter={this.state.id_chapter}></NavChapters>
                    <Switch>
                        <Route path="/Capitulo/:id_chapter/Galeria/ModalImage/" component={ModalArticles}/>
                        <Route path="/Capitulo/:id_chapter/Galeria/Agregar/" component={AddPictureForm}/>
                        <Route path="/Capitulo/:id_chapter/Inicio/" component={Inicio}/>
                        <Route exact path="/Capitulo/:id_chapter/Galeria/" component={GaleryArea}/>
                        <Route exact path="/Capitulo/:id_chapter/Logros/" component={AchivementArea}/>
                        <Route exact path="/Capitulo/:id_chapter/Eventos/" component={EventsArea}/>
                        <Route exact path="/Capitulo/:id_chapter/Calendario/" component={MyScheduler}/>
                        <Route exact path="/Capitulo/:id_chapter/Articulos/" component={ModalArticles}/>
                        <Route exact path="/Capitulo/:id_chapter/AgregarMiembro/" component={AddChapterMember}/>
                    </Switch>          
            </div>
        );
    }
}

export default ChapterArea;