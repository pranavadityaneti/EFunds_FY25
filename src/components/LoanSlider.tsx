import { Card, CardContent, Typography, Box, Slider, Button } from '@mui/material';
import { useState } from 'react';

export const LoanSlider = () => {
    const [amount, setAmount] = useState<number>(10000); // Start at 10k
    const minAmount = 10000;
    const maxAmount = 100000000;

    const handleSliderChange = (_event: Event, newValue: number | number[]) => {
        setAmount(newValue as number);
    };

    return (
        <Card
            sx={{
                background: 'linear-gradient(135deg, #FF9933 0%, #FF6B00 100%)', // Vibrant Orange Gradient
                color: '#FFF',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0px 10px 30px rgba(255, 153, 51, 0.3)', // Colored shadow
            }}
        >
            {/* Glassmorphic overlay effect */}
            <Box
                sx={{
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                }}
            />

            <CardContent sx={{ p: 3, position: 'relative', zIndex: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                    Slide To Choose
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, opacity: 0.9, fontSize: '0.875rem' }}>
                    Drag the slider to select the loan amount you require.
                </Typography>

                <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                    {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                        maximumFractionDigits: 0,
                    }).format(amount)}
                </Typography>

                <Slider
                    value={amount}
                    onChange={handleSliderChange}
                    min={minAmount}
                    max={maxAmount}
                    step={10000}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(value) =>
                        new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            maximumFractionDigits: 0,
                        }).format(value)
                    }
                    sx={{
                        color: '#FFF',
                        height: 8,
                        mb: 3,
                        '& .MuiSlider-thumb': {
                            width: 28,
                            height: 28,
                            backgroundColor: '#FFF',
                            border: 'none',
                            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                            '&:hover, &.Mui-focusVisible': {
                                boxShadow: '0px 0px 0px 8px rgba(255, 255, 255, 0.16)',
                            },
                        },
                        '& .MuiSlider-track': {
                            height: 8,
                            backgroundColor: '#FFF',
                            border: 'none',
                        },
                        '& .MuiSlider-rail': {
                            height: 8,
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        },
                    }}
                />

                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => {
                        console.log('Submitting loan request for:', amount);
                        // Logic to fetch offers based on amount, CIBIL, etc. will go here
                    }}
                    sx={{
                        backgroundColor: '#000',
                        color: '#FFF',
                        borderRadius: '50px',
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#333',
                        },
                    }}
                >
                    Submit
                </Button>
            </CardContent>
        </Card>
    );
};
