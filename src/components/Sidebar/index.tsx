import { FC } from "react";
import { PencilSimpleLine } from "phosphor-react";

import { Container } from "./styles";

export const Sidebar: FC = () => {
  return (
    <Container>
      <img
        className="cover"
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className="profile">
        <img src="https://github.com/hmdarkfir3.png" />

        <strong>Henrique Marques</strong>
        <span>Mobile Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </Container>
  );
};
