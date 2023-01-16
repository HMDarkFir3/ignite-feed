import { FC } from "react";

import { Container } from "./styles";

export const PostCard: FC = () => {
  return (
    <Container>
      <header>
        <div className="profile">
          <img src="https://github.com/hmdarkfir3.png" />

          <div>
            <strong>Nome do usuário</strong>
            <span>Nome do usuário</span>
          </div>
        </div>

        <time>Publicado ha 1h</time>
      </header>

      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
      </div>
    </Container>
  );
};
