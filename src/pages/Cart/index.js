import React from 'react';
import { FiXCircle } from 'react-icons/fi';

import { useSidebar } from '../../hooks/Sidebar';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import { ContainerHeader, Container } from './styles';

function Cart() {
  const { cartOpen, handleCartSidebar } = useSidebar();
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