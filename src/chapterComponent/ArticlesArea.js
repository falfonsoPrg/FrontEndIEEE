import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Articles from './Articles';

class ArticlesArea extends Component
{
    constructor()
    {
        super();
        this.state = {
        theArticles: [
            {
                name: "Altos de Cazucá",
                link: "https://developer.mozilla.org/es/docs/Web/HTML/Elemento/a"
            },
            {
                name: "Artículo 2",
                link: "https://developer.mozilla.org/es/docs/Web/HTML/Elemento/a"
            }
        ]
        }
    }

    render()
    {
        let myArticles = this.state.theArticles.map(article=>{
            return(
              <Col sm="6">
                <Articles article={article}></Articles>
              </Col>
            )
        })
        return(
            <div>
                <Container fluid>
                <br/>
                    <Row>
                        {myArticles}
                    </Row>
                </Container>
            </div>
        )
    }
}
export default ArticlesArea;