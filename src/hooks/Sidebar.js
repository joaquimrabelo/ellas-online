import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleSearchSidebar = () => {
    setSearchOpen(!searchOpen);
  }

  const handleCartSidebar = () => {
    setCartOpen(!cartOpen);
  }

  const handleCloseSidebar = () => {
    setSearchOpen(false);
    setCartOpen(false);
  }

  return (
    <SidebarContext.Provider value={{
      searchOpen, 
      cartOpen, 
      handleSearchSidebar, 
      handleCartSidebar,
      handleCloseSidebar,
    }}>
      {children}
    </SidebarContext.Provider>
  );
};

function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebar precisa ser usado com o SidebarContext');
  }

  return context;
}

export { SidebarProvider, useSidebar };