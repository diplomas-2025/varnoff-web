import React from 'react';
import { AppBar, Toolbar, Typography, Button, Tabs, Tab } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import CallIcon from '@mui/icons-material/Call';
import CodeIcon from '@mui/icons-material/Code';
import { useNavigate, useLocation } from 'react-router-dom'; // Иконка для логотипа

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Определяем активную вкладку на основе текущего пути
    const getTabValue = () => {
        switch (location.pathname) {
            case '/':
                return 0;
            case '/request':
                return 1;
            case '/contacts':
                return 2;
            case '/login':
                return 3; // Новая вкладка для логина
            default:
                return 0;
        }
    };

    const [value, setValue] = React.useState(getTabValue());

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1B1A22' }}>
            <Toolbar>
                {/* Логотип (иконка) и название компании */}
                <CodeIcon sx={{ color: '#FFB300', fontSize: '40px', marginRight: '10px' }} />
                <Typography variant="h6" sx={{ flexGrow: 1, color: '#FFB300' }}>
                    ВАРНОФФ
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#FFFFFF', marginRight: '20px' }}>
                    Создаем цифровые решения
                </Typography>

                {/* Номер телефона и кнопка заказать звонок */}
                <Button
                    variant="contained"
                    startIcon={<PhoneIcon />}
                    sx={{
                        backgroundColor: '#FFB300',
                        color: '#1B1A22',
                        marginRight: '10px',
                        '&:hover': {
                            backgroundColor: '#e6a100',
                        },
                    }}
                >
                    +7 (846) 379-00-00
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<CallIcon />}
                    sx={{
                        borderColor: '#FFB300',
                        color: '#FFB300',
                        '&:hover': {
                            borderColor: '#e6a100',
                            color: '#e6a100',
                        },
                    }}
                >
                    Заказать звонок
                </Button>
            </Toolbar>

            {/* Вкладки (Tabs) */}
            <Tabs
                value={value}
                onChange={handleChange}
                sx={{
                    backgroundColor: '#1B1A22',
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#FFB300', // Цвет индикатора
                    },
                }}
            >
                <Tab
                    label="Главная"
                    sx={{
                        color: value === 0 ? '#FFB300' : '#FFFFFF', // Цвет текста
                        '&.Mui-selected': {
                            color: '#FFB300', // Цвет текста активной вкладки
                        },
                    }}
                    onClick={() => navigate('/')}
                />
                <Tab
                    label="Оставить заявку"
                    sx={{
                        color: value === 1 ? '#FFB300' : '#FFFFFF', // Цвет текста
                        '&.Mui-selected': {
                            color: '#FFB300', // Цвет текста активной вкладки
                        },
                    }}
                    onClick={() => navigate('/request')}
                />
                <Tab
                    label="Контакты"
                    sx={{
                        color: value === 2 ? '#FFB300' : '#FFFFFF', // Цвет текста
                        '&.Mui-selected': {
                            color: '#FFB300', // Цвет текста активной вкладки
                        },
                    }}
                    onClick={() => navigate('/contacts')}
                />
                <Tab
                    label="Вход"
                    sx={{
                        color: value === 3 ? '#FFB300' : '#FFFFFF', // Цвет текста
                        '&.Mui-selected': {
                            color: '#FFB300', // Цвет текста активной вкладки
                        },
                    }}
                    onClick={() => navigate('/login')}
                />
            </Tabs>
        </AppBar>
    );
};

export default Header;