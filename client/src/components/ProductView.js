import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Segment, Header, Button } from "semantic-ui-react";

export default function ProductView(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    Axios.get(`/api/products/${props.match.params.id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <Segment>
        <Header as="h1">{product.name}</Header>
        <Header as="h3">{product.department}</Header>
        <Header as="h6">{product.price}</Header>

        <br />
        <br />
        <Button color="black" onClick={props.history.goBack}>
          Back
        </Button>
      </Segment>
    </div>
  );
}
