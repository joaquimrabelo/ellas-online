import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-left: auto;
    background: transparent;
    border: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  height: 100vh;
  padding-bottom: 120px;
  overflow-y: auto;
`;

export const CartAmount = styled.div`
  height: 40px;
  line-height: 37px;
  text-align: center;
  border: 1px solid #212529;
  background-color: #212529;
  color: #fff;
  font-weight: 500;
  box-shadow: 0px 0px 3px 1px #000;

  margin: 0 10px;

  position: absolute;
  right: 0;
  bottom: 20px;
  left: 0;
`;