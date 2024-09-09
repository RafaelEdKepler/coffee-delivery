import styled from "styled-components";

interface DataProps {
  color: "purple" | "yellow" | "yellow-dark";
}

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const DataSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    color: ${props => props.theme["yellow-dark"]};
  }

  span {
    font-size: 1.25rem;
    color: ${props => props.theme["base-subtitle"]};
  }
`;

export const AllContainer = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between;
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid ${props => props.theme["yellow-dark"]};
  margin-top: 2.5rem;
  width: 32.812rem;
  height: 16.812rem;

  div:last-child {
    margin-bottom: 0;
  }
`

export const Data = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 2rem 2.5rem;

  div {
    display: flex;
    flex-direction: column;

    span {
      color: ${props => props.theme["base-text"]};
      font-size: 1rem;
    }
  }
`;

export const IconCircle = styled.div<DataProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 999999px;
  background-color: ${(props) => props.theme[props.color]};
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-right: 12px;

  svg {
    color: ${props => props.theme.white};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30.75rem;
    height: 18.313rem;
  }
`;