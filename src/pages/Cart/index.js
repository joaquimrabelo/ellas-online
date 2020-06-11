import React, { useState } from 'react';
import { FiXCircle } from 'react-icons/fi';

import { useSidebar } from '../../hooks/Sidebar';
import { useCart } from '../../hooks/Cart';
import { useProduct } from '../../hooks/Product';

import FormatCurrency from '../../utils/FormatCurrency';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CartProduct from '../../components/CartProduct';

import { ContainerHeader, Container, CartAmount } from './styles';

function Cart() {
  const { cartOpen, handleCartSidebar } = useSidebar();

  const { cart } = useCart();
  const { products } = useProduct();

  const cartProducts = cart.reduce((result, item) => {
    products.forEach(product => {
      if (item.code_color === product.code_color) {
        let newProduct = {...product};
        newProduct.quant = item.count;
        newProduct.size = item.size;
        newProduct.sku = item.sku;
        newProduct.total = FormatCurrency(product.price * item.count);
        result.push(newProduct);
      }
    });
    return result;
  }, []);

  const subtotal = cartProducts.reduce((total, item) => {
      return total + (item.quant * item.price);
    }, 0);


console.log('all products', cartProducts);
  return (
    <Sidebar sidebarClass={`sidebar__cart ${cartOpen ? 'active' : '' }`}>
      <Header>
        <ContainerHeader>
          <h3>Buscar produtos</h3>
          <button type="button" onClick={handleCartSidebar}>
            <FiXCircle size={24} />
          </button>
        </ContainerHeader>
      </Header>
      <Container className="container">
        {cartProducts.length ? 
          cartProducts.map((item, index) => {
            return (
              <CartProduct key={index} product={item} />
            )
          })
          :
          <h4>Seu carrinho está vazio!</h4>
        }
      </Container>
      <CartAmount>
        Subtotal: { FormatCurrency(subtotal) }
      </CartAmount>
    </Sidebar>
  );
};

export default Cart;