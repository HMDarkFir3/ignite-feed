import { FC } from "react";

import { Header } from "@components/Header";
import { Sidebar } from "@components/Sidebar";
import { PostCard } from "@components/PostCard";

import { Container } from "./styles";

export const Home: FC = () => {
  return (
    <Container>
      <Header />

      <div>
        <Sidebar />
        <main>
          <PostCard />
          <PostCard />
        </main>
      </div>
    </Container>
  );
};
