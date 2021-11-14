import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  width: 85%;
  flex-direction: row;
  border-top: 2px solid #e5e5e5;
  margin-bottom: 20px;
  padding-top: 20px;
  margin-left: 80px;
`;
export const CartFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0px;
`;
export const CartProduct = styled.div`
  display: flex;
  height: 80px;
`;
export const InnerCartProduct = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 30px;
  align-items: left;
  justify-content: center;
`;
export const IncOrDecWrapper = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const CartImgWrapper = styled.div`
  display: flex;
  height: 100%;
  margin-left: 10px;
  position:relative;
`;

export const ImgArrowWrapper = styled.div`
  position: absolute;
  width: 80px;
  top: 0;
  right:0;
  height: 200px;
`;

export const InnerCartImgWrapper = styled.div`
  min-height: 100%;
  display: block;
  position: relative;
`;