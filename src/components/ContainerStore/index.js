import React from 'react';

import { Container } from './styles';

function ContainerStore({ children, customClass }) {
  return (
    <Container className={customClass}>
      {children}
    </Container>
  )
}

export default ContainerStore;