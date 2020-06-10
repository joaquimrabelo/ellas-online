import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

import { useSidebar } from '../../hooks/Sidebar';
import { useCart } from '../../hooks/Cart';

import logoImg from '../../assets/logo.png';
import Header from '../Header';
import { Container } from './styles';

function HeaderStore() {
  const { totalCart } = useCart();
  const { handleSearchSidebar, handleCartSidebar } = useSidebar();
  return (
    <Header>
      <Container>
        <Link className="header__logo" to="/">
          <img src={logoImg} alt="Ellas - Moda feminina"/>
        </Link>
        <div className="header__actions">
          <button type="button" onClick={handleSearchSidebar}>
            <FiSearch size={24} />
          </button>
          <button className="button__cart" type="button" onClick={handleCartSidebar}>
            <span className="counter__cart">{totalCart}</span>
            <FiShoppingCart size={24} />
          </button>
        </div>
      </Container>
    </Header>
  )
}

export default HeaderStore;