import styled from "styled-components";

export const Icons = styled.div`
  display: flex;
  position: relative; 
  width: 80px;
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
  width: 180px;
`;

export const ListItemCategoriesButton = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;

  transition: color 0.1s, background-color 0.1s;
  color: black;
  background-color: white;

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
export const HackyUnderline = styled.div`
  position: absolute;
  bottom: -1px;
  height: 1px;
  width: 100%;
  background-color: #5ece7b;
`;
export const CategButton = styled.p`
  position: relative;
  display: block;
  font-size: 16px;
  padding: 16px 0;
  margin: 0 12px;
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
  width: 380px;
  top: 0px;
  right: 70px;
  height: fit-content;
  max-height: 90%;
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
export const ImgAlignDummy = styled.div`
  display: inline-block;
  height: 100%;
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
export const OptionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;
export const ListItemTextAmount = styled.p`
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
`;
export const Modal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0px;
`;
export const ModalBlack = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 70px;
  background-color: rgba(57, 55, 72, 0.22);
`;
export const ModalWhite = styled(Modal)`
  top: 80px;
`;
export const SmallCircle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  top: -5px;
  left: 17px;
`;
export const CircleText = styled.p`
  color: white;
`;
export const CartIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30px;
  height: 30px;
`;

export const CurrencyIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
`;
export const CategoryButtonFlex = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const TopDroCartTextWrapper = styled.div`
  width: 140px;
  margin-bottom: 20px;
`;
export const TopDroCartTextContainer = styled.div`
  display: flex;
`;
export const TopDroCartText = styled.p`
  margin-right: 4px;
`;
export const HeaderLogo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`;
