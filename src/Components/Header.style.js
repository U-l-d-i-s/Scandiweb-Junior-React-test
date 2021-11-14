import styled from "styled-components";

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70px;
`;
export const MainHeader = styled.div`
  position: fixed;
  display: flex;
  width: calc(100% - 200px);
  height: 70px;
  top: 0;
  padding-left: 100px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 2;
`;

export const HeaderCategories = styled.div`
  width: 200px;
`;

export const ListItemCategoriesButton = styled.li`
  position: relative;
  width: 60%;
  text-align: center;
  display: inline-block;
`;
export const HackyUnderline = styled.div`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: -1px;
  height: 1px;
  width: 75%;
  background-color: #5ece7b;
`;
export const CategButton = styled.p`
  position: relative;
  display: block;
  font-size: 16px;
  padding: 16px 0;
  margin: 0 12px;
  transition: color 0.1s, background-color 0.1s;
  color: black;
  background-color: white;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #5ece7b;
  }
  &:focus {
    color: #5ece7b;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    height: 1px;
    width: 100%;
    background-color: #5ece7b;
    transform: scale(0, 1);
    transition: color 0.1s, transform 0.2s ease-out;
    transform-origin: center top;
  }
  &:hover:after {
    transform-origin: center top;
    transform: scale(1);
  }
`;

export const CurDropdown = styled.div`
  top: -25px;
  right: 100px;
  z-index: 10;
  background-color: white;
  padding-left: 10px;
  position: absolute;
  width: 100px;
  height: 160px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
export const CurDisplayProducts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100px;
  height: 160px;
`;

export const DropdownCartWrapper = styled.div`
  z-index: 10;
  background-color: white;
  align-items: start;
  padding: 10px;
  position: absolute;
  width: 320px;
  top: 0px;
  right: 70px;
  height: fit-content;
  max-height: 700px;
  overflow-y: auto;
`;
export const DropdownCartTotal = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const DropdownCartButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
export const InnerListItemCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  margin-right: 0px;
  align-items: left;
  justify-content: center;
`;
export const ListItemDirection = styled.div`
  margin-bottom: 0px;
  display: flex;

  flex-direction: row;
`;
// export const  = styled.div`

// `;

export const ProductWindowIMG = styled.img`
  display: block;
`;
export const ProductWindowH2 = styled.h2`
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
`;
export const ProductWindowH4 = styled.h4`
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
`;

export const ProductWindowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 50px;
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 100px;
  margin-bottom: 100px;
  justify-items: center;
  align-items: center;
`;
export const BuyButtonContainer = styled.div`
  position: absolute;
  top: 290px;
  right: 50px;
`;

export const ListItemCartName = styled.div``;
export const ListItemCartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: fit-content;
  width: 100%;
  flex-direction: row;
  margin-bottom: 40px;
  padding-top: 0px;
  margin-left: 0px;
`;
export const ListItemCartTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0px;
`;
export const ListItemCartImageAndIncDec = styled.div`
  display: flex;
`;
export const ListItemIncDecWrapper = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const ListItemImgWrapper = styled.div`
  height: 100%;
  margin-left: 10px;
  text-align: center; 
  white-space: nowrap;
`;
export const ListItemImg = styled.img`
  max-height: 100px;
  max-width: 70px;
  vertical-align: middle;

`;
export const ListItemTextNameBrand = styled.p`
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: left;
`;
export const ListItemTextAmount = styled.p`
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
`;
export const ModalBlack = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 70px;
  background-color: rgba(57, 55, 72, 0.22);
`;
export const ModalWhite = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 70px;
`;
