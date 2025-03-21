import React from 'react';
import { Box, Typography, Button, Link, Divider } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useNavigate} from "react-router-dom";

export const customIcon = new L.Icon({
    iconUrl: 'dot.png',
    iconSize: [25, 25],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const Contacts = () => {
    const navigate = useNavigate();
    // Координаты офиса (г. Самара, ул. Мичурина 21Д, офис 105)
    const officeCoordinates = [53.2021, 50.1595];

    return (
        <Box sx={{ padding: 4, textAlign: 'center', backgroundColor: '#f9f9f9' }}>
            {/* Заголовок с градиентным фоном */}
            <Box
                sx={{
                    background: 'linear-gradient(45deg, #1B1A22 30%, #FFB300 90%)',
                    color: '#FFF',
                    padding: 4,
                    borderRadius: 2,
                    mb: 6,
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Контакты
                </Typography>
                <Typography variant="subtitle1">
                    Свяжитесь с нами, чтобы обсудить ваш проект
                </Typography>
            </Box>

            {/* Адрес и контактная информация */}
            <Box sx={{ mb: 6, textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
                <Typography variant="h5" sx={{ color: '#1B1A22', fontWeight: 'bold', mb: 2 }}>
                    ООО «ВАРНОФФ» в Самаре
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
                    г. Самара, ул. Мичурина 21Д, офис 105
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
                    Телефон: <Link href="tel:+78463790000" sx={{ color: '#FFB300', textDecoration: 'none' }}>+7 846 3790000</Link>,{' '}
                    <Link href="tel:+78462744796" sx={{ color: '#FFB300', textDecoration: 'none' }}>+7 846 2744796</Link>
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
                    Email: <Link href="mailto:info@varnoff.ru" sx={{ color: '#FFB300', textDecoration: 'none' }}>info@varnoff.ru</Link>
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
                    ВКонтакте:{' '}
                    <Link
                        href="https://vk.com/sozdanie_saitov_varnoff"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: '#FFB300', textDecoration: 'none' }}
                    >
                        https://vk.com/sozdanie_saitov_varnoff
                    </Link>
                </Typography>
            </Box>

            {/* Разделитель */}
            <Divider sx={{ mb: 6, borderColor: '#FFB300', borderWidth: 1 }} />

            {/* OpenStreetMap */}
            <Box sx={{ height: '400px', mb: 6, borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
                <MapContainer
                    center={officeCoordinates}
                    zoom={16}
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={false}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        icon={customIcon}
                        position={[53.2021, 50.1595]}
                    >
                        <Popup>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                ООО «ВАРНОФФ»
                            </Typography>
                            <Typography variant="body2">
                                г. Самара, ул. Мичурина 21Д, офис 105
                            </Typography>
                        </Popup>
                    </Marker>
                </MapContainer>
            </Box>

            {/* Разделитель */}
            <Divider sx={{ mb: 6, borderColor: '#FFB300', borderWidth: 1 }} />

            {/* Кнопка "Оставить заявку" */}
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
                onClick={() => navigate('/request')}
            >
                Оставить заявку
            </Button>
        </Box>
    );
};

export default Contacts;