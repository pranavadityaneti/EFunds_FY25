import { Box, TextField, InputAdornment, Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightModeIcon from '@mui/icons-material/LightMode';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
    onMenuClick?: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
    return (
        <Box
            sx={{
                height: 80,
                backgroundColor: '#FFFFFF',
                borderBottom: '1px solid #E0E0E0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: { xs: 2, sm: 4 },
                position: 'fixed',
                top: 0,
                right: 0,
                left: { xs: 0, md: 200 },
                zIndex: 1000,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                {/* Mobile menu button */}
                <IconButton
                    onClick={onMenuClick}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <MenuIcon />
                </IconButton>

                {/* Search Bar */}
                <TextField
                    placeholder="Search"
                    size="small"
                    sx={{
                        width: { xs: '100%', sm: 300 },
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: '#F5F5F5',
                            '& fieldset': {
                                border: 'none',
                            },
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#999' }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            {/* Right Side Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
                <IconButton size="small" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
                    <NotificationsIcon />
                </IconButton>
                <IconButton size="small" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
                    <LightModeIcon />
                </IconButton>
                <IconButton size="small" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
                    <CalendarTodayIcon />
                </IconButton>
                <Avatar
                    sx={{
                        width: 40,
                        height: 40,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    }}
                >
                    R
                </Avatar>
            </Box>
        </Box>
    );
};
