import styled from "styled-components";
export const ProductDescriptionWrapper = styled.div`
  display: flex;
  justify-content: left;
  height: fit-content;
  width: 100%;
`;

export const StyledImageObject = styled.object`
  display: block;
  width: 100px;
  height: auto;
  object-fit: cover;
  padding: 5px;
  cursor: pointer;
`;

export const ProductDescriptionImageArray = styled.div`
  margin-right: 40px;
  height: 120px;
  width: 120px;
`;
export const ProductDescriptionImagesWrapper = styled.div`
  display: flex;
  margin-left: 80px;
  /* width: 700px; */
  position: relative;
`;
export const ProductWindowIMG = styled.img`
  display: block;
  width: 300px;
  height: 300px;
  object-fit: cover;
`;
export const ProductWindowH2 = styled.h2`
  color: rgba(141, 143, 154, 1);
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
  padding-top: 25px;
`;
export const ProductWindowH4 = styled.h4`
  color: rgba(141, 143, 154, 1);
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
  margin-top: 50px;
  margin-bottom: 100px;
  justify-items: center;
  align-items: center;
`;
export const BuyButtonContainer = styled.div`
  position: absolute;
  top: 290px;
  right: 50px;
`;
export const HovEff = styled.div`
  position: relative;
  transition: 0.04s;
  &:hover {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    transform: scale(1.05);
  }
`;
export const OutOfStock = styled.p`
  position: absolute;
  font-size: 23px;
  color: rgba(141, 143, 154, 1);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const StyledOutOfStock = styled(OutOfStock)`
  font-size: 3rem;
  width: 80%;
  text-align: right;
  font-weight: 1000;
  top: 45%;
  color: rgba(141, 143, 154, 0.25);

`;
export const TextContainer = styled.div`
      width: 400px;
      margin-left: 10%;
      margin-right: 10%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    `;
  export  const FlexRowDiv = styled.div`
    display: flex;
    flex-direction: row;
  `;
 export const CustomValueButtonContainer = styled.div`
    margin-top: 40px;
  `;
  export const BrandWithMargin = styled.div`
    margin-bottom: 10px;
  `;
  export const ProductDescriptionContainerOutter = styled.div`
  margin-bottom: 40px;
`;
  export const ProductDescriptionContainerInner = styled.div`
  padding-top: 80px;
`;
export const ShowMore = styled.p`
  cursor: pointer;
  color: blue;
`;
export const DangerousHtmlContainer = styled.div`
margin-top: 30px;
`;
export const BigImgObject = styled.object`
height:500px;
width:auto;
padding-left:30px;
padding-top:5px;
`;
export const BlankSpace = styled.div`
height: 18px;
`;