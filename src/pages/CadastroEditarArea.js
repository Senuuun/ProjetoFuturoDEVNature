import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import MenuComponent from '../components/Menu';
import './CadastroEditarArea.css';

const CadastroEditarArea = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        if (id) {
            // Carrega os dados da área para edição
            const areas = JSON.parse(localStorage.getItem('areas')) || [];
            const area = areas.find((area) => area.id === parseInt(id, 10));
            if (area) {
                setNome(area.nome);
                setDescricao(area.descricao);
                setLatitude(area.position[0]);
                setLongitude(area.position[1]);
            }
        }
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Verifica se a latitude e longitude são números válidos
        const lat = parseFloat(latitude);
        const lng = parseFloat(longitude);
    
        if (isNaN(lat) || isNaN(lng)) {
            alert("Latitude e Longitude devem ser números válidos.");
            return;
        }
    
        // Atualiza ou cadastra a nova área no localStorage
        const areas = JSON.parse(localStorage.getItem('areas')) || [];
        const newArea = { 
            id: id ? parseInt(id, 10) : Date.now(), 
            nome, 
            descricao, 
            position: [lat, lng],
            peopleCount: 0 // Inicializa com 0 pessoas
        };
    
        let updatedAreas;
        if (id) {
            updatedAreas = areas.map((area) =>
                area.id === parseInt(id, 10) ? newArea : area
            );
        } else {
            updatedAreas = [...areas, newArea];
        }
    
        localStorage.setItem('areas', JSON.stringify(updatedAreas));
    
        // Redireciona para a listagem de áreas
        navigate('/listagem-areas');
    };

    return (
        <div className="cadastro-editar-area">
            <MenuComponent />
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
