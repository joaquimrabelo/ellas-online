import React from 'react';

import { Container } from './styles';
import Product from '../Product';

function ProductList({ products }) {
  return (
    <Container>
      <div className="container">
        {products.map(product => <Product product={product} />)}
      </div>
    </Container>
  );
};

export default ProductList;