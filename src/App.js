// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import ListagemAreas from './pages/ListagemAreas';
import CadastroEditarArea from './pages/CadastroEditarArea';

// Função para inicializar o localStorage com áreas pré-definidas
const initializeLocalStorage = () => {
    const initialAreas = [
        {
            id: '1',
            nome: 'Área de Paris',
            position: [48.8566, 2.3522],
            descricao: 'Área localizada em Paris, França',
            peopleCount: 10
        },
        {
            id: '2',
            nome: 'Área de Lyon',
            position: [45.75, 4.85],
            descricao: 'Área localizada em Lyon, França',
            peopleCount: 5
        }
    ];

    // Verifica se já existem áreas no localStorage antes de definir os dados
    if (!localStorage.getItem('areas')) {
        localStorage.setItem('areas', JSON.stringify(initialAreas));
    }
};

// Inicializar o localStorage com as áreas pré-definidas
initializeLocalStorage();

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route 
                    path="/dashboard" 
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/listagem-areas" 
                    element={
                        <PrivateRoute>
                            <ListagemAreas />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/register-area/:id?" 
                    element={
                        <PrivateRoute>
                            <CadastroEditarArea />
                        </PrivateRoute>
                    } 
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
