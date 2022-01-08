import React from "react";
import {
  Container,
  Content,
  Data,
  Socials,
  SocialLink,
  FB,
  IG,
} from "../styles/pricingElements";

const Pricing = () => {
  return (
    <Container>
      <Content>
        Jeśli jeszcze do mnie nie zadzwoniliście lub nie napisaliście, to teraz
        już musicie! :)
      </Content>
      <Data>photopassio.kielce@gmail.pl</Data>
      <Data>+48 793 014 475</Data>
      <Socials>
        <SocialLink
          target="_blank"
          href="https://www.facebook.com/PhotoPassio/"
          rel="noopener noreferrer"
        >
          <FB />
        </SocialLink>
        <SocialLink
          target="_blank"
          href="https://www.instagram.com/photopassio.ck/"
          rel="noopener noreferrer"
        >
          <IG />
        </SocialLink>
      </Socials>
    </Container>
  );
};

export default Pricing;
