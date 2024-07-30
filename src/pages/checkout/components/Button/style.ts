import styled from "styled-components";

interface ButtonContainerProps {
    size: "small" | "medium",
    selected: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: ${props => props.size === "medium" ? "12.167rem" : "auto"};
    height: ${props => props.size === "medium" ? "3.188rem" : "2rem"};

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 0 ${props => props.size === "medium" ? "1.25rem" : "8px"};

    border-radius: 6px;
    border: 1px solid ${props => props.selected ? props.theme.purple : props.theme["base-button"]};
    background-color: ${props => props.selected ? props.theme["purple-light"] : props.theme["base-button"]};

    gap: ${props => props.size === "medium" ? "0.75rem" : "0.25rem"};

    svg {
        color: ${props => props.theme.purple};
    }

    span {
        font-size: 0.75rem;
        font-weight: 400;
        color: ${props => props.theme["base-text"]};
    }
`;