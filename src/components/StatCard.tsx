import { Card, CardContent, Typography, Box } from '@mui/material';
import { ReactNode } from 'react';

interface StatCardProps {
    title: string;
    value: string;
    icon?: ReactNode;
    trend?: ReactNode;
    chartData?: ReactNode;
}

export const StatCard = ({ title, value, icon, trend, chartData }: StatCardProps) => {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box
                        sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            backgroundColor: '#FFF5E5', // Soft orange circle
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FF9933',
                        }}
                    >
                        {icon}
                    </Box>
                    {trend && <Box sx={{ width: '40%' }}>{trend}</Box>}
                </Box>

                <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontWeight: 500 }}>
                        {title}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#1A1C1E' }}>
                        {value}
                    </Typography>
                </Box>

                {chartData && <Box sx={{ mt: 2 }}>{chartData}</Box>}
            </CardContent>
        </Card>
    );
};
