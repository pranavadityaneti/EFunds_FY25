import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, Drawer, useMediaQuery, useTheme } from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useState } from 'react';


const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <GridViewRoundedIcon /> },
    { id: 'activity', label: 'Activity', icon: <TimelineRoundedIcon /> },
    { id: 'faq', label: 'FAQ', icon: <HelpOutlineRoundedIcon /> },
    { id: 'settings', label: 'Settings', icon: <SettingsRoundedIcon /> },
];

interface SidebarProps {
    mobileOpen?: boolean;
    onClose?: () => void;
}

export const Sidebar = ({ mobileOpen = false, onClose }: SidebarProps) => {
    const [activeItem, setActiveItem] = useState('dashboard');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const sidebarContent = (
        <>
            {/* Logo */}
            <Box sx={{ p: 3, borderBottom: '1px solid #E0E0E0' }}>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 800,
                        background: 'linear-gradient(90deg, #FF9933 0%, #FF6B00 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.5px',
                    }}
                >
                    EFUNDZ
                </Typography>
            </Box>

            {/* Menu Items */}
            <List sx={{ flex: 1, pt: 2 }}>
                {menuItems.map((item) => (
                    <ListItem
                        key={item.id}
                        onClick={() => {
                            setActiveItem(item.id);
                            if (isMobile && onClose) onClose();
                        }}
                        sx={{
                            mx: 2,
                            mb: 1,
                            borderRadius: '12px', // Pill shape
                            cursor: 'pointer',
                            backgroundColor: activeItem === item.id ? '#FFF5E5' : 'transparent', // Soft orange bg
                            color: activeItem === item.id ? '#FF9933' : '#6C757D',
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                                backgroundColor: activeItem === item.id ? '#FFF5E5' : '#F8F9FA',
                                transform: 'translateX(4px)',
                            },
                            '& .MuiListItemIcon-root': {
                                color: activeItem === item.id ? '#FF9933' : '#6C757D',
                                minWidth: 40,
                            },
                        }}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                                fontSize: '0.875rem',
                                fontWeight: activeItem === item.id ? 600 : 400,
                            }}
                        />
                    </ListItem>
                ))}
            </List>

            {/* Logout */}
            <List sx={{ pb: 2 }}>
                <ListItem
                    sx={{
                        mx: 1.5,
                        borderRadius: 2,
                        cursor: 'pointer',
                        color: '#666666',
                        transition: 'all 0.2s',
                        '&:hover': {
                            backgroundColor: '#F5F5F5',
                        },
                        '& .MuiListItemIcon-root': {
                            color: '#666666',
                            minWidth: 40,
                        },
                    }}
                >
                    <ListItemIcon>
                        <LogoutRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Log Out"
                        primaryTypographyProps={{
                            fontSize: '0.875rem',
                        }}
                    />
                </ListItem>
            </List>
        </>
    );

    return (
        <>
            {/* Desktop sidebar */}
            <Box
                sx={{
                    width: 250,
                    height: '100vh',
                    backgroundColor: '#FFFFFF',
                    // borderRight: '1px solid #E0E0E0', // Removed border for cleaner look
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'column',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    boxShadow: '4px 0 24px rgba(0,0,0,0.02)', // Very subtle shadow separator
                    zIndex: 1200,
                }}
            >
                {sidebarContent}
            </Box>

            {/* Mobile drawer */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={onClose}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        width: 250,
                        backgroundColor: '#FFFFFF',
                    },
                }}
            >
                {sidebarContent}
            </Drawer>
        </>
    );
};
