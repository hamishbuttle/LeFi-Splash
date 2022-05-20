import styled from "styled-components";
import token from "../DesignToken";

export const Navbar = styled.nav`
  padding: 0rem 1.6rem;
  width: 100%;
  text-align: left;
  background-color: ${token.colours.primary};
  position: sticky;
  left: 0;
  top: 0;
  img {
    display: inline-block;
    margin: 0;
    width: 56px;
  }
  ${token.layout.media.tablet} {
    img {
      width: 72px;
    }
  }
`;

export const ContainerSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Hero = styled.section`
  background-color: ${token.colours.primary};
  text-align: center;
  /* height: 850px; */
  /* height: 100vh; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* padding: 4rem 1.6rem;
  ${token.layout.media.tablet} {
    padding: 8rem 1.6rem;
  } */
  img {
    width: 60px;
    ${token.layout.media.tablet} {
      width: 80px;
      margin-bottom: 2rem;
    }
  }
`;

export const KeyPoints = styled.div`
  max-width: 1200px;
  margin: auto;
  text-align: left;
  ${token.layout.media.desktop} {
    display: flex;
    div {
      margin: 0.8rem;
    }
  }
  div {
    background-color: rgba(255, 255, 255, 0.16);
    /* border: 1.6px solid ${token.colours.accent}; */
    border-radius: 16px;
    padding: 1rem 1.6rem;
    margin: 0.8rem;
    h4 {
      margin: 0.5rem;
    }
  }
`;

export const HowItWorks = styled.section`
  background-color: #1c0c41;
  ${token.layout.media.tablet} {
    padding: 8rem 1.6rem;
  }
  img {
    max-width: 80%;
  }
`;

export const TextContainer = styled.div`
  padding: 1.6rem;
  max-width: 800px;
  margin: 1rem auto 2rem auto;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  height: 100%;
  display: block;
  /* padding: 0rem 0.8rem; */
  position: relative;
  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  margin: 1rem;
  ${token.layout.media.tablet} {
    margin: 2.6rem;
  }
`;

export const Button = styled.button`
  background-color: ${token.colours.accent};
  color: white;
  padding: 0.8rem 1.2rem;
  display: inline-block;
  border-radius: 10rem;
  outline: none;
  border: none;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 17px;
  ${token.layout.media.tablet} {
    font-size: 19px;
    padding: 1rem 1.6rem;
  }
`;

export const ButtonWhite = styled.button`
  background-color: ${token.colours.primary};
  color: white;
  padding: 0.8rem 1.2rem;
  display: inline-block;
  border-radius: 10rem;
  outline: none;
  border: none;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 17px;
  ${token.layout.media.tablet} {
    font-size: 19px;
    padding: 1rem 1.6rem;
  }
`;

export const StyledFooter = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 0.8rem;
  text-align: left;
  color: rgba(255, 255, 255, 0.5);
  div {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    img {
      width: 64px;
    }
  }
`;
