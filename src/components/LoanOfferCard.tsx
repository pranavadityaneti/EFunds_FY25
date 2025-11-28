import { Card, CardContent, Typography, Box, Chip, Button } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface LoanOffer {
    bank: string;
    apr: string;
    period: string;
    amount: string;
    interest: string;
    tenure: string;
}

interface LoanOfferCardProps {
    offer: LoanOffer;
}

export const LoanOfferCard = ({ offer }: LoanOfferCardProps) => {
    return (
        <Card
            sx={{
                backgroundColor: '#FFFFFF',
                color: '#1A1C1E',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s',
                flexShrink: 0, // Prevent shrinking in flex container
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0px 8px 24px rgba(0,0,0,0.08)',
                },
            }}
        >
            <CardContent sx={{ p: 2.5 }}>
                {/* Bank Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Box
                        sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '12px',
                            backgroundColor: '#F4F6F8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23ED232A' d='M12 2l3 3h6v6l3 3-3 3v6h-6l-3 3-3-3H3v-6L0 12l3-3V3h6z'/%3E%3C/svg%3E"
                            alt="HDFC"
                            sx={{ width: 24, height: 24 }}
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 700 }}>
                            {offer.bank}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                            <Chip
                                label={offer.apr}
                                size="small"
                                sx={{
                                    backgroundColor: '#E8F5E9',
                                    color: '#2E7D32',
                                    fontSize: '0.75rem',
                                    height: 24,
                                    fontWeight: 600,
                                    borderRadius: '6px',
                                }}
                            />
                            <Typography variant="caption" sx={{ color: '#6C757D', fontSize: '0.75rem' }}>
                                {offer.period}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Loan Details */}
                <Box sx={{ mb: 2.5, p: 2, backgroundColor: '#F8F9FA', borderRadius: '12px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ color: '#6C757D' }}>Amount</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{offer.amount}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ color: '#6C757D' }}>Interest</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{offer.interest}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" sx={{ color: '#6C757D' }}>Tenure</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{offer.tenure}</Typography>
                    </Box>
                </Box>

                {/* Apply Button */}
                <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    sx={{
                        backgroundColor: '#1A1C1E',
                        color: '#FFF',
                        borderRadius: '12px',
                        py: 1,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        '&:hover': {
                            backgroundColor: '#333',
                        },
                    }}
                >
                    Apply Now
                </Button>
            </CardContent>
        </Card>
    );
};
