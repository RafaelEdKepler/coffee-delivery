import styled from "styled-components";

const ICONS_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  base: 'base-text'
} as const

interface IconsProps {
  iconColor: keyof typeof ICONS_COLORS
}

export const MainSectionContainer = styled.section`
  display: flex;
  flex-direction: row;
`;

export const MainSectionInfoContainer = styled.div`

  h2 {
    font-size: 3rem;
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    padding-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
  }
`;

export const MainSectionInstructionsContainer = styled.div`
  padding: 4.063rem 1.313rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  div:first-child, div:nth-child(2) {
    padding-bottom: 1.25rem;
  }
`;

export const SingleInfoContainer = styled.div<IconsProps>`
  display: flex;
  gap: 5.5px;

  align-items: center;

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 999999px;
    background-color: ${(props) => props.theme[ICONS_COLORS[props.iconColor]]};
    display: flex;
    padding: 0.5rem;

    svg {
      color: ${props => props.theme.white};
    }
  }

  span {
    font-size: 1rem;
    color: ${props => props.theme["base-text"]};
  }
`;

export const MainSectionImageContainer = styled.div`
  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`;

export const ProductsSectionContainer = styled.section`
  padding: 9.094rem 0;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }
`;

export const ProductsList = styled.div`
  padding: 3.375rem 0;

  display: grid;
  grid-template-columns: 20vw 20vw 20vw 20vw;

  @media (max-width: 768px) {
    grid-template-columns: 25vw 25vw 25vw 25vw;
  }
`;