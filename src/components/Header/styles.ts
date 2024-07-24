import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  img:first-child {
    width: 5.309rem;
    height: 2.5rem;
  }
`;

export const LocationCartContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.75rem;
`;

export const LocationContainer = styled.div`
  width: 8.938rem;
  height: 2.375rem;

  display: flex;

  border-radius: 6px;
  background-color: ${props => props.theme["purple-light"]};
  color: ${props => props.theme.purple};
  font-size: 0.875rem;
  line-height: 1.3;

  justify-content: center;
  align-items: center;

  gap: 4px;
`;

