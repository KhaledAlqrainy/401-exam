import React, { Component } from 'react'
import { Button, Modal, Form} from 'react-bootstrap'


export class ModalForm extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={(e)=> this.props.updateFav(e)}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" name="title" defaultvalue={this.props.updateData.title} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" name="description" defaultvalue={this.props.updateData.description} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" name="toUSD" defaultvalue={this.props.updateData.toUSD} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" name="image_url" defaultvalue={this.props.updateData.image_url} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  
  
  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
        </Modal.Body>
        <Modal.Footer>
          
          
        </Modal.Footer>
      </Modal>
            </div>
        )
    }
}

export default ModalForm
