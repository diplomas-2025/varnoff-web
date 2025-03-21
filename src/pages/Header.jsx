import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Tabs,
    Tab,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import CallIcon from '@mui/icons-material/Call';
import CodeIcon from '@mui/icons-material/Code';
import { useNavigate, useLocation } from 'react-router-dom';
import { createCallRequest } from '../api/api'; // Импортируем функцию для создания заявки на звонок

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Состояние для управления диалогом
    const [openDialog, setOpenDialog] = useState(false);

    // Состояние для данных формы
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const isAuth = localStorage.getItem('authToken');

    // Определяем активную вкладку на основе текущего пути
    const getTabValue = () => {
        switch (location.pathname) {
            case '/':
                return 0;
            case '/request':
                return 1;
            case '/contacts':
                return 2;
            case '/login' || "/admin":
                return 3;
            default:
                return 0;
        }
    };

    const [value, setValue] = useState(getTabValue());

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Открытие диалога
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    // Закрытие диалога
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    // Обработка отправки формы
    const handleSubmit = async () => {
        const callRequestData = {
            name,
            phone,
        };

        try {
            await createCallRequest(callRequestData); // Отправляем данные на сервер
            alert('Заявка на звонок успешно отправлена!');
            handleCloseDialog(); // Закрываем диалог
        } catch (error) {
            console.error('Ошибка при отправке заявки:', error);
            alert('Произошла ошибка при отправке заявки.');
        }
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
                    onClick={handleOpenDialog} // Открываем диалог при нажатии
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
                    label={ isAuth ? "Админ" : "Вход"}
                    sx={{
                        color: value === 3 ? '#FFB300' : '#FFFFFF', // Цвет текста
                        '&.Mui-selected': {
                            color: '#FFB300', // Цвет текста активной вкладки
                        },
                    }}
                    onClick={() => navigate(isAuth ? '/admin' : '/login')}
                />
            </Tabs>

            {/* Диалог для заказа звонка */}
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                PaperProps={{
                    sx: {
                        borderRadius: '12px', // Скругление углов
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)', // Тень
                        backgroundColor: '#272632', // Цвет фона
                        color: '#FFFFFF', // Цвет текста
                    },
                }}
            >
                <DialogTitle sx={{ color: '#FFB300', fontWeight: 'bold', textAlign: 'center' }}>
                    Заказать звонок
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Ваше имя"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{
                            mb: 2,
                            '& .MuiInputLabel-root': { color: '#FFB300' }, // Цвет лейбла
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: '#FFB300' }, // Цвет рамки
                                '&:hover fieldset': { borderColor: '#e6a100' }, // Цвет рамки при наведении
                                '&.Mui-focused fieldset': { borderColor: '#FFB300' }, // Цвет рамки при фокусе
                            },
                            '& .MuiInputBase-input': { color: '#FFFFFF' }, // Цвет текста
                        }}
                    />
                    <TextField
                        margin="dense"
                        label="Телефон"
                        type="tel"
                        fullWidth
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        sx={{
                            '& .MuiInputLabel-root': { color: '#FFB300' }, // Цвет лейбла
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: '#FFB300' }, // Цвет рамки
                                '&:hover fieldset': { borderColor: '#e6a100' }, // Цвет рамки при наведении
                                '&.Mui-focused fieldset': { borderColor: '#FFB300' }, // Цвет рамки при фокусе
                            },
                            '& .MuiInputBase-input': { color: '#FFFFFF' }, // Цвет текста
                        }}
                    />
                </DialogContent>
                <DialogActions sx={{ padding: '16px', justifyContent: 'center' }}>
                    <Button
                        onClick={handleCloseDialog}
                        sx={{
                            color: '#FFB300',
                            borderColor: '#FFB300',
                            '&:hover': {
                                borderColor: '#e6a100',
                                color: '#e6a100',
                            },
                        }}
                    >
                        Отмена
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        sx={{
                            backgroundColor: '#FFB300',
                            color: '#1B1A22',
                            '&:hover': {
                                backgroundColor: '#e6a100',
                            },
                        }}
                    >
                        Отправить
                    </Button>
                </DialogActions>
            </Dialog>
        </AppBar>
    );
};

export default Header;