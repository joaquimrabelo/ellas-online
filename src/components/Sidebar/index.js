import React from 'react';

import { Container } from './styles';

function Sidebar({ sidebarClass, children }) {
  return (
    <Container className={sidebarClass}>
      <div className="sidebar__content">
        {children}
      </div>
    </Container>
  );
};

export default Sidebar;