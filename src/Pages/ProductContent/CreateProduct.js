import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input} from 'reactstrap';


const CreateProduct = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const toggle = () => setModal(!modal);


  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('https://test-binar.herokuapp.com/v1/products/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('token')
        },
        body: JSON.stringify({ name:productName, price:productPrice, imageurl:imageUrl })
    }).then(response => response.json())
        .then((data) => {
            if (data.result) {
              console.log(data.result)
                window.location.reload()
            } else {
                return
            }
        })
        .then(() => setModal(!modal))
}



  return (
    <div>
      <Button className="btn-create" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Create New</ModalHeader>
        <ModalBody>
        <Form>
          <FormGroup>
          <Input type="text" value={productName} placeholder="Product Name" name="productName" id="newProductName" onChange={handleProductName} required/>

          </FormGroup>
          <FormGroup>
          <Input value={productPrice} placeholder="Price (Dollar USD)" name="productPrice" id="newProductPrice" onChange={handleProductPrice} required />

          </FormGroup>
          <FormGroup>
          <Input type="text" value={imageUrl} placeholder="Image Url"  name="imageUrl" id="newImageUrl" onChange={handleImageUrl} required />

          </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>Create</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
  function handleProductName(event) {
		setProductName(event.target.value);
  }
  function handleProductPrice(event) {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      setProductPrice(event.target.value);
   }
    
		
  }
  function handleImageUrl(event) {
		setImageUrl(event.target.value);
  }
  
  
}

export default CreateProduct;