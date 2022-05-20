import "../components/styles.css";
import {
  Navbar,
  Wrapper,
  Hero,
  KeyPoints,
  HowItWorks,
  TextContainer,
  ContainerSpaceBetween,
  ButtonContainer,
  Button,
  ButtonWhite,
  StyledFooter
} from "../components/styled";
import logo from "../images/logo.svg";
import animPlaceholder from "../images/animationplaceholder.svg";
import dashboard from "../images/dashboard.svg";

export default function App() {
  return (
    <div className="App">
      <Navbar>
        <Wrapper>
          <ContainerSpaceBetween>
            <img src={logo} alt="logo" />
            <div>
              <ButtonWhite>Learn More</ButtonWhite>
              <ButtonWhite>Blog</ButtonWhite>
            </div>
          </ContainerSpaceBetween>
        </Wrapper>
      </Navbar>
      <Hero>
        <TextContainer>
          {/* <div> */}
          {/* <img src={logo} alt="logo" /> */}
          {/* </div> */}
          <h1>
            <span>Guaranteed </span>
            <br />
            Rental Payments
          </h1>
          <h3>
            We guarentee your tenants rent so your landlords get paid on time,
            every time.
          </h3>
          <ButtonContainer>
            <Button>Contact Us</Button>
          </ButtonContainer>
        </TextContainer>
        <KeyPoints>
          <div>
            <h4>
              Increase <span>Client Conversion</span>
            </h4>
            <p>
              Set yourself apart from other agencies by offering the best
              service possible with day 1 rental payments.
            </p>
          </div>
          <div>
            <h4>
              Increase <span>Client Conversion</span>
            </h4>
            <p>
              Set yourself apart from other agencies by offering the best
              service possible with day 1 rental payments.
            </p>
          </div>
          <div>
            <h4>
              Increase <span>Client Conversion</span>
            </h4>
            <p>
              Set yourself apart from other agencies by offering the best
              service possible with day 1 rental payments.
            </p>
          </div>
        </KeyPoints>
      </Hero>

      <HowItWorks>
        <TextContainer>
          <h2>
            How it <span>Works</span>
          </h2>
          <h3>When your rent is due we automatially pay.</h3>
        </TextContainer>

        <img src={dashboard} alt="list" />

        {/* <img src={animPlaceholder} alt="placeholder" /> */}
      </HowItWorks>
      <section>
        <TextContainer>
          <h2>
            <span>Upgrade </span>
            your agency with us Today
          </h2>
          <ButtonContainer>
            <Button>Contact Us</Button>
          </ButtonContainer>
        </TextContainer>
      </section>
      <StyledFooter>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <Wrapper>
          <small>©LeFi Technologies</small>
        </Wrapper>
      </StyledFooter>
    </div>
  );
}
