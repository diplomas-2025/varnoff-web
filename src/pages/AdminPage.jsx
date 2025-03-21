import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const navigate = useNavigate();

    // Данные пользователя (заглушка)
    const user = {
        id: 1,
        email: 'admin@example.com',
        isAdmin: true,
        createdAt: '2025-03-21T06:38:55.272Z',
    };

    // Обработчик выхода из аккаунта
    const handleLogout = () => {
        localStorage.removeItem("authToken")
        navigate('/');
        window.location.reload();
    };

    // Обработчик перехода к заявкам
    const handleRequests = () => {
        navigate('/admin/requests'); // Перенаправление на страницу заявок
    };

    // Обработчик перехода к запросам на звонок
    const handleCallRequests = () => {
        navigate('/admin/call-requests'); // Перенаправление на страницу запросов на звонок
    };

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    gap: 3,
                }}
            >
                {/* Заголовок страницы */}
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1B1A22' }}>
                    Панель администратора
                </Typography>

                {/* Информация о пользователе */}
                <Paper
                    elevation={3}
                    sx={{
                        padding: 3,
                        width: '100%',
                        maxWidth: '400px',
                        textAlign: 'center',
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <Typography variant="body1">
                        <strong>ID:</strong> {user.id}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Email:</strong> {user.email}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Роль:</strong> {user.isAdmin ? 'Администратор' : 'Пользователь'}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Дата регистрации:</strong> {new Date(user.createdAt).toLocaleDateString()}
                    </Typography>
                </Paper>

                {/* Кнопки для навигации */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        flexDirection: { xs: 'column', sm: 'row' },
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={handleRequests}
                        sx={{
                            backgroundColor: '#FFB300',
                            color: '#1B1A22',
                            padding: '12px 24px',
                            fontSize: '16px',
                            borderRadius: '25px',
                            '&:hover': {
                                backgroundColor: '#e6a100',
                            },
                        }}
                    >
                        Заявки
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleCallRequests}
                        sx={{
                            backgroundColor: '#FFB300',
                            color: '#1B1A22',
                            padding: '12px 24px',
                            fontSize: '16px',
                            borderRadius: '25px',
                            '&:hover': {
                                backgroundColor: '#e6a100',
                            },
                        }}
                    >
                        Запросы на звонок
                    </Button>
                </Box>

                {/* Кнопка выхода из аккаунта */}
                <Button
                    variant="outlined"
                    onClick={handleLogout}
                    sx={{
                        borderColor: '#FFB300',
                        color: '#1B1A22',
                        padding: '12px 24px',
                        fontSize: '16px',
                        borderRadius: '25px',
                        '&:hover': {
                            borderColor: '#e6a100',
                            backgroundColor: '#fff3e0',
                        },
                    }}
                >
                    Выйти из аккаунта
                </Button>
            </Box>
        </Container>
    );
};

export default AdminPage;