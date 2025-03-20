import axios from 'axios';

// Базовый URL API
const API_BASE_URL = 'https://spotdiff.ru/varnoff-api';

// Создаем экземпляр axios с настройками
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Функция для получения токена из localStorage
const getAuthToken = () => {
    return localStorage.getItem('authToken');
};

// Функция для сохранения токена в localStorage
const setAuthToken = (token) => {
    if (token) {
        localStorage.setItem('authToken', token);
    } else {
        localStorage.removeItem('authToken');
    }
};

// Interceptor для добавления токена в заголовки запросов
api.interceptors.request.use(
    (config) => {
        const token = getAuthToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor для обработки ошибок авторизации
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Очищаем токен, если он недействителен
            setAuthToken(null);
            window.location.href = '/login'; // Перенаправляем на страницу входа
        }
        return Promise.reject(error);
    }
);

// Регистрация нового пользователя
export const signUp = async (email, password) => {
    try {
        const response = await api.post('/users/security/sign-up', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
        throw error;
    }
};

// Вход пользователя
export const signIn = async (email, password) => {
    try {
        const response = await api.post('/users/security/sign-in', {
            email,
            password,
        });
        const { accessToken } = response.data;
        setAuthToken(accessToken); // Сохраняем токен в localStorage
        return response.data;
    } catch (error) {
        console.error('Ошибка при входе:', error);
        throw error;
    }
};

// Выход пользователя
export const signOut = () => {
    setAuthToken(null); // Удаляем токен из localStorage
    window.location.href = '/login'; // Перенаправляем на страницу входа
};

// Получение информации о текущем пользователе
export const getMe = async () => {
    try {
        const response = await api.get('/base/me');
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении информации о пользователе:', error);
        throw error;
    }
};

// Получение всех заявок
export const getAllRequests = async () => {
    try {
        const response = await api.get('/base/requests');
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении заявок:', error);
        throw error;
    }
};

// Создание заявки
export const createRequest = async (requestData) => {
    try {
        const response = await api.post('/base/requests', requestData);
        return response.data;
    } catch (error) {
        console.error('Ошибка при создании заявки:', error);
        throw error;
    }
};

// Получение всех заявок на звонок
export const getAllCallRequests = async () => {
    try {
        const response = await api.get('/base/call-requests');
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении заявок на звонок:', error);
        throw error;
    }
};

// Создание заявки на звонок
export const createCallRequest = async (callRequestData) => {
    try {
        const response = await api.post('/base/call-requests', callRequestData);
        return response.data;
    } catch (error) {
        console.error('Ошибка при создании заявки на звонок:', error);
        throw error;
    }
};

// Обновление статуса заявки
export const updateRequestStatus = async (id, status) => {
    try {
        const response = await api.patch(`/base/requests/${id}/status`, null, {
            params: { status },
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при обновлении статуса заявки:', error);
        throw error;
    }
};

// Обновление статуса заявки на звонок
export const updateCallRequestStatus = async (id, status) => {
    try {
        const response = await api.patch(`/base/call-requests/${id}/status`, null, {
            params: { status },
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при обновлении статуса заявки на звонок:', error);
        throw error;
    }
};

// Экспортируем все функции
export default {
    signUp,
    signIn,
    signOut,
    getMe,
    getAllRequests,
    createRequest,
    getAllCallRequests,
    createCallRequest,
    updateRequestStatus,
    updateCallRequestStatus,
};