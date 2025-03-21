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
import { getAllCallRequests, updateCallRequestStatus } from '../api/api'; // Импортируем методы API

const CallRequestsPage = () => {
    const [callRequests, setCallRequests] = useState([]); // Состояние для заявок на звонки
    const [filterStatus, setFilterStatus] = useState('ALL'); // Фильтр по статусу
    const [searchQuery, setSearchQuery] = useState(''); // Поисковый запрос
    const [sortField, setSortField] = useState('createdAt'); // Поле для сортировки
    const [sortOrder, setSortOrder] = useState('asc'); // Порядок сортировки (asc/desc)
    const [loading, setLoading] = useState(true); // Состояние загрузки

    // Загрузка заявок на звонки при монтировании компонента
    useEffect(() => {
        const fetchCallRequests = async () => {
            try {
                const data = await getAllCallRequests();
                setCallRequests(data);
            } catch (error) {
                console.error('Ошибка при загрузке заявок на звонки:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCallRequests();
    }, []);

    // Обработчик изменения статуса заявки на звонок
    const handleStatusChange = async (id, newStatus) => {
        try {
            await updateCallRequestStatus(id, newStatus);
            // Обновляем состояние заявок
            setCallRequests((prevRequests) =>
                prevRequests.map((request) =>
                    request.id === id ? { ...request, status: newStatus } : request
                )
            );
            console.log(`Статус заявки на звонок ${id} изменен на ${newStatus}`);
        } catch (error) {
            console.error('Ошибка при обновлении статуса:', error);
        }
    };

    // Фильтрация заявок по статусу
    const filteredCallRequests = callRequests.filter((request) => {
        if (filterStatus === 'ALL') return true;
        return request.status === filterStatus;
    });

    // Поиск заявок
    const searchedCallRequests = filteredCallRequests.filter((request) =>
        request.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.phone.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Сортировка заявок
    const sortedCallRequests = searchedCallRequests.sort((a, b) => {
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
                Запросы на звонок
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

            {/* Таблица заявок на звонок */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Имя</TableCell>
                            <TableCell>Телефон</TableCell>
                            <TableCell>Дата создания</TableCell>
                            <TableCell>Статус</TableCell>
                            <TableCell>Обработано</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedCallRequests.map((request) => (
                            <TableRow key={request.id}>
                                <TableCell>{request.id}</TableCell>
                                <TableCell>{request.name}</TableCell>
                                <TableCell>{request.phone}</TableCell>
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

export default CallRequestsPage;