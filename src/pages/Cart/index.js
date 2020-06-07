import React from 'react';
import { FiXCircle } from 'react-icons/fi';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import { ContainerHeader, Container } from './styles';

function Cart({ cartOpen, handleCartSidebar }) {
  console.log('cartopen', cartOpen);
  console.log('handlecart', handleCartSidebar);
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
        Seu carrinho está vazio!
      </Container>
    </Sidebar>
  );
};

export default Cart;