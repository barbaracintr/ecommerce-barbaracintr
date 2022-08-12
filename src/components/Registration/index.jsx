import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Typography } from "@mui/material";
import {
  StyledTypography,
  StyledTextField,
  StyledButton,
  StyledButtonLogin,
  StyledForm,
} from "./styles";

import { api } from "../../data";

export const Registration = ({ devs, setDevs }) => {
  const formSchema = yup.object().shape({
    firstname: yup.string().required("Primeiro nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    username: yup.string().required("Usuário obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "A senha precisa ter pelo menos 8 digitos")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*.])(?=.{8,})/,
        "A senha precisa de pelo menos uma letra maiúscula, uma letra minúscula, um número e um caracter especial."
      ),
    passwordconfirmed: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "As senhas são diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onHandleSubmit = (data) => {
    api
      .post("/users", {
        email: data.email,
        username: data.username,
        password: data.password,
        name: {
            firstname: data.firstname,
          lastname: 'XXX',
        },
        address: {
          city: 'XXX',
          street: 'XXX',
          number: 'XXX',
          zipcode: 'XXX',
          geolocation: {
            lat: 'XXX',
            long: 'XXX',
          },
        },
        phone: 'XXX',
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  const goLogin = () => {
    console.log("aaaa");
  };

  return (
    <div>
      <h1>Shop Cadastro</h1>
      <StyledForm onSubmit={handleSubmit(onHandleSubmit)}>
        <StyledTypography variant="p" component="h1">
          Crie sua conta
        </StyledTypography>
        <p>Primeiro nome</p>
        <StyledTextField
          error={!!errors.firstname}
          helperText={errors.firstname?.message}
          placeholder="Digite aqui seu primeiro nome"
          variant="outlined"
          {...register("firstname")}
        />
        <p>Username</p>
        <StyledTextField
          error={!!errors.username}
          helperText={errors.username?.message}
          placeholder="Digite aqui seu username"
          {...register("username")}
        />
        <p>Email</p>
        <StyledTextField
          error={!!errors.email}
          helperText={errors.email?.message}
          placeholder="Digite aqui seu email"
          variant="outlined"
          {...register("email")}
        />
        <p>Senha</p>
        <StyledTextField
          error={!!errors.password}
          helperText={errors.password?.message}
          placeholder="Digite aqui sua senha"
          type="password"
          {...register("password")}
        />
        <p>Confirmar senha</p>
        <StyledTextField
          error={!!errors.passwordconfirmed}
          helperText={errors.passwordconfirmed?.message}
          placeholder="Digite aqui sua senha"
          type="password"
          {...register("passwordconfirmed")}
        />
        <StyledButton variant="contained" color="success" type="submit">
          Cadastrar
        </StyledButton>
        <Typography component="h1">Já tem conta?</Typography>
        <StyledButtonLogin size="small" variant="text" onClick={goLogin}>
          Login
        </StyledButtonLogin>
      </StyledForm>
    </div>
  );
};
