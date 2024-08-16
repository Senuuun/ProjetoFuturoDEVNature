// src/pages/Register.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuComponent from '../components/Menu'; // Importa o MenuComponent
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Verifica se a pessoa tem mais de 18 anos
        const age = new Date().getFullYear() - new Date(birthDate).getFullYear();
        if (age < 18) {
            alert('Você deve ter mais de 18 anos para se registrar.');
            return;
        }

        // Verifica o formato do CPF
        if (cpf.length !== 11) {
            alert('O CPF deve ter 11 números.');
            return;
        }

        // Verifica o formato do e-mail
        if (!email.endsWith('@gmail.com')) {
            alert('O e-mail deve terminar com @gmail.com.');
            return;
        }

        // Verifica se o e-mail ou CPF já está cadastrado
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(user => user.email === email)) {
            alert('E-mail já cadastrado.');
            return;
        }
        if (users.find(user => user.cpf === cpf)) {
            alert('CPF já cadastrado.');
            return;
        }

        // Salva o novo usuário
        const newUser = { name, gender, cpf, birthDate, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        navigate('/login'); // Redireciona para a página de login após o registro
    };

    return (
        <div className="register-container">
            <MenuComponent /> {/* Adiciona o MenuComponent aqui */}
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Nome" 
                    variant="outlined" 
                    fullWidth 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField 
                    label="Sexo" 
                    variant="outlined" 
                    fullWidth 
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
                <TextField 
                    label="CPF" 
                    variant="outlined" 
                    fullWidth 
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <TextField 
                    label="Data de Nascimento" 
                    type="date" 
                    InputLabelProps={{ shrink: true }}
                    variant="outlined" 
                    fullWidth 
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                />
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
                    Cadastrar
                </Button>
            </form>
        </div>
    );
};

export default Register;
