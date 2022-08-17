import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  StyledTypography,
  StyledTextField,
  StyledButton,
  StyledButtonLogin,
  StyledForm,
  StyledInputLabel,
  StyledPaper,
} from "./styles";

import { api } from "../../data";
import { FlexContainer } from "../../styles/global";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Registration = ({ devs, setDevs }) => {
  const formSchema = yup.object().shape({
    firstname: yup.string().required("First name required"),
    username: yup.string().required("Username required"),
    email: yup.string().required("Email required").email("E-mail inválido"),
    password: yup
      .string()
      .required("Password required")
      .min(8, "Password must be at least 8 digits long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*.])(?=.{8,})/,
        "The password needs at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
      ),
    passwordconfirmed: yup
      .string()
      .required("Required field")
      .oneOf([yup.ref("password")], "Passwords must be the same"),
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
      .post("/users", {
        email: data.email,
        username: data.username,
        password: data.password,
        name: {
          firstname: data.firstname,
          lastname: "XXX",
        },
        address: {
          city: "XXX",
          street: "XXX",
          number: "XXX",
          zipcode: "XXX",
          geolocation: {
            lat: "XXX",
            long: "XXX",
          },
        },
        phone: "XXX",
      })
      .then((response) => toast.success("Successfully registered"))
      .catch((err) => toast.error("Error when registering"));
  };

  const goLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <StyledPaper elevation={24}>
        <StyledForm onSubmit={handleSubmit(onHandleSubmit)}>
          <StyledTypography title variant="p" component="h1">
            Create account
          </StyledTypography>
          <StyledInputLabel>Frist Name</StyledInputLabel>
          <StyledTextField
            variant="standard"
            error={!!errors.firstname}
            helperText={errors.firstname?.message}
            {...register("firstname")}
          />
          <StyledInputLabel>Username</StyledInputLabel>
          <StyledTextField
            variant="standard"
            error={!!errors.username}
            helperText={errors.username?.message}
            {...register("username")}
          />
          <StyledInputLabel>Email</StyledInputLabel>
          <StyledTextField
            variant="standard"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email")}
          />
          <StyledInputLabel>Password</StyledInputLabel>
          <StyledTextField
            variant="standard"
            error={!!errors.password}
            helperText={errors.password?.message}
            type="password"
            {...register("password")}
          />
          <StyledInputLabel>Confirm Password</StyledInputLabel>
          <StyledTextField
            variant="standard"
            error={!!errors.passwordconfirmed}
            helperText={errors.passwordconfirmed?.message}
            type="password"
            {...register("passwordconfirmed")}
          />
          <StyledButton variant="contained" color="secondary" type="submit">
            Submit
          </StyledButton>
        </StyledForm>
        <FlexContainer flexDirection="row" justifyContent="center">
          <StyledTypography component="p">Already registered?</StyledTypography>
          <StyledButtonLogin size="small" variant="text" onClick={goLogin}>
            Login
          </StyledButtonLogin>
        </FlexContainer>
      </StyledPaper>
    </>
  );
};
