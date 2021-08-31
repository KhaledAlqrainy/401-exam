import React, { Component } from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'

export class FavCards extends Component {
    render() {
        return (
            <div>
                <Row>
                    {this.props.crudData.map((i,k)=> (
                        <Col key={k}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={i.image_url} />
                        <Card.Body>
                          <Card.Title>{i.title}</Card.Title>
                          <Card.Text>
                            {i.description}
                            <p>{i.toUSD}</p>
                          </Card.Text>
                          <Button variant="danger" onClick={()=> this.props.deleteFav(i._id)}>Delete</Button>
                          <Button variant="primary" onClick={()=> this.props.handleModal(i)}>Update</Button>
                        </Card.Body>
                      </Card>
                      </Col>
        ))}
                
</Row>
            </div>
        )
    }
}

export default FavCards
