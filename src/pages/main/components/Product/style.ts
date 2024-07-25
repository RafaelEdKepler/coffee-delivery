import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  background-color: ${props => props.theme["base-card"]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 6px 36px 6px 36px;
  padding: 0 1.5rem 1.5rem 1.5rem;
  margin-bottom: 2.5rem;
`;

export const ImgContainer = styled.div`
  margin-top: -1.25rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
  }
`

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.75rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.313rem;
    font-size: 0.625rem;
    background-color: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    font-weight: bold;
    padding: 0.5rem 0.25rem;
    margin-left: 0.25rem;
    border-radius: 100px;
  }

  span:first-child {
    margin: 0;
  }
`;

export const TitleProductContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

h3 {
    margin-top: 1rem;
    font-family: 'Baloo 2', sans-serif;
  }
`;

export const DescriptionProductContainer = styled.div`
  	width: 13.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;

    span {
      text-align: center;
      font-size: 0.875;
      color: ${props => props.theme["base-label"]};
    }
`;

export const PriceCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 2.063rem;
  width: 13rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  span, h3 {
    color: ${props => props.theme["base-text"]};
  }

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
  }
`;