import React from 'react';
import { FiXCircle } from 'react-icons/fi';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import { ContainerHeader, Container } from './styles';

function Search({ searchOpen, handleSearchSidebar }) {
  return (
    <Sidebar sidebarClass={`sidebar__search ${searchOpen ? 'active' : '' }`}>
      <Header>
        <ContainerHeader>
          <h3>Buscar produtos</h3>
          <button type="button" onClick={handleSearchSidebar}>
            <FiXCircle size={24} />
          </button>
        </ContainerHeader>
      </Header>
      <Container className="container">
        Use o campo para encontrar produtos!
      </Container>
    </Sidebar>
  );
};

export default Search;