import React, { useState, useEffect} from 'react';

import { useSidebar } from '../../hooks/Sidebar';
import { useProduct } from '../../hooks/Product';

import ContainerStore from '../../components/ContainerStore';
import HeaderStore from '../../components/HeaderStore';
import Loading from '../../components/Loading';
import ProductList from '../../components/ProductList';
import Search from '../Search';
import Cart from '../Cart';

//import { Container } from './styles';

function Home() {
  const [loading, setLoading] = useState(true)
  
  const { searchOpen, cartOpen } = useSidebar();
  const { products, loadProducts } = useProduct();

  useEffect(() => {
    async function getProducts() {
      await loadProducts();
      setLoading(false);
    }
    getProducts();
  }, [loadProducts]);

  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <ContainerStore customClass={searchOpen || cartOpen ? 'sidebar--active' : ''}>
        <HeaderStore />
        <ProductList products={products} />
        <Search searchOpen={searchOpen} />
        <Cart cartOpen={cartOpen} />
      </ContainerStore>
    )
  }
};

export default Home;