import { useState } from "react";
import { MdPregnantWoman } from "react-icons/md";
import {
  Container,
  BlockTabs,
  Tab,
  TabsContent,
  Content,
  ThumbnailLabel,
  ThumbnailScope,
  ThumbnailWrapper,
  ThumbnailDesc,
  Thumbnail,
  Text,
} from "../styles/tabsElements";

const Offer = () => {
  const labels = [
    {
      label: "Sesja dziecięca",
      scope: "60 minut, 15 odbitek",
      thumbnail: "Dziecko.jpg",
      content:
        "Jeśli chcesz zapamiętać uśmiech, pierwszy ząbek, roześmiane oczy Twojego Maluszka, to na tej sesji uchwycę to wszystko! Sesja dziecięca to dla mnie zawsze nialada wyzwanie. Są to najbardziej nieprzewidywalne sesje, ale dzięki temu mogę uwiecznić wiele emocji.",
    },
    {
      label: "Sesja noworodkowa",
      scope: "120 minut, 20 odbitek",
      thumbnail: "Noworodek.jpg",
      content:
        "Na sesje noworodkowe zapraszamy rodziny z maluszkami między 5 a 14 dniem życia. Na sesji zadbam o komfort i bezpieczeństwo Twojego dziecka, ale także o kameralną atmosferę dla świeżo upieczonych rodziców. Zapewniam szeroki wybór stylizacji i otwartość na wasze pomysły. Na sesje należy zapisać się jeszcze zanim dziecko przyjdzie na świat.",
    },
    {
      label: "Smash Cake",
      scope: "60 minut, 15 odbitek",
      thumbnail: "Smashcake.jpg",
    },
    {
      label: "Sesja ciążowa",
      scope: "90 minut, 20 odbitek",
      thumbnail: "Ciaza.jpg",
      content: "hehe dziala?",
    },
    {
      label: "Mini-sesja świąteczna",
      scope: "30 minut, 10 odbitek",
      thumbnail: "Swieta.jpg",
    },
    {
      label: "Sesja rodzinna",
      scope: "90 minut, 20 odbitek",
      thumbnail: "Rodzinna.jpg",
    },
    { label: "Sesja narzeczeńska", thumbnail: "Narzeczenska.jpg" },
    { label: "Chrzest", thumbnail: "Chrzest.jpg" },
    { label: "Komunia", thumbnail: "Komunia.jpg" },
  ];
  const [active, setActive] = useState(labels[0]);
  return (
    <Container key="t.label">
      {labels.map((t) => (
        <>
          {/* <Content key={t.content} active={active === t.label}>
            {t.content}
          </Content> */}
          <Tab
            key={t.label}
            onClick={() => setActive(t.label)}
            active={active === t.label}
          >
            <ThumbnailWrapper>
              <Thumbnail
                src={`${process.env.PUBLIC_URL}/${t.thumbnail}`}
              ></Thumbnail>
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
