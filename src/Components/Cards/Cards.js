import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Cards = (props) => {
    const {author,description,title,urlToImage} = props.news;
    return (
        <div>
        <Col>
        <Card>
        <Card.Img variant="top" src={urlToImage} style={{width:'300px',height: '200px'}} />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">author: {author}</small>
        </Card.Footer>
    </Card>
        </Col>
            
        </div>
    );
};

export default Cards;