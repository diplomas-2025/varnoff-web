import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, InputAdornment } from '@mui/material';
import { Person, Phone, Email, Message } from '@mui/icons-material'; // Иконки для полей ввода

const RequestForm = () => {
    const [service, setService] = useState(''); // Выбранная услуга
    const [name, setName] = useState(''); // Имя
    const [phone, setPhone] = useState(''); // Телефон
    const [email, setEmail] = useState(''); // Email
    const [message, setMessage] = useState(''); // Сообщение

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            service,
            name,
            phone,
            email,
            message,
        });
        alert('Ваша заявка отправлена!');
    };

    return (
        <div>
            <div style={{height:'50px'}}/>
            <Box sx={{ maxWidth: '600px', margin: '0 auto', padding: 4, backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}>
                {/* Заголовок с градиентным фоном */}
                <Box
                    sx={{
                        background: 'linear-gradient(45deg, #1B1A22 30%, #FFB300 90%)',
                        color: '#FFF',
                        padding: 3,
                        borderRadius: 2,
                        mb: 4,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Оставить заявку
                    </Typography>
                    <Typography variant="subtitle1">
                        Заполните форму, и мы свяжемся с вами в ближайшее время
                    </Typography>
                </Box>

                <form onSubmit={handleSubmit}>
                    {/* Выбор услуги */}
                    <FormControl component="fieldset" sx={{ mb: 4 }}>
                        <FormLabel component="legend" sx={{ color: '#1B1A22', fontWeight: 'bold', mb: 2 }}>
                            Выберите услугу
                        </FormLabel>
                        <RadioGroup
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            sx={{ flexDirection: 'row', justifyContent: 'space-between' }}
                        >
                            <FormControlLabel
                                value="Создание сайтов"
                                control={<Radio sx={{ color: '#FFB300', '&.Mui-checked': { color: '#FFB300' } }} />}
                                label="Создание сайтов"
                            />
                            <FormControlLabel
                                value="Разработка приложений"
                                control={<Radio sx={{ color: '#FFB300', '&.Mui-checked': { color: '#FFB300' } }} />}
                                label="Разработка приложений"
                            />
                            <FormControlLabel
                                value="Дизайн и брендинг"
                                control={<Radio sx={{ color: '#FFB300', '&.Mui-checked': { color: '#FFB300' } }} />}
                                label="Дизайн и брендинг"
                            />
                            <FormControlLabel
                                value="SEO-оптимизация"
                                control={<Radio sx={{ color: '#FFB300', '&.Mui-checked': { color: '#FFB300' } }} />}
                                label="SEO-оптимизация"
                            />
                        </RadioGroup>
                    </FormControl>

                    {/* Поле для имени */}
                    <TextField
                        fullWidth
                        label="Ваше имя"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{ mb: 3 }}
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Person sx={{ color: '#FFB300' }} />
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Поле для телефона */}
                    <TextField
                        fullWidth
                        label="Телефон"
                        variant="outlined"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        sx={{ mb: 3 }}
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Phone sx={{ color: '#FFB300' }} />
                                </InputAdornment>
                            ),
                        }}
                    />

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
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email sx={{ color: '#FFB300' }} />
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Поле для сообщения */}
                    <TextField
                        fullWidth
                        label="Сообщение"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        sx={{ mb: 3 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Message sx={{ color: '#FFB300' }} />
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Кнопка отправки */}
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            background: 'linear-gradient(45deg, #FFB300 30%, #e6a100 90%)',
                            color: '#1B1A22',
                            padding: '12px 40px',
                            fontSize: '18px',
                            borderRadius: '25px',
                            boxShadow: 3,
                            '&:hover': {
                                transform: 'scale(1.05)',
                                transition: 'transform 0.3s ease',
                            },
                        }}
                    >
                        Отправить заявку
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default RequestForm;