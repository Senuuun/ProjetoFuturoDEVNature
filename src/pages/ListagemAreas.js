// src/pages/ListagemAreas.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import MenuComponent from '../components/Menu';
import './ListagemAreas.css';

const ListagemAreas = () => {
    const [areas, setAreas] = useState([]);

    useEffect(() => {
        const areasSalvas = JSON.parse(localStorage.getItem('areas')) || [];
        setAreas(areasSalvas);
    }, []);

    const handleDelete = (id) => {
        const updatedAreas = areas.filter((area) => area.id !== id);
        setAreas(updatedAreas);
        localStorage.setItem('areas', JSON.stringify(updatedAreas));
    };

    return (
        <div className="listagem-areas">
            <MenuComponent />
            <Typography variant="h4" gutterBottom>
                Listagem de Áreas de Preservação
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/register-area"
                startIcon={<AddIcon />}
                style={{ marginBottom: '20px' }}
            >
                Cadastrar Nova Área
            </Button>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <List>
                    {areas.length > 0 ? (
                        areas.map((area) => (
                            <ListItem key={area.id} divider>
                                <ListItemText
                                    primary={area.nome}
                                    secondary={`Descrição: ${area.descricao}`}
                                />
                                <ListItemSecondaryAction>
                                    <Typography variant="body2">
                                        Número de Pessoas: {area.peopleCount}
                                    </Typography>
                                    <IconButton component={Link} to={`/edit-area/${area.id}`} edge="end">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" onClick={() => handleDelete(area.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))
                    ) : (
                        <Typography variant="body1">Nenhuma área cadastrada.</Typography>
                    )}
                </List>
            </Paper>
        </div>
    );
};

export default ListagemAreas;
