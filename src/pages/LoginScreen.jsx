import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {signIn} from "../api/api";

const Login = () => {
    const [email, setEmail] = useState(''); // Состояние для email
    const [password, setPassword] = useState(''); // Состояние для пароля
    const [error, setError] = useState(''); // Состояние для ошибки

    // Обработчик отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Вызываем функцию signIn для входа
            const response = await signIn(email, password);
            console.log('Вход выполнен:', response);

            // Перенаправляем пользователя на главную страницу
            window.location.reload();
        } catch (error) {
            console.error('Ошибка при входе:', error);
            setError('Неверный email или пароль. Пожалуйста, попробуйте еще раз.');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f9f9f9',
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#ffffff',
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    width: '100%',
                    maxWidth: '400px',
                    textAlign: 'center',
                }}
            >
                {/* Заголовок */}
                <Typography variant="h4" sx={{ color: '#1B1A22', fontWeight: 'bold', mb: 2 }}>
                    Вход
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', mb: 4 }}>
                    Введите ваш email и пароль для входа
                </Typography>

                {/* Отображение ошибки */}
                {error && (
                    <Typography variant="body2" sx={{ color: 'red', mb: 2 }}>
                        {error}
                    </Typography>
                )}

                {/* Форма входа */}
                <form onSubmit={handleSubmit}>
                    {/* Поле для email */}
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ mb: 3 }}
                        required
                    />

                    {/* Поле для пароля */}
                    <TextField
                        fullWidth
                        label="Пароль"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ mb: 3 }}
                        required
                    />

                    {/* Кнопка входа */}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: '#FFB300',
                            color: '#1B1A22',
                            padding: '12px',
                            fontSize: '16px',
                            borderRadius: '25px',
                            boxShadow: 3,
                            '&:hover': {
                                backgroundColor: '#e6a100',
                                transform: 'scale(1.05)',
                                transition: 'transform 0.3s ease',
                            },
                        }}
                    >
                        Войти
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Login;