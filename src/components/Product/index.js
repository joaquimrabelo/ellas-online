import React, { useState } from 'react';

import imagemIndisponivel from '../../assets/imagem-indisponivel.png';
import { Container } from './styles';

function Product({ product }) {
  const [image, setImage] = useState(product.image)
  console.log(product);
  function handleImageError() {
    setImage(imagemIndisponivel);
  }

  return (
    <Container>
      <figure>
        {product.on_sale && <span className="discount">{product.discount_percentage}</span>}
        <img 
          src={image} 
          alt={product.name} 
          onError={handleImageError}
        />
      </figure>
      <div className="product__info">
        <p>{product.name}</p>
        <div className="price">
          {product.on_sale && <span className="original">{product.regular_price}</span>}
          <span>{product.actual_price}</span>
        </div>
      </div>
    </Container>
  );
};

export default Product;