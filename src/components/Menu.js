// src/components/Menu.js
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Menu, MenuItem, IconButton } from '@mui/material';

const MenuComponent = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const location = useLocation();
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

    const isAuthenticated = location.pathname !== '/' && location.pathname !== '/register';

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
                {!isAuthenticated ? (
                    <>
                        <MenuItem component={Link} to="/" onClick={handleClose}>
                            Login
                        </MenuItem>
                        <MenuItem component={Link} to="/register" onClick={handleClose}>
                            Register
                        </MenuItem>
                    </>
                ) : (
                    <>
                        <MenuItem component={Link} to="/dashboard" onClick={handleClose}>
                            Dashboard
                        </MenuItem>
                        <MenuItem component={Link} to="/register-area" onClick={handleClose}>
                            Cadastrar Área
                        </MenuItem>
                        <MenuItem component={Link} to="/listagem-areas" onClick={handleClose}>
                            Listar Áreas
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>
                            Logout
                        </MenuItem>
                    </>
                )}
            </Menu>
        </div>
    );
};

export default MenuComponent;
