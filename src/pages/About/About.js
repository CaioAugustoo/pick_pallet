import React from "react";
import Header from "../../Components/Header/Header";
import { AboutSection, WhatIs, ForWho, ForDevs } from "./style";
import { Container } from "../../style/GlobalStyle";
import Head from "../../Components/Helper/Head/Head";

const About = () => {
  return (
    <Container>
      <AboutSection>
        <Head title="Sobre" />
        <Header />

        <h2>Sobre PickPallet</h2>

        <WhatIs>
          <h1>O que é PickPallet?</h1>
          <p>
            PickPallet é um site com coleções de paletas criadas por vocês,
            usuários. PickPallet é, também um clone do ColorHunt. PickPallet foi
            desenvolvido por{" "}
            <a
              href="https://www.instagram.com/iamcaio_a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Caio Augusto
            </a>
            , feito apenas para afins de estudos. Visto que na época Caio estava
            estudando sobre novas tecnologias para desenvolver aplicações webs,
            ColorHunt serviu como uma boa inspiração.
          </p>
        </WhatIs>

        <ForWho>
          <h1>Feito para quem?</h1>
          <p>
            PickPallet foi desenvolvido para ajudar os designers e artistas que,
            muitas vezes, não possuem ideias ou paletas de cores para aplicarem
            à seus projetos.
          </p>
        </ForWho>

        <ForDevs>
          <h1>Desenvolvedores</h1>
          <p>
            O PickPallet é um projeto open source, você pode
            <a
              href="https://github.com/CaioAugustoo/pick_pallet"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              contribuir para o projeto no Github
            </a>
            . Caso você queira utilizar a{" "}
            <a
              href="https://github.com/CaioAugustoo/pickpallet_api"
              target="_blank"
              rel="noopener noreferrer"
            >
              nossa API
            </a>
            , você pode utilizá-la livremente em seus projetos com os métodos{" "}
            <strong>POST</strong> e<strong> GET</strong>.
          </p>
        </ForDevs>
      </AboutSection>
    </Container>
  );
};

export default About;
