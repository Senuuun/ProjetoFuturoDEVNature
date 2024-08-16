// src/pages/CadastroEditarArea.js
import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import MenuComponent from '../components/Menu'; // Importa o MenuComponent
import './CadastroEditarArea.css';

const CadastroEditarArea = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        // Carrega os dados da área para edição
        const areas = JSON.parse(localStorage.getItem('areas')) || [];
        const area = areas.find(area => area.id === id);
        if (area) {
            setNome(area.nome);
            setDescricao(area.descricao);
            setLatitude(area.position[0]);
            setLongitude(area.position[1]);
        }
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Atualiza a área no localStorage
        const areas = JSON.parse(localStorage.getItem('areas')) || [];
        const updatedAreas = areas.map(area =>
            area.id === id
                ? { ...area, nome, descricao, position: [latitude, longitude] }
                : area
        );
        localStorage.setItem('areas', JSON.stringify(updatedAreas));

        // Redireciona para a listagem de áreas
        navigate('/listagem-areas');
    };

    return (
        <div className="cadastro-editar-area">
            <MenuComponent /> {/* Adiciona o MenuComponent aqui */}
            <h2>{id ? 'Editar Área de Preservação' : 'Cadastrar Nova Área de Preservação'}</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nome do Local"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label="Descrição do Local"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label="Latitude"
                    type="number"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label="Longitude"
                    type="number"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    fullWidth
                    required
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    {id ? 'Salvar Alterações' : 'Cadastrar Área'}
                </Button>
            </form>
        </div>
    );
};

export default CadastroEditarArea;