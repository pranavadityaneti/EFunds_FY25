import { Card, CardContent, Typography, Box, TextField, Grid, Chip } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import EmailIcon from '@mui/icons-material/Email';

interface ProfessionalDetailsFormData {
    currentRole: string;
    employeeId: string;
    doj: string;
    officialEmail: string;
    currentCTC: string;
    officeAddress: string;
}

export const ProfessionalDetailsForm = () => {
    const { control, formState: { errors } } = useForm<ProfessionalDetailsFormData>({
        defaultValues: {
            currentRole: 'Lead Software Engineer',
            employeeId: 'Your Employee ID',
            doj: 'DD / MM / YYYY',
            officialEmail: 'yourmail@textbook.com',
            currentCTC: '1-2-345, Current Street, Current City, State, PIN',
            officeAddress: '1-2-345, Current Street, Current City, State, PIN',
        },
    });

    return (
        <Card>
            <CardContent sx={{ p: 2.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                        Professional Details
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        Textbook Sol
                    </Typography>
                    <Chip
                        label="PVT LTD"
                        size="small"
                        sx={{
                            backgroundColor: '#E3F2FD',
                            color: '#1976D2',
                            fontSize: '0.65rem',
                            height: 20,
                            fontWeight: 600,
                        }}
                    />
                </Box>

                <Grid container spacing={1.5}>
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                            Current Role *
                        </Typography>
                        <Controller
                            name="currentRole"
                            control={control}
                            rules={{ required: 'Current role is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    size="small"
                                    error={!!errors.currentRole}
                                    helperText={errors.currentRole?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                            EMP ID *
                        </Typography>
                        <Controller
                            name="employeeId"
                            control={control}
                            rules={{ required: 'Employee ID is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    size="small"
                                    placeholder="Your Employee ID"
                                    error={!!errors.employeeId}
                                    helperText={errors.employeeId?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                            DOJ *
                        </Typography>
                        <Controller
                            name="doj"
                            control={control}
                            rules={{ required: 'Date of joining is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    size="small"
                                    placeholder="DD / MM / YYYY"
                                    error={!!errors.doj}
                                    helperText={errors.doj?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                            Official E-mail *
                        </Typography>
                        <Controller
                            name="officialEmail"
                            control={control}
                            rules={{
                                required: 'Official email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    size="small"
                                    error={!!errors.officialEmail}
                                    helperText={errors.officialEmail?.message}
                                    InputProps={{
                                        endAdornment: <EmailIcon sx={{ color: '#999', fontSize: 18 }} />,
                                    }}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                            Current CTC *
                        </Typography>
                        <Controller
                            name="currentCTC"
                            control={control}
                            rules={{ required: 'Current CTC is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    size="small"
                                    error={!!errors.currentCTC}
                                    helperText={errors.currentCTC?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                            Office Address *
                        </Typography>
                        <Controller
                            name="officeAddress"
                            control={control}
                            rules={{ required: 'Office address is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    size="small"
                                    error={!!errors.officeAddress}
                                    helperText={errors.officeAddress?.message}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
