import React from 'react';

import { SidebarProvider } from './Sidebar';
import { ProductProvider } from './Product';
import { CartProvider } from './Cart';

function AppProvider({ children }) {
  return (
    <SidebarProvider>
      <ProductProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </ProductProvider>
    </SidebarProvider>
  );
};

export default AppProvider;