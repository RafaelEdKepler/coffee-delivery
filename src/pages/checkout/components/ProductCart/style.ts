import styled from "styled-components";

export const ProductCartContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 23rem;

    img {
        width: 4rem;
        height: 4rem;
    }
`;

export const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1.25rem;

    span {
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme["base-subtitle"]};
    }
`;

export const QuantityProductContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
`

export const UnityValueContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;

    span {
        font-size: 1rem;
        font-weight: bold;
    }
`