import React from "react";
import styled from "styled-components";
import { CenterSort, HeightSort } from "../style/Globalstyles";
function Currency() {
  return (
    <CurrencyWrap>
      <Money>1000원</Money>
      <Amount>2개</Amount>
    </CurrencyWrap>
  );
}
const CurrencyWrap = styled.div`
  width: 90%;
  height: 50px;
  ${HeightSort}
  justify-content: space-around;
`;
const Money = styled.div`
  width: 45%;
  height: 100%;
  background: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  ${CenterSort}
`;
const Amount = styled(Money)``;
export default Currency;
