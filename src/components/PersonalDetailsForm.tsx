import { Card, CardContent, Typography, Box, TextField, MenuItem, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

interface PersonalDetailsFormData {
    gender: string;
    dob: string;
    phone: string;
    countryCode: string;
    email: string;
    fatherName: string;
    motherName: string;
    currentAddress: string;
    permanentAddress: string;
}

export const PersonalDetailsForm = () => {
    const { control, formState: { errors } } = useForm<PersonalDetailsFormData>({
        defaultValues: {
            gender: 'Male/Female',
            dob: 'DD / MM / YYYY',
            phone: '9955 222 131',
            countryCode: '+91',
            email: 'yourmail@gmail.com',
            fatherName: 'Your name',
            motherName: 'Your last name',
            currentAddress: '1-2-345, Current Street, Current City, State, PIN',
            permanentAddress: '1-2-345, Current Street, Current City, State, PIN',
        },
    });

    return (
        <Card>
            <CardContent sx={{ p: 2.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                        Personal Details
                    </Typography>
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Rakesh Yadav
                    <Box
                        component="span"
                        sx={{
                            ml: 1,
                            width: 20,
                            height: 20,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            backgroundColor: '#E3F2FD',
                            fontSize: '0.7rem',
                        }}
                    >
                        ℹ️
                    </Box>
                </Typography>

                <Grid container spacing={1.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                            Gender *
                        </Typography>
                        <Controller
                            name="gender"
                            control={control}
                            rules={{ required: 'Gender is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    select
                                    fullWidth
                                    size="small"
                                    error={!!errors.gender}
                                    helperText={errors.gender?.message}
                                >
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </TextField>
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                            DOB *
                        </Typography>
                        <Controller
                            name="dob"
                            control={control}
                            rules={{ required: 'Date of birth is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    size="small"
                                    placeholder="DD / MM / YYYY"
                                    error={!!errors.dob}
                                    helperText={errors.dob?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                            Phone *
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Controller
                                name="countryCode"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        sx={{ width: 100 }}
                                        InputProps={{
                                            startAdornment: (
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        fontSize: '1.2rem',
                                                        mr: 0.5,
                                                    }}
                                                >
                                                    🇮🇳
                                                </Box>
                                            ),
                                        }}
                                    />
                                )}
                            />
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Invalid phone number',
                                    },
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        size="small"
                                        error={!!errors.phone}
                                        helperText={errors.phone?.message}
                                        InputProps={{
                                            endAdornment: <PhoneIcon sx={{ color: '#999', fontSize: 18 }} />,
                                        }}
                                    />
                                )}
                            />
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                            E-mail *
                        </Typography>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: 'Email is required',
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
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                    InputProps={{
                                        endAdornment: <EmailIcon sx={{ color: '#999', fontSize: 18 }} />,
                                    }}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                            Father's Name *
                        </Typography>
                        <Controller
                            name="fatherName"
                            control={control}
                            rules={{ required: "Father's name is required" }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    size="small"
                                    error={!!errors.fatherName}
                                    helperText={errors.fatherName?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                            Mother's Name *
                        </Typography>
                        <Controller
                            name="motherName"
                            control={control}
                            rules={{ required: "Mother's name is required" }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    size="small"
                                    error={!!errors.motherName}
                                    helperText={errors.motherName?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                            Current Address *
                        </Typography>
                        <Controller
                            name="currentAddress"
                            control={control}
                            rules={{ required: 'Current address is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    size="small"
                                    error={!!errors.currentAddress}
                                    helperText={errors.currentAddress?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                            Permanent Address *
                        </Typography>
                        <Controller
                            name="permanentAddress"
                            control={control}
                            rules={{ required: 'Permanent address is required' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    size="small"
                                    error={!!errors.permanentAddress}
                                    helperText={errors.permanentAddress?.message}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
