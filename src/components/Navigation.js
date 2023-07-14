import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export default function SimpleBottomNavigation() {

    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: 300, border: '1px solid green' }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
                <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
                <BottomNavigationAction label="Email" icon={<EmailIcon />} />
            </BottomNavigation>
        </Box>
    );
}