import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ProductsForm from "./ProductForm";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const addProduct = (productObj) => {
    setProducts([productObj, ...products]);
  };
  const renderProducts = () => {
    if (products.length <= 0) return <h2>No Products</h2>;
    return products.map((product) => (
      <Card key={`product-${product.id}`}>
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>{product.department}</Card.Meta>
          <Card.Description>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/products/${product.id}`} color="blue">
            View
          </Button>
        </Card.Content>
      </Card>
    ));
  };

  return (
    <div>
      {showForm && <ProductsForm add={addProduct} />}
      <Button onClick={() => setShowForm(!showForm)}>Toggle Form</Button>
      <h1>Products</h1>

      <Card.Group>{renderProducts()}</Card.Group>
    </div>
  );
};

export default Products;
