import React, { Component } from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'

export class ApiData extends Component {
    render() {
        return (
            <div>
                <Row md={3}>
                    {this.props.apiData.map((i,k)=> (
                        <Col key={k}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={i.image_url} />
                        <Card.Body>
                          <Card.Title>{i.title}</Card.Title>
                          <Card.Text>
                            {i.description}
                            <p>{i.toUSD}</p>
                          </Card.Text>
                          <Button variant="primary" onClick={()=> {this.props.addToFav(i)}}>Add to fav</Button>
                        </Card.Body>
                      </Card>
                      </Col>
                    ))}
                
</Row>
            </div>
        )
    }
}

export default ApiData
