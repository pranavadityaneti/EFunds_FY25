import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Typography, Grid } from '@mui/material';
import { theme } from './theme';
import { Sidebar } from './components/Sidebar';
import { StatCard } from './components/StatCard';
import { LoanSlider } from './components/LoanSlider';
import { EMIChart } from './components/EMIChart';
import { LoanOfferCard } from './components/LoanOfferCard';
import { PersonalDetailsForm } from './components/PersonalDetailsForm';
import { ProfessionalDetailsForm } from './components/ProfessionalDetailsForm';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { LineChart, Line, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useState } from 'react';

const miniChartData = [
    { value: 30 },
    { value: 45 },
    { value: 35 },
    { value: 50 },
    { value: 40 },
    { value: 60 },
];

const loanOffers = [
    {
        bank: 'HDFC BANK',
        apr: '9.46%',
        period: 'Since last month',
        amount: '10 Lakhs',
        interest: '12%',
        tenure: '60 Months',
    },
    {
        bank: 'HDFC BANK',
        apr: '8.2%',
        period: 'Since last month',
        amount: '5 Lakhs',
        interest: '12.2%',
        tenure: '60 Months',
    },
    {
        bank: 'HDFC BANK',
        apr: '9.46%',
        period: 'Since last month',
        amount: '10 Lakhs',
        interest: '12%',
        tenure: '60 Months',
    },
    {
        bank: 'ICICI BANK',
        apr: '8.5%',
        period: 'Since last month',
        amount: '15 Lakhs',
        interest: '11.5%',
        tenure: '48 Months',
    },
    {
        bank: 'SBI',
        apr: '7.9%',
        period: 'Since last month',
        amount: '20 Lakhs',
        interest: '10.5%',
        tenure: '72 Months',
    },
    {
        bank: 'AXIS BANK',
        apr: '9.0%',
        period: 'Since last month',
        amount: '8 Lakhs',
        interest: '12.5%',
        tenure: '36 Months',
    },
    {
        bank: 'KOTAK',
        apr: '8.8%',
        period: 'Since last month',
        amount: '12 Lakhs',
        interest: '11.8%',
        tenure: '60 Months',
    },
    {
        bank: 'HDFC BANK',
        apr: '9.46%',
        period: 'Since last month',
        amount: '5 Lakhs',
        interest: '12%',
        tenure: '24 Months',
    },
];

function App() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', backgroundColor: '#F5F5F5', minHeight: '100vh' }}>
                <Sidebar mobileOpen={mobileOpen} onClose={handleDrawerToggle} />

                {/* Main Content Area - 3 Column Grid */}
                <Box
                    sx={{
                        flex: 1,
                        ml: { xs: 0, md: '250px' },
                        display: 'flex',
                        gap: 3,
                        p: { xs: 2, sm: 3, md: 4 },
                        flexDirection: { xs: 'column', lg: 'row' },
                    }}
                >
                    {/* Middle Column: Stats, Chart, Forms */}
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                        {/* Stats Row */}
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <StatCard
                                    title="Spent this month"
                                    value="₹682.5"
                                    icon={<Box component="span" sx={{ fontSize: '1.2rem' }}>📊</Box>}
                                    chartData={
                                        <ResponsiveContainer width="100%" height={40}>
                                            <BarChart data={[{ v: 1 }, { v: 2 }, { v: 3 }, { v: 2 }, { v: 4 }]}>
                                                <Bar dataKey="v" fill="#FF9933" radius={[2, 2, 0, 0]} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    }
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <StatCard
                                    title="CIBIL Score"
                                    value="321"
                                    icon={<TrendingUpIcon />}
                                    trend={
                                        <ResponsiveContainer width="100%" height={40}>
                                            <LineChart data={miniChartData}>
                                                <Line
                                                    type="monotone"
                                                    dataKey="value"
                                                    stroke="#FF9933"
                                                    strokeWidth={2}
                                                    dot={false}
                                                />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    }
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <StatCard
                                    title="Earnings"
                                    value="₹350.40"
                                    icon={<Box component="span" sx={{ fontSize: '1.2rem' }}>📊</Box>}
                                />
                            </Grid>
                        </Grid>

                        {/* Total Spent Chart */}
                        <Box>
                            <EMIChart />
                        </Box>

                        {/* Forms Row */}
                        {/* Forms Row */}
                        <Grid container spacing={2} sx={{ mt: 4 }}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <PersonalDetailsForm />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <ProfessionalDetailsForm />
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Right Column: Slider, Offers */}
                    <Box
                        sx={{
                            width: { xs: '100%', lg: '380px' },
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}
                    >
                        <LoanSlider />

                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                                Your Loan Offers
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    maxHeight: '600px',
                                    overflowY: 'auto',
                                    pr: 1,
                                    '&::-webkit-scrollbar': {
                                        width: '6px',
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        backgroundColor: 'transparent',
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: '#D0D0D0',
                                        borderRadius: '3px',
                                    },
                                }}
                            >
                                {loanOffers.map((offer, index) => (
                                    <LoanOfferCard key={index} offer={offer} />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
