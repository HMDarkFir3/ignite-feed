import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.gray800};
  border-radius: 8px;

  overflow: hidden;

  .cover {
    width: 100%;
    height: 72px;

    object-fit: cover;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: calc(0px - 1.5rem - 9px);

    & > img {
      width: 3rem;
      height: 3rem;

      border: 4px solid ${({ theme }) => theme.colors.gray800};
      outline: 2px solid ${({ theme }) => theme.colors.green500};
      border-radius: 8px;

      box-sizing: initial;
    }

    & > strong {
      margin-top: 1rem;

      line-height: 1.6;
      color: ${({ theme }) => theme.colors.gray100};
    }

    & > span {
      line-height: 1.6;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray400};
    }
  }

  & > footer {
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;

    border-top: 1px solid ${({ theme }) => theme.colors.gray600};

    & > a {
      display: block;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      width: 100%;
      height: 50px;

      padding: 0 1.5rem;

      font-weight: 700;
      color: ${({ theme }) => theme.colors.green500};

      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.green500};
      border-radius: 8px;

      transition: color 0.3s, background-color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.green500};
      }
    }
  }
`;
