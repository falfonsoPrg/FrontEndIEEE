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
        return(
            <div>
                <Router>
                    <div className="App">
                        <NavChapters></NavChapters>
                        <Redirect to={`/Capitulos/Inicio/${this.state.id_chapter}`} component={Inicio}/> 
                    <Switch>
                        <Route path="/Capitulos/Galeria/ModalImage/:chapter" component={ModalArticles}/>
                        <Route path="/Capitulos/Galeria/Agregar/:chapter" component={AddPictureForm}/>
                        <Route path="/Capitulos/Inicio/:chapter" component={Inicio}/>
                        <Route path="/Capitulos/Galeria/:chapter" component={GaleryArea}/>
                        <Route path="/Capitulos/Logros/:chapter" component={AchivementArea}/>
                        <Route path="/Capitulos/Eventos/:chapter" component={EventsArea}/>
                        <Route path="/Capitulos/Calendario/:chapter" component={MyScheduler}/>
                        <Route path="/Capitulos/Articulos/:chapter" component={ModalArticles}/>
                        <Route path="/Capitulos/AgregarMiembro/:chapter" component={AddChapterMember}/>
                        
                    </Switch> 
                    </div>
                    
                </Router>
                
                
            </div>
        );
    }
}

export default ChapterArea;