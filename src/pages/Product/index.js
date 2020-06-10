import React, { useState, useEffect } from 'react';

import { useSidebar } from '../../hooks/Sidebar';
import { useProduct } from '../../hooks/Product';
import { useCart } from '../../hooks/Cart';

import ContainerStore from '../../components/ContainerStore';
import HeaderStore from '../../components/HeaderStore';
import imagemIndisponivel from '../../assets/imagem-indisponivel.png';
import Search from '../Search';
import Cart from '../Cart';

import { Container } from './styles';

function Product({ match }) {
  const productSlug = match.params.slug;
  const { getProduct } = useProduct();
  const product = getProduct(productSlug);
  const { addToCart } = useCart();

  const { searchOpen, cartOpen } = useSidebar();
  const [image, setImage] = useState(imagemIndisponivel);
  const [tamanho, setTamanho] = useState(null);
  const [errorTamanho, setErrorTamanho] = useState(false);

  useEffect(() => {
    if(product) {
      setImage(product.image);
    }
  }, [product]);

  function handleImageError() {
    setImage(imagemIndisponivel);
  }

  function handleSelectSize(sku) {
    setTamanho(sku);
  }

  function handleAddToCart() {
    if (!tamanho) {
      setErrorTamanho(true);
      return;
    }
    
    addToCart(product.style, tamanho);

  }

  return (
    <ContainerStore customClass={searchOpen || cartOpen ? 'sidebar--active' : ''}>
      <HeaderStore />
      <div className="container">
        {product && 
          <Container>
            {product.on_sale && <span className="discount">{product.discount_percentage}</span>}
            <figure>
              <img 
                src={image} 
                alt={product.name} 
                onError={handleImageError}
              />
            </figure>
            <div className="product__option">
              <div className="product__info">
                <p>{product.name}</p>
                <div className="price">
                  {product.on_sale && <span className="original">{product.regular_price}</span>}
                  <span>{product.actual_price}</span>
                </div>
                <div className="installments">
                  em até {product.installments}
                </div>
              </div>
              <div className="size__options">
                <span>Selecione um tamanho</span>
                {errorTamanho && 
                  <span className="size--error">É necessário escolher o tamanho</span>}
                <div>
                  {product.sizes.map(item => (
                    <button
                      key={item.sku}
                      className={tamanho === item.sku ? 'selected' : ''}
                      disabled={!item.available ? true : false}
                      onClick={() => handleSelectSize(item.sku)}>{item.size}
                    </button>
                  ))}
                </div>
              </div>
              <button className="button__add" onClick={handleAddToCart}>Adicionar ao carrinho</button>
            </div>
          </Container>
        }
      </div>
      <Search searchOpen={searchOpen} />
      <Cart cartOpen={cartOpen} />
    </ContainerStore>
  );
};

export default Product;