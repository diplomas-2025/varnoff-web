import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, Avatar, Divider } from '@mui/material';
import { CheckCircle, Star, Groups, Work } from '@mui/icons-material';

const HomePage = () => {
    // Генерация отзывов
    const reviews = [
        {
            id: 1,
            name: 'Иван Иванов',
            position: 'CEO компании "ТехноЛаб"',
            text: 'Очень профессиональный подход! Сделали всё быстро и качественно.',
            avatar: 'https://b2b-creative.ru/wp-content/themes/B2B/assets/i/q-item-5.jpg',
        },
        {
            id: 2,
            name: 'Мария Петрова',
            position: 'Маркетолог в "БрендСтарт"',
            text: 'Спасибо за креативные решения! Наш сайт стал настоящим хитом.',
            avatar: 'https://b2b-creative.ru/wp-content/themes/B2B/assets/i/q-item-2.jpg',
        },
        {
            id: 3,
            name: 'Алексей Смирнов',
            position: 'Директор "ИТ-Сервис"',
            text: 'Ребята знают своё дело. Рекомендую!',
            avatar: 'https://b2b-creative.ru/wp-content/themes/B2B/assets/i/q-item-3.jpg',
        },
    ];

    // Генерация клиентов
    const clients = [
        { id: 1, name: 'Metascan', logo: 'https://b2b-creative.ru/wp-content/uploads/2020/home/metascan-1.svg' },
        { id: 2, name: 'PriceAuto', logo: 'https://b2b-creative.ru/wp-content/uploads/2020/home/priceauto-1.svg' },
        { id: 3, name: 'Skinosophy', logo: 'https://b2b-creative.ru/wp-content/uploads/2020/home/skinosophy.svg' },
        { id: 4, name: 'SWORD', logo: 'https://b2b-creative.ru/wp-content/uploads/2020/home/SWORD-1.svg' },
    ];

    // Генерация кейсов
    const cases = [
        {
            id: 1,
            title: 'Разработка сайта для "ТехноЛаб"',
            description: 'Создали современный корпоративный сайт с интеграцией CRM.',
        },
        {
            id: 2,
            title: 'Интернет-магазин для "БрендСтарт"',
            description: 'Разработали интернет-магазин с удобной системой управления.',
        },
        {
            id: 3,
            title: 'Лендинг для "ИТ-Сервис"',
            description: 'Создали продающий лендинг с высокой конверсией.',
        },
    ];

    // Логотипы СМИ
    const media = [
        { id: 1, name: 'Первый канал', logo: 'https://b2b-creative.ru/wp-content/uploads/2020/glavnaya-stranica/smi-1.png' },
        { id: 2, name: 'Россия 1', logo: 'https://b2b-creative.ru/wp-content/uploads/2020/glavnaya-stranica/smi-2.png' },
        { id: 3, name: 'Россия 24', logo: 'https://b2b-creative.ru/wp-content/uploads/2020/glavnaya-stranica/smi-3.png' },
        { id: 4, name: 'Пятый канал', logo: 'https://b2b-creative.ru/wp-content/uploads/2020/glavnaya-stranica/smi-4.png' },
    ];

    return (
        <Box sx={{ padding: 4, backgroundColor: '#f9f9f9' }}>
            {/* Информация о компании */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h3" sx={{ color: '#1B1A22', fontWeight: 'bold', mb: 2 }}>
                    О компании
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', maxWidth: '800px', margin: '0 auto' }}>
                    Мы — ООО «ВАРНОФФ», профессиональная компания, специализирующаяся на создании цифровых решений. Наша команда
                    экспертов помогает бизнесу достигать новых высот с помощью современных технологий.
                </Typography>
            </Box>

            {/* Разделитель */}
            <Divider sx={{ mb: 6, borderColor: '#FFB300', borderWidth: 1 }} />

            {/* Услуги */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ color: '#1B1A22', fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
                    Наши услуги
                </Typography>
                <Grid container spacing={4}>
                    {['Создание сайтов', 'Разработка приложений', 'Дизайн и брендинг', 'SEO-оптимизация'].map((service, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card sx={{ textAlign: 'center', padding: 2, boxShadow: 3, borderRadius: 2, transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }}>
                                <CheckCircle sx={{ fontSize: '50px', color: '#FFB300', mb: 2 }} />
                                <Typography variant="h6" sx={{ color: '#1B1A22' }}>
                                    {service}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Разделитель */}
            <Divider sx={{ mb: 6, borderColor: '#FFB300', borderWidth: 1 }} />

            {/* Решаем сложные задачи */}
            <Box sx={{ background: 'linear-gradient(45deg, #1B1A22 30%, #FFB300 90%)', color: '#FFF', padding: 4, textAlign: 'center', mb: 6, borderRadius: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                    В нашей компании решают самые сложные задачи
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto' }}>
                    Мы гордимся тем, что наши специалисты справляются с задачами любой сложности, обеспечивая максимально
                    профессиональный подход и высокое качество результатов.
                </Typography>
            </Box>

            {/* Разделитель */}
            <Divider sx={{ mb: 6, borderColor: '#FFB300', borderWidth: 1 }} />

            {/* Специалисты – это драгоценность */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ color: '#1B1A22', fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
                    Специалисты – это драгоценность
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    У нас нет случайных людей. Опыт каждого работника более 7 лет. Каждый из команды набил свои шишки и теперь работает только на результат.
                </Typography>
            </Box>

            {/* Разделитель */}
            <Divider sx={{ mb: 6, borderColor: '#FFB300', borderWidth: 1 }} />

            {/* Отзывы */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ color: '#1B1A22', fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
                    Отзывы наших клиентов
                </Typography>
                <Grid container spacing={4}>
                    {reviews.map((review) => (
                        <Grid item xs={12} sm={6} md={4} key={review.id}>
                            <Card sx={{ padding: 2, boxShadow: 3, borderRadius: 2, transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Avatar src={review.avatar} sx={{ mr: 2 }} />
                                    <Box>
                                        <Typography variant="h6">{review.name}</Typography>
                                        <Typography variant="body2" sx={{ color: '#555' }}>
                                            {review.position}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography variant="body1">{review.text}</Typography>
                                <Box sx={{ display: 'flex', mt: 2 }}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} sx={{ color: '#FFB300' }} />
                                    ))}
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Разделитель */}
            <Divider sx={{ mb: 6, borderColor: '#FFB300', borderWidth: 1 }} />

            {/* Наши клиенты */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ color: '#1B1A22', fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
                    Кто наши клиенты?
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', maxWidth: '800px', margin: '0 auto', textAlign: 'center', mb: 4 }}>
                    Мы работаем с компаниями из различных отраслей: IT, ритейл, финансы, производство и другие. Наши клиенты ценят наш профессионализм и индивидуальный подход.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {clients.map((client) => (
                        <Grid item key={client.id}>
                            <img src={client.logo} alt={client.name} style={{ height: '50px' }} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Разделитель */}
            <Divider sx={{ mb: 6, borderColor: '#FFB300', borderWidth: 1 }} />

            {/* СМИ, которые говорили о наших PR-акциях */}
            <Box sx={{ backgroundColor: '#000000', padding: 4, mb: 6, borderRadius: 2 }}>
                <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
                    СМИ, которые говорили о нас
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {media.map((medium) => (
                        <Grid item key={medium.id}>
                            <img src={medium.logo} alt={medium.name} style={{ height: '50px' }} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Разделитель */}
            <Divider sx={{ mb: 6, borderColor: '#FFB300', borderWidth: 1 }} />

            {/* Наши кейсы */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ color: '#1B1A22', fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
                    Наши кейсы
                </Typography>
                <Grid container spacing={4}>
                    {cases.map((caseItem) => (
                        <Grid item xs={12} sm={6} md={4} key={caseItem.id}>
                            <Card sx={{ boxShadow: 3, borderRadius: 2, transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ mb: 2 }}>
                                        {caseItem.title}
                                    </Typography>
                                    <Typography variant="body1">{caseItem.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Разделитель */}
            <Divider sx={{ mb: 6, borderColor: '#FFB300', borderWidth: 1 }} />

            {/* Кнопка "Оставить заявку" */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Button
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
                    Оставить заявку
                </Button>
            </Box>
        </Box>
    );
};

export default HomePage;