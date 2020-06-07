import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .header__logo img {
    height: 30px;
  }

  .header__actions {
    display: flex;
    align-items: center;

    button + button {
      margin-left: 8px;
    }
    button {
      background: transparent;
      border: none;
    }
  }

`;