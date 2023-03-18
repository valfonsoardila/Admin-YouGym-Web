import React from "react";
import Button from "./../../contents/buttons/Buttons";
import Icon from "./../../contents/icons/Icons";
import Input from "./../../contents/inputs/Input";
import Label from "./../../contents/labels/Label";
import { logoPNG } from "./../../../resources/Resources";
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  LoginWith,
  HorizontalRule,
  IconsContainer,
  HiperLink,
  LabelYouGym,
} from "./LoginStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Login = ({ children }) => {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  const labelYouGym = "linear-gradient(to right, #7D0000 0%, #000000 50%)";
  return (
    <MainContainer>
      <img src={logoPNG} alt="logo" />
      <WelcomeText>Inicio de sesion</WelcomeText>
      <InputContainer>
        <Input name="username" type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <HiperLink style={{ marginBottom: "0.5rem" }}>
          ¿Olvidaste tu contraseña?
        </HiperLink>
      </InputContainer>
      <ButtonContainer>
        <Button content="Iniciar" />
      </ButtonContainer>
      <LoginWith>O INICIA CON</LoginWith>
      <HorizontalRule />
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FontAwesomeIcon icon={faFacebook} />
        </Icon>
        <Icon color={InstagramBackground}>
          <FontAwesomeIcon icon={faInstagram} />
        </Icon>
        <Icon color={TwitterBackground}>
          <FontAwesomeIcon icon={faTwitter} />
        </Icon>
      </IconsContainer>
      <HiperLink>¿No tienes cuenta? crea una</HiperLink>
      <LabelYouGym>
        <Label color={labelYouGym}>
          <h5>YouGym App</h5>
        </Label>
      </LabelYouGym>
    </MainContainer>
  );
};

export default Login;
