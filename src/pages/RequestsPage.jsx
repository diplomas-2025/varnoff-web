import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Select,
    MenuItem,
    TextField,
    Button,
    CircularProgress,
} from '@mui/material';
import { getAllRequests, updateRequestStatus } from '../api/api'; // Импортируем методы API

const RequestPage = () => {
    const [requests, setRequests] = useState([]); // Состояние для заявок
    const [filterStatus, setFilterStatus] = useState('ALL'); // Фильтр по статусу
    const [searchQuery, setSearchQuery] = useState(''); // Поисковый запрос
    const [sortField, setSortField] = useState('createdAt'); // Поле для сортировки
    const [sortOrder, setSortOrder] = useState('asc'); // Порядок сортировки (asc/desc)
    const [loading, setLoading] = useState(true); // Состояние загрузки

    // Маппинг для отображения услуги на русском языке
    const serviceMap = {
        WEBSITE_DEVELOPMENT: 'Разработка сайта',
        MOBILE_APP_DEVELOPMENT: 'Разработка мобильного приложения',
        BRANDING_DESIGN: 'Дизайн и брендинг',
        SEO_OPTIMIZATION: 'SEO-оптимизация',
    };

    // Загрузка заявок при монтировании компонента
    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const data = await getAllRequests();
                setRequests(data);
            } catch (error) {
                console.error('Ошибка при загрузке заявок:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRequests();
    }, []);

    // Обработчик изменения статуса заявки
    const handleStatusChange = async (id, newStatus) => {
        try {
            await updateRequestStatus(id, newStatus);
            // Обновляем состояние заявок
            setRequests((prevRequests) =>
                prevRequests.map((request) =>
                    request.id === id ? { ...request, status: newStatus } : request
                )
            );
            console.log(`Статус заявки ${id} изменен на ${newStatus}`);
        } catch (error) {
            console.error('Ошибка при обновлении статуса:', error);
        }
    };

    // Фильтрация заявок по статусу
    const filteredRequests = requests.filter((request) => {
        if (filterStatus === 'ALL') return true;
        return request.status === filterStatus;
    });

    // Поиск заявок
    const searchedRequests = filteredRequests.filter((request) =>
        request.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.phone.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Сортировка заявок
    const sortedRequests = searchedRequests.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a[sortField] > b[sortField] ? 1 : -1;
        } else {
            return a[sortField] < b[sortField] ? 1 : -1;
        }
    });

    // Если данные загружаются, показываем индикатор загрузки
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress sx={{ color: '#FFB300' }} />
            </Box>
        );
    }

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
                Заявки
            </Typography>

            {/* Фильтры и поиск */}
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <TextField
                    label="Поиск"
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ flexGrow: 1 }}
                />
                <Select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    sx={{ minWidth: 150 }}
                >
                    <MenuItem value="ALL">Все</MenuItem>
                    <MenuItem value="NEW">Новые</MenuItem>
                    <MenuItem value="IN_PROGRESS">В процессе</MenuItem>
                    <MenuItem value="COMPLETED">Завершено</MenuItem>
                    <MenuItem value="CANCELLED">Отменено</MenuItem>
                </Select>
                <Button
                    variant="contained"
                    onClick={() => {
                        setSortField('createdAt');
                        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                    }}
                    sx={{
                        backgroundColor: '#FFB300',
                        color: '#1B1A22',
                        '&:hover': {
                            backgroundColor: '#e6a100',
                        },
                    }}
                >
                    Сортировать по дате {sortOrder === 'asc' ? '▲' : '▼'}
                </Button>
            </Box>

            {/* Таблица заявок */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Имя</TableCell>
                            <TableCell>Телефон</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Услуга</TableCell>
                            <TableCell>Сообщение</TableCell>
                            <TableCell>Дата создания</TableCell>
                            <TableCell>Статус</TableCell>
                            <TableCell>Обработано</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedRequests.map((request) => (
                            <TableRow key={request.id}>
                                <TableCell>{request.id}</TableCell>
                                <TableCell>{request.name}</TableCell>
                                <TableCell>{request.phone}</TableCell>
                                <TableCell>{request.email}</TableCell>
                                <TableCell>{serviceMap[request.service]}</TableCell> {/* Отображение услуги на русском */}
                                <TableCell>{request.message}</TableCell>
                                <TableCell>
                                    {new Date(request.createdAt).toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                    <Select
                                        value={request.status}
                                        onChange={(e) =>
                                            handleStatusChange(request.id, e.target.value)
                                        }
                                        sx={{ minWidth: 150, color: '#FFB300' }}
                                    >
                                        <MenuItem value="NEW">Новая</MenuItem>
                                        <MenuItem value="IN_PROGRESS">В процессе</MenuItem>
                                        <MenuItem value="COMPLETED">Завершено</MenuItem>
                                        <MenuItem value="CANCELLED">Отменено</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell>
                                    {request.processedBy ? request.processedBy.email : 'Не обработано'}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default RequestPage;