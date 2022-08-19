import "../styles/product.css";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';

export default function Product(props) {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  const [show, setShow] = useState(false);
  function handleClose() {
    setShow(false);
  }
  function handleShow() {
    setShow(true);
  }
  
  const [name, setName]=useState("")
  const [phone, setPhone]=useState("")
  const [address, setAddress]=useState("")
  
  return (
    <div>
      <div>
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <p>{props.parag}</p>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
        <span className="money" data-price="" data-currency-original="44,99€" data-currency-eur="44,99€" data-currency="EUR">{props.price}</span>
        <button onClick={handleShow}>Commander</button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label onChange={(name)=>{setName(name.target.value)} }>Name</Form.Label>
        <Form.Control value={name} type="name" placeholder="" />
        <Form.Label onChange={(phone)=>{setPhone(phone.target.value)} }>Phone Number</Form.Label>
        <Form.Control value={phone} type="texte" placeholder="" />
        <Form.Label onChange={(address)=>{setAddress(address.target.value)} }>Address</Form.Label>
        <Form.Control value={address} type="texte" placeholder="" />
      </Form.Group>
    </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
