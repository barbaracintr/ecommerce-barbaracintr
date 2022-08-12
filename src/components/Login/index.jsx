import { useForm } from "react-hook-form"
import { api } from "../../data"
import { useNavigate } from "react-router-dom";
// import { FlexContainer } from "../../styles/global";
import { StyledButtonRegister, StyledTypographyLogo, StyledForm, StyledTypography, StyledInputLabel, StyledTextField, StyledButton, StyledPaper } from "./style";
import { Typography } from "@mui/material";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = ({ authenticated, setAuthenticated }) => {

    const formSchema = yup.object().shape({
        username: yup
            .string()
            .required("Username obrigatório"),
        password: yup
            .string()
            .required("Senha inválida"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const navigate = useNavigate();

    const onHandleSubmit = (data) => {  
        api
        .post("/auth/login", {
            username: data.username,
            password: data.password,
        })
        .then((response) => {
            window.localStorage.clear() 
            window.localStorage.setItem("token", JSON.stringify(response.data.token))
            toast.success("Login realizado com sucesso")
            // setAuthenticated(true)
            console.log(response)
        })
        .then(() => {
            navigate("/")
        })
        .catch((err) => {
            toast.error("Erro ao realizar o login")
            console.log(err)
        })
    }

    const goRegister = () => {
        navigate("/register")
    }

    return(
        <>
            <StyledTypographyLogo variant="h2" component="h1">Shopee</StyledTypographyLogo>
            <StyledPaper elevation={0}>
                <StyledForm onSubmit={handleSubmit(onHandleSubmit)}>
                    <StyledTypography variant="p" component="h2">Login</StyledTypography>
                    <StyledInputLabel>Username</StyledInputLabel>
                    <StyledTextField 
                        placeholder="Digite seu username"
                        error={!!errors.username}
                        helperText={errors.username?.message}
                        {...register("username")}
                    />
                    <StyledInputLabel>Senha</StyledInputLabel>
                    <StyledTextField 
                        placeholder="Digite sua senha"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        type="password"
                        {...register("password")}/>
                    <StyledButton variant="contained" color="success" type="submit">Entrar</StyledButton>
                </StyledForm>
                {/* <FlexContainer flexDirection="row" justifyContent="center"> */}
                        <Typography component="h1">Não tem conta?</Typography>
                        <StyledButtonRegister size="small" variant="text" onClick={goRegister}>Cadastro</StyledButtonRegister>
                {/* </FlexContainer> */}
            </StyledPaper>
            </>
    )
}