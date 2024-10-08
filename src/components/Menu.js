// src/components/Menu.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Menu, MenuItem, IconButton } from '@mui/material';

const MenuComponent = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        handleClose();
        navigate('/');
    };

    // Verifica se o usuário está autenticado
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    return (
        <div style={{ position: 'absolute', top: 10, right: 10 }}>
            <IconButton onClick={handleClick}>
                <MenuIcon />
                <span style={{ marginLeft: 8 }}>Menu</span>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {isAuthenticated ? (
                    [
                        <MenuItem key="dashboard" component={Link} to="/dashboard" onClick={handleClose}>
                            Dashboard
                        </MenuItem>,
                        <MenuItem key="register-area" component={Link} to="/register-area" onClick={handleClose}>
                            Cadastrar Área
                        </MenuItem>,
                        <MenuItem key="listagem-areas" component={Link} to="/listagem-areas" onClick={handleClose}>
                            Listar Áreas
                        </MenuItem>,
                        <MenuItem key="logout" onClick={handleLogout}>
                            Logout
                        </MenuItem>
                    ]
                ) : (
                    [
                        <MenuItem key="login" component={Link} to="/" onClick={handleClose}>
                            Login
                        </MenuItem>,
                        <MenuItem key="register" component={Link} to="/register" onClick={handleClose}>
                            Register
                        </MenuItem>
                    ]
                )}
            </Menu>
        </div>
    );
};

export default MenuComponent;

