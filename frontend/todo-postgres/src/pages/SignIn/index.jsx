import React, { useState } from "react";
import { Container, Content, Label, Input, LabelError, LabelSignUp, Strong } from "./styles";
import { FormInput } from "../../components/FormComponents/FormInput";
import { FormButton } from "../../components/FormComponents/FormButton";
import { Link, useNavigate } from "react-router-dom";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    return (
        <>
            <Container>
                <Label>SISTEMA DE LOGIN</Label>
                <Content>
                    <FormInput
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                    <FormInput
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => [setPassword(e.target.value), setError("")]}
                    />
                    <LabelError>{error}</LabelError>
                    <FormButton Text="Entrar" onClick={console.log("teste")} />
                    <LabelSignUp>
                        Não tem uma conta?
                        <Strong>
                            <Link to="/signup">&nbsp;Registre-se</Link>
                        </Strong>
                    </LabelSignUp>
                </Content>
            </Container>
        </>
    );
};