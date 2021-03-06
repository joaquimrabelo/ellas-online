import React, { useState } from 'react';

import { useSidebar } from '../../hooks/Sidebar';

import imagemIndisponivel from '../../assets/imagem-indisponivel.png';
import { Container } from './styles';

function Product({ product }) {
  const [image, setImage] = useState(product.image)

  const { handleCloseSidebar } = useSidebar();

  function handleImageError() {
    setImage(imagemIndisponivel);
  }

  return (
    <Container onClick={handleCloseSidebar} className="product" to={`/product/${product.slug}`}>
      {product.on_sale && <span className="discount">{product.discount_percentage}</span>}
      <figure>
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