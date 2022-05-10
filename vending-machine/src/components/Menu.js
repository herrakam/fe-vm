import React from "react";
import styled from "styled-components";
import Product from "./Product";

function Menu() {
  return (
    <MenuWrap>
      <ProductWindow>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </ProductWindow>
      <ProductOutput></ProductOutput>
    </MenuWrap>
  );
}
const MenuWrap = styled.div`
  width: 900px;
  height: 100%;
  border-right: 5px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  gap: 10%;
`;
const ProductWindow = styled.div`
  width: 800px;
  height: 70%;
  border: 3px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  place-content: start center;
  grid-gap: 10px;
  grid-auto-rows: 130px;
  grid-template-columns: repeat(7, 1fr);
`;
const ProductOutput = styled.div`
  width: 800px;
  height: 20%;
  border: 3px solid black;
  background: ${({ theme }) => theme.colors.darkGray};
  border-radius: 40px;
`;
export default Menu;
