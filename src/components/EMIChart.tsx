import { Card, CardContent, Typography, Box } from '@mui/material';
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';

interface EMIChartProps {
    data?: Array<{ month: string; amount: number }>;
}

const defaultData = [
    { month: 'Jan', amount: 250 },
    { month: 'Feb', amount: 380 },
    { month: 'Mar', amount: 320 },
    { month: 'Apr', amount: 410 },
    { month: 'May', amount: 695 },
    { month: 'Jun', amount: 298 },
    { month: 'Jul', amount: 340 },
    { month: 'Aug', amount: 550 },
    { month: 'Sep', amount: 420 },
    { month: 'Oct', amount: 310 },
    { month: 'Nov', amount: 480 },
    { month: 'Dec', amount: 390 },
];

export const EMIChart = ({ data = defaultData }: EMIChartProps) => {
    const totalSpent = '₹682.5';

    return (
        <Card sx={{ height: '100%', boxShadow: 'none', border: '1px solid #E0E0E0' }}>
            <CardContent sx={{ p: 2.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                    <Box>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem', mb: 0.5 }}>
                            Total Spent
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            {totalSpent}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: 32,
                            height: 32,
                            borderRadius: 1,
                            backgroundColor: '#F5F5F5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FF9933',
                        }}
                    >
                        <Typography sx={{ fontSize: '1rem' }}>📊</Typography>
                    </Box>
                </Box>

                <Box sx={{ position: 'relative', height: 200 }}>
                    {/* Dashed Line for Limit */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '20%',
                            left: 0,
                            right: 0,
                            borderTop: '1px dashed #FF9933',
                            zIndex: 1,
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: -20,
                                color: '#FF9933',
                                fontWeight: 600,
                            }}
                        >
                            $179
                        </Typography>
                    </Box>

                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} barSize={32}>
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#999' }}
                                dy={10}
                            />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                contentStyle={{
                                    backgroundColor: '#333',
                                    border: 'none',
                                    borderRadius: 8,
                                    color: '#FFF',
                                }}
                            />
                            <Bar
                                dataKey="amount"
                                radius={[4, 4, 4, 4]}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.month === 'Jun' ? '#FF9933' : '#F5F5F5'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
            </CardContent>
        </Card>
    );
};
