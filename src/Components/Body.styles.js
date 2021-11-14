import styled from "styled-components";
export const ProductDescriptionWrapper = styled.div`
  display: flex;
  justify-content: left;
  height: fit-content;
  width: 100%;
`;

export const StyledImageObject = styled.object`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 30%;
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
  margin-left: 100px;
  width: 700px;
`;
