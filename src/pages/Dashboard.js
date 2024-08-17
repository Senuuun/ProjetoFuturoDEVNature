// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import Map from '../components/Map'; // Supondo que você tenha um componente Map
import MenuComponent from '../components/Menu'; // Importa o MenuComponent

const Dashboard = () => {
    const [numberOfAreas, setNumberOfAreas] = useState(0);
    const numberOfUsers = 101; // Número de usuários ativos, pode ser ajustado conforme necessário

    useEffect(() => {
        // Função para atualizar o número de áreas
        const updateAreaCount = () => {
            const storedAreas = JSON.parse(localStorage.getItem('areas')) || [];
            setNumberOfAreas(storedAreas.length);
        };

        // Atualiza o número de áreas ao montar o componente
        updateAreaCount();

        // Adiciona um listener para atualizar o número de áreas quando o localStorage mudar
        window.addEventListener('storage', updateAreaCount);

        // Remove o listener ao desmontar o componente
        return () => window.removeEventListener('storage', updateAreaCount);
    }, []);

    return (
        <div style={{ padding: '2rem' }}>
            <MenuComponent /> {/* Adiciona o MenuComponent aqui */}
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Resumo</Typography>
                            <Typography variant="body1">Usuários Ativos: {numberOfUsers}</Typography>
                            <Typography variant="body1">Áreas Cadastradas: {numberOfAreas}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Mapa de Áreas</Typography>
                            <div style={{ height: '400px', width: '100%' }}>
                                <Map /> {/* Componente do Mapa */}
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <div style={{ marginTop: '2rem' }}>
                <Button variant="contained" color="primary" component={Link} to="/register-area">
                    Cadastrar Nova Área
                </Button>
                <Button variant="contained" color="secondary" component={Link} to="/listagem-areas" style={{ marginLeft: '1rem' }}>
                    Listar Áreas
                </Button>
            </div>
        </div>
    );
};

export default Dashboard;
