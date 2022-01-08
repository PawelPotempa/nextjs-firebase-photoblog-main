import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AnimatePresence } from "framer-motion";
import {
  PageWrap,
  FAQIntroduction,
  FAQWrap,
  FAQDropdown,
  FAQMinus,
  FAQPlus,
  FAQLink,
  Container,
} from "../styles/faqElements";

const FAQ = () => {
  const FAQData = [
    {
      question: "Jak się ubrać na sesję zdjęciową?",
      answer:
        "Przede wszystkim pamiętajcie, aby Wasze kolory współgrały ze sobą i nie były jaskrawe. Ważnym jest, aby na zdjęciu nic nie odciągało od Was uwagi. Załóżcie ubrania w stonowanych kolorach, bez wzorów i aplikacji. ",
      link: "https://firebasestorage.googleapis.com/v0/b/nextjs-photoblog.appspot.com/o/clothes_example.jpeg?alt=media&token=59169600-8df1-4527-a71f-8678616b7f2e",
      answer2:
        " zamieściłam kilka podpowiedzi. Wszystkie ubrania zarówno dla mam jak i dla maluszków są systematycznie prane i dezynfekowane.",
    },
    {
      question: "Co zabrać ze sobą na sesję zdjęciową?",
      answer:
        "Najważniejsze co musicie mieć to dobry nastrój! Jeśli idziemy w plener - weźcie wodę i wygodne buty na zmianę. Dla Waszego Maluszka pamiętajcie o przekąsce, dla mniejszych o mleczku. Wszelkie akcesoria modowe i dodatki mile widziane 😊",
    },
    {
      question: "O jakiej porze ustalić sesję?",
      answer:
        "Jeśli sesja jest z udziałem Twojego Maluszka dostosujemy godzinę zdjęć do jego drzemki, gdyż chcemy, aby był wypoczęty na sesji. Sesje plenerowe starajmy się ustalać w godzinach popołudniowych.",
    },
    {
      question: "Czy dostanę wszystkie nieobrobione zdjęcia z sesji?",
      answer:
        "Nie. Oddaję tylko zdjęcia obrobione. Kadry wybieracie Wy ze zdjęć, które będę uważać za nadające się do publikacji. W przypadku reportażu dostajecie wszystkie jakie uznam za nadające się do publikacji.",
    },
  ];

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const showQuestions = FAQData.map((item, index) => {
    return (
      <AnimatePresence>
        <FAQWrap onClick={() => toggle(index)} key={index}>
          <span>{clicked === index ? <FAQMinus /> : <FAQPlus />}</span>
          <h1>{item.question}</h1>
        </FAQWrap>
        {clicked === index ? (
          <FAQDropdown
            clicked={clicked}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>
              {item.answer}
              {item.link ? (
                <FAQLink>
                  <a href={item.link}>TUTAJ</a>
                </FAQLink>
              ) : null}
              {item.answer2}
            </p>
          </FAQDropdown>
        ) : null}
      </AnimatePresence>
    );
  });

  return (
    <IconContext.Provider value={{ color: "##00ffb9", size: "25px" }}>
      <PageWrap>
        <Container>
          <FAQIntroduction>
            Cześć! Poniżej postarałam się odpowiedzieć na niektóre z najczęściej
            pojawiających się pytań. Pamiętaj, że zawsze możesz się ze mną
            skontaktować bezpośrednio - wystarczy nacisnąć na przycisk
            &apos;Kontakt&apos; u góry strony!
          </FAQIntroduction>
          {showQuestions}
        </Container>
      </PageWrap>
    </IconContext.Provider>
  );
};

export default FAQ;
