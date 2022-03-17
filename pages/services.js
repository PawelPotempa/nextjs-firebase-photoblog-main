import { useState } from "react";
import {
  Container,
  Tab,
  ThumbnailLabel,
  ThumbnailScope,
  ThumbnailWrapper,
  ThumbnailDesc,
  Thumbnail,
  Text,
} from "../styles/servicesElements";

const Offer = () => {
  const labels = [
    {
      label: "Sesja dziecięca",
      scope: "60 minut, 15 odbitek",
      thumbnail: "portrait.jpg",
      content: "Tu wyświetli się opis oferowanej przez Ciebie usługi",
    },
    {
      label: "Sesja noworodkowa",
      scope: "120 minut, 20 odbitek",
      thumbnail: "portrait.jpg",
      content: "Tu wyświetli się opis oferowanej przez Ciebie usługi",
    },
    {
      label: "Smash Cake",
      scope: "60 minut, 15 odbitek",
      thumbnail: "portrait.jpg",
      content: "Tu wyświetli się opis oferowanej przez Ciebie usługi",
    },
    {
      label: "Sesja ciążowa",
      scope: "90 minut, 20 odbitek",
      thumbnail: "portrait.jpg",
      content: "Tu wyświetli się opis oferowanej przez Ciebie usługi",
    },
    {
      label: "Mini-sesja świąteczna",
      scope: "30 minut, 10 odbitek",
      thumbnail: "portrait.jpg",
      content: "Tu wyświetli się opis oferowanej przez Ciebie usługi",
    },
    {
      label: "Sesja rodzinna",
      scope: "90 minut, 20 odbitek",
      thumbnail: "portrait.jpg",
      content: "Tu wyświetli się opis oferowanej przez Ciebie usługi",
    },
    {
      label: "Sesja narzeczeńska",
      scope: "90 minut, 20 odbitek",
      thumbnail: "portrait.jpg",
      content: "Tu wyświetli się opis oferowanej przez Ciebie usługi",
    },
    {
      label: "Chrzest",
      scope: "90 minut, 20 odbitek",
      thumbnail: "portrait.jpg",
      content: "Tu wyświetli się opis oferowanej przez Ciebie usługi",
    },
    {
      label: "Komunia",
      scope: "90 minut, 20 odbitek",
      thumbnail: "portrait.jpg",
      content: "Tu wyświetli się opis oferowanej przez Ciebie usługi",
    },
  ];
  const [active, setActive] = useState(labels[0]);
  return (
    <Container key="t.label">
      {labels.map((t) => (
        <>
          <Tab
            key={t.label}
            onClick={() => setActive(t.label)}
            active={active === t.label}
          >
            <ThumbnailWrapper>
              <Thumbnail src={`/${t.thumbnail}`}></Thumbnail>
              <ThumbnailLabel>{t.label}</ThumbnailLabel>
              <ThumbnailScope>{t.scope}</ThumbnailScope>
              <ThumbnailDesc>
                <Text>{t.content}</Text>
              </ThumbnailDesc>
            </ThumbnailWrapper>
          </Tab>
        </>
      ))}
    </Container>
  );
};

export default Offer;
