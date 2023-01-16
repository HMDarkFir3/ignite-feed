import styled from "styled-components";

export const Container = styled.article`
  padding: 2.5rem;

  background-color: ${({ theme }) => theme.colors.gray800};
  border-radius: 8px;

  & + & {
    margin-top: 2rem;
  }

  & > header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .profile {
      display: flex;
      flex-direction: row;
      align-items: center;

      & > img {
        width: 3rem;
        height: 3rem;

        border: 4px solid ${({ theme }) => theme.colors.gray800};
        outline: 2px solid ${({ theme }) => theme.colors.green500};
        border-radius: 8px;

        box-sizing: initial;
      }

      & > div {
        display: flex;
        flex-direction: column;

        margin-left: 1rem;

        & > strong {
          line-height: 1.6;
          color: ${({ theme }) => theme.colors.gray100};
        }

        & > span {
          line-height: 1.6;
          font-size: 0.875rem;
          color: ${({ theme }) => theme.colors.gray400};
        }
      }
    }

    & > time {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray400};
    }
  }

  .content {
    margin-top: 1.5rem;
  }
`;
