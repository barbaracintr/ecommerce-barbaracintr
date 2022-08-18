import { useForm } from "react-hook-form";

import { api } from "../../data";

import { useNavigate } from "react-router-dom";

import { FlexContainer } from "../../styles/global";

import {
  StyledButtonRegister,
  StyledForm,
  StyledTypography,
  StyledInputLabel,
  StyledTextField,
  StyledButton,
  StyledPaper,
} from "./styles.js";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Login = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Please enter a valid username"),
    password: yup.string().required("Invalid password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const onHandleSubmit = (data) => {
    api
      .post("/auth/login", {
        username: data.username,
        password: data.password,
      })
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem(
          "token",
          JSON.stringify(response.data.token)
        );
        console.log(response);
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <StyledPaper elevation={24}>
        <StyledForm onSubmit={handleSubmit(onHandleSubmit)}>
          <StyledTypography title variant="p" component="h2">
            Login
          </StyledTypography>
          <StyledInputLabel>Username</StyledInputLabel>
          <StyledTextField
            variant="standard"
            error={!!errors.username}
            helperText={errors.username?.message}
            {...register("username")}
            value="mor_2314"
          />
          <StyledInputLabel>Password</StyledInputLabel>
          <StyledTextField
            variant="standard"
            error={!!errors.password}
            helperText={errors.password?.message}
            type="password"
            {...register("password")}
            value="83r5^_"
          />
          <StyledButton variant="contained" color="secondary" type="submit">
            Sign in
          </StyledButton>
        </StyledForm>
        <FlexContainer
          flexDirection="row"
          justifyContent="center"
          padding="20px"
        >
          <StyledTypography component="p">Create account</StyledTypography>
          <StyledButtonRegister
            size="small"
            variant="text"
            onClick={goRegister}
          >
            Register
          </StyledButtonRegister>
        </FlexContainer>
      </StyledPaper>
    </>
  );
};
