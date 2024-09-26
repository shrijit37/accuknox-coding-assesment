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
import { useDispatch, useSelector } from 'react-redux';
import { toggleCloudAccounts, toggleCloudAccountsRiskAssessments } from './Redux/checkboxSlice.js';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('1');

  const dispatch = useDispatch();
  const cloudAccountsChecked = useSelector((state) => state.checkbox.cloudAccounts);
  const cloudAccountsRiskChecked = useSelector((state) => state.checkbox.cloudAccountsRiskAssessments);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (newOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(newOpen);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const DrawerList = (
    <>
      <div style={{ backgroundColor: "#000778" }}>
        <h4 className='text-light m-3 '>Add Widget</h4>
      </div>
      <p className='m-2'>Personalize your dashboard by adding the following widgets</p>

      <Box
        sx={{ width: 850, display: 'flex', flexDirection: 'column', height: '100vh' }}
        role="presentation"
      >
        <div style={{ flex: '1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="Widget tabs">
                <Tab label="CSPM" value="1" />
                <Tab label="CWPP" value="2" />
                <Tab label="Image" value="3" />
                <Tab label="Ticket" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <ListItemButton role={undefined} dense onClick={() => dispatch(toggleCloudAccounts())}>
                <ListItemIcon>
                  <Checkbox edge="start" tabIndex={-1} disableRipple checked={cloudAccountsChecked} />
                </ListItemIcon>
                <ListItemText primary="Cloud Accounts" />
              </ListItemButton>
              <ListItemButton role={undefined} dense onClick={() => dispatch(toggleCloudAccountsRiskAssessments())}>
                <ListItemIcon>
                  <Checkbox edge="start" tabIndex={-1} disableRipple checked={cloudAccountsRiskChecked} />
                </ListItemIcon>
                <ListItemText primary="Cloud Accounts Risk Assessments" />
              </ListItemButton>
            </TabPanel>
            <TabPanel value="2"></TabPanel>
            <TabPanel value="3"></TabPanel>
            <TabPanel value="4"></TabPanel>
          </TabContext>
        </div>

        <div className='d-flex justify-content-center mt-2' style={{ marginTop: 'auto', marginBottom: '1%' }}>
          <button type="button" className="btn btn-light w-25 m-2" onClick={closeDrawer}>Cancel</button>
          <button type="button" className="btn btn-dark w-25 m-2" onClick={closeDrawer}>Confirm</button>
        </div>
      </Box>
    </>
  );

  return (
    <div>
      <Button className="btn btn-light m-2" onClick={toggleDrawer(true)}>+ Add Widget</Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}



