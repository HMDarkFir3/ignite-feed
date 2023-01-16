import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;

  padding: 1.25rem 0;

  background-color: ${({ theme }) => theme.colors.gray800};

  & > div {
    display: flex;
    align-items: center;

    padding: 0 1rem;

    & img {
      height: 2.5rem;
    }

    & p {
      margin-left: 1rem;

      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray100};
    }
  }
`;
