import React, { useState } from 'react';
import { FiPlus, FiMinus, FiTrash } from 'react-icons/fi'

import { useCart } from '../../hooks/Cart';

import imagemIndisponivel from '../../assets/imagem-indisponivel.png';
import { Container } from './styles';

function CartProduct({ product }) {
  const [image, setImage] = useState(product.image);
  function handleImageError() {
    setImage(imagemIndisponivel);
  }

  const { increaseProduct, decreaseProduct, removeFromCart } = useCart();

  return (
    <Container>
      <figure>
        <img 
          src={image} 
          alt={product.name} 
          onError={handleImageError}
        />
      </figure>
      <div className="product__info">
        <p>{product.name}</p>
        <span className="price">
          {product.actual_price} x {product.quant} = {product.total}
        </span>
        <span className="size">Tam.: {product.size}</span>
        <div className="product__option">
          <button 
            onClick={() => decreaseProduct(product.code_color, product.sku) }
          >
            <FiMinus />
          </button>
          <span className="quant">{product.quant}</span>
          <button 
            onClick={() => increaseProduct(product.code_color, product.sku) }
          >
            <FiPlus />
          </button>
          <button 
            onClick={() => removeFromCart(product.code_color, product.sku) } 
            className="remove"
          >
            <FiTrash color="#de4242" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CartProduct;