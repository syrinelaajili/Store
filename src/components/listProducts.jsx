import React from "react";
import "../styles/listProducts.css";
import Product from "../components/product.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useState } from "react";

export default function ListProducts() {
  const [title, setTitle] = useState("");
  const [parag, setParag] = useState("");
  const [img, setImg] = useState("");
  const [search, setSearch] = useState("");
  const [productsList, setproductsList] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productsList));
  }, [productsList]);

  function addProduct() {
    let product = { title: title, parag: parag, img: img };
    setproductsList([...productsList, product]);
    setTitle("");
    setParag("");
    setImg("");
  }
  console.log(productsList);
  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <div className="add-product">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              type="text"
              placeholder="Enter your name product"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              onChange={(e) => {
                setParag(e.target.value);
              }}
              value={parag}
              type="text"
              placeholder="Enter price"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              onChange={(e) => {
                setImg(e.target.value);
              }}
              value={img}
              type="text"
              placeholder="Add image"
            />
          </Form.Group>
          <Button onClick={() => addProduct()} variant="primary" >
            Submit
          </Button>
        </Form>
      </div>
      <div className="flex">
        {productsList.length > 0 ? (
          <div>
            {productsList.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase())).map((product, index) => {
              return (
                <Product
                  key={index}
                  img={product.img}
                  title={product.title}
                  parag={product.parag}
                />
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
