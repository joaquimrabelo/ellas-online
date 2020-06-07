import React from 'react';

import { Container } from './styles';

function Header({ children }) {
  return (
    <Container>
      <div className="container">
        {children}
      </div>
    </Container>
  )
}

export default Header;