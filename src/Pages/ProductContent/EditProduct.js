import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';


const EditProduct = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [productName, setProductName] = useState(null);
  const [productPrice, setProductPrice] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="secondary" onClick={toggle} className={className}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Edit Product</ModalHeader>
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
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
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

export default EditProduct;