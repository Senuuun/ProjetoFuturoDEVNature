// src/pages/ListagemAreas.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import MenuComponent from '../components/Menu'; // Importa o MenuComponent

const ListagemAreas = () => {
    const [areas, setAreas] = useState([]);

    useEffect(() => {
        // Obtém as áreas do localStorage
        const storedAreas = JSON.parse(localStorage.getItem('areas')) || [];
        setAreas(storedAreas);
    }, []);

    return (
        <div style={{ padding: '2rem' }}>
            <MenuComponent /> {/* Adiciona o MenuComponent aqui */}
            <Typography variant="h4" gutterBottom>
                Listagem de Áreas
            </Typography>

            <Typography variant="h6">
                Total de Áreas Cadastradas: {areas.length}
            </Typography>

            {areas.length === 0 ? (
                <Typography variant="body1">Nenhuma área cadastrada.</Typography>
            ) : (
                <Grid container spacing={3}>
                    {areas.map((area) => (
                        <Grid item xs={12} md={6} key={area.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{area.name}</Typography>
                                    <Typography variant="body1">
                                        Descrição: {area.description}
                                    </Typography>
                                    <Typography variant="body1">
                                        Coordenadas: Latitude {area.position[0]}, Longitude {area.position[1]}
                                    </Typography>
                                    <Typography variant="body1">
                                        Número de Pessoas: {area.peopleCount}
                                    </Typography>
                                    <div style={{ marginTop: '1rem' }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component={Link}
                                            to={`/register-area/${area.id}`}
                                        >
                                            Editar
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}

            <div style={{ marginTop: '2rem' }}>
                <Button variant="contained" color="primary" component={Link} to="/register-area">
                    Cadastrar Nova Área
                </Button>
            </div>
        </div>
    );
};

export default ListagemAreas;
