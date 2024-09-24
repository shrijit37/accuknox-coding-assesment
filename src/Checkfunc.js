import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const DrawerList = (
    <>

    <div className="" style={{backgroundColor:"#000778"}}>
      <h4 className='text-light m-3'>Add Widget</h4>
    </div>
    <p className='m-2'>Personalize your dashboard by adding the following widgets</p>
   
    <Box
  sx={{ width: 850, display: 'flex', flexDirection: 'column', height: '100vh' }} // Set height to full view height
  role="presentation"
  onClick={toggleDrawer(false)}
  onKeyDown={toggleDrawer(false)}
>
  <div style={{ flex: '1' }}> {/* This div takes the available space */}
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="CSPM" value="1" />
          <Tab label="CWPP" value="2" />
          <Tab label="Image" value="3" />
          <Tab label="Ticket" value="4" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <div className='border-black'>
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText primary={`Cloud Accounts`} />
          </ListItemButton>
        </div>
        <div className='border-black'>
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText primary={`Cloud Accounts Risk Assessments`} />
          </ListItemButton>
        </div>
      </TabPanel>
      <TabPanel value="2"></TabPanel>
      <TabPanel value="3"></TabPanel>
      <TabPanel value="4"></TabPanel>
    </TabContext>
  </div>

  <div className='mt-2 d-flex h-5 ' style={{ marginTop: 'auto', marginLeft:"65%", marginBottom:"1%" }}>
    <button type="button" className="btn btn-light d-flex justify-content-center w-50 m-3 text-center">Cancel</button>
    <button type="button" className="btn btn-dark d-flex justify-content-center w-50 m-3 text-centerss">Confirm</button>
  </div>
</Box>

</>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

