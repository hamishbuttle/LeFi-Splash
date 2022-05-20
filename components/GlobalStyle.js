import { createGlobalStyle } from "styled-components";
import token from "./DesignToken";
import bg from "../images/animationplaceholder.svg";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  /* border: 1px solid red; */
}
section, footer {
  background-color: ${token.colours.primary};
}
section {
  padding: 4rem 1.6rem;
  ${token.layout.media.desktop} {
    padding: 6rem 1.6rem;
    }
}
  body {
  margin: 0;
  padding: 0;
  font-family: "Gopher", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  font-size: 19px;
  color: white;
  text-align: center;
  }
  h1 {
    font-family: 'Space Grotesk', sans-serif;
    margin: 0;
    font-size: 40px;
    ${token.layout.media.tablet} {
      font-size: 64px;
    }
    ${token.layout.media.desktop} {
      font-size: 88px;
    }
    span {
      color: ${token.colours.accent};
    }
  }
  h2 {
    font-family: 'Space Grotesk', sans-serif;
    margin: 0;
    font-size: 32px;
    ${token.layout.media.tablet} {
      font-size: 56px;
    }
    ${token.layout.media.desktop} {
      font-size: 72px;
    }
    span {
      color: ${token.colours.accent};
    }
  }
  h3 {
    font-family: 'Gopher', sans-serif;
    font-size: 24px;
    font-weight: 800;
    color: #88809B;
    ${token.layout.media.desktop} {
      font-size: 28px;
    }
  }
  h4 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 24px;
    font-weight: 800
  }
  p {
    color: rgba(255,255,255,.5);
    font-size: 19px;
  }

  span {
    color: ${token.colours.accent};
  }


  `;

export default GlobalStyle;
