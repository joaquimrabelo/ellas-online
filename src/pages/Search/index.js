import React, { useState, useEffect } from 'react';
import { FiXCircle } from 'react-icons/fi';

import { useSidebar } from '../../hooks/Sidebar';
import { useProduct } from '../../hooks/Product';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { ContainerHeader, Container } from './styles';

function Search() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');

  const { searchOpen, handleSearchSidebar } = useSidebar();
  const { products } = useProduct();

  useEffect(() => {
    if (search.length >= 3) {
      const prod = products.filter(product => product.slug.includes(search));
      setFilteredProducts(prod);
    } else {
      setFilteredProducts([]);
    }
  }, [products, search]);

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
        <input 
          type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar produto"
          onFocus={() => {}}
        />
      </Container>
      <ProductList products={filteredProducts} />
    </Sidebar>
  );
};

export default Search;