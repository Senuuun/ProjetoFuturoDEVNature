// src/pages/Login.js
import React, { useState } from 'react';
import { TextField, Button, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import MenuComponent from '../components/Menu'; // Importa o MenuComponent
import './Login.css';
import loginImage from '../assets/images/Viagem.png'; // Atualize o caminho da imagem

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Verifica se as credenciais estão corretas
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/dashboard'); // Redireciona para o Dashboard
        } else {
            alert('Email ou senha incorretos');
        }
    };

    return (
        <div className="login-container">
            <MenuComponent /> {/* Adiciona o MenuComponent aqui */}
            <div className="login-image">
                <img src={loginImage} alt="Imagem de Login" />
            </div>
            <div className="login-form">
                <h2>Efetuar Login</h2>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        label="E-mail" 
                        variant="outlined" 
                        fullWidth 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField 
                        label="Senha" 
                        type="password" 
                        variant="outlined" 
                        fullWidth 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        type="submit" 
                        fullWidth
                    >
                        Entrar
                    </Button>
                    <div className="signup-link">
                        <p>Não possui cadastro? <Link component={RouterLink} to="/register">Cadastre-se</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
