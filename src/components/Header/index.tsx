import { FC } from "react";

import { Container } from "./styles";

import igniteLogo from "@assets/ignite-logo.svg";

export const Header: FC = () => {
  return (
    <Container>
      <div>
        <img src={igniteLogo} alt="Ignite Feed - Logo" />
        <p>Ignite Feed</p>
      </div>
    </Container>
  );
};
