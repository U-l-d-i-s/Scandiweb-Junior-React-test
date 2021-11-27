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
  position: relative;
`;

export const ImgArrowWrapper = styled.div`
  position: absolute;
  width: 80px;
  top: 0;
  right: 0;
  height: 200px;
`;

export const InnerCartImgWrapper = styled.div`
  min-height: 100%;
  display: block;
  position: relative;
`;
export const ImgArrowWrapperOnHover = styled.div`
  position: relative;
  width: 200px;
  height: fit-content;
  opacity: 0;
  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    opacity: 1;
  }
`;

export const CartOptionButtonsWrapper = styled.div`
  margin-bottom: 0px;
  display: flex;
  flex-direction: row;
`;
export const CartOptionButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CartOptionButtonsInnerContainer = styled.div`
  margin-right: 30px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: row;
`;
export const DummyImgAlignDiv = styled.div`
  position: absolute;
  left: 80px;
  width: 40px;
  height: 200px;
`;
export const StyledArrayImg = styled.img`
  display: block;
  height: 200px;
  width: 200px;
  object-fit: cover;
  object-position: 0 30%;
`;
