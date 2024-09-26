import * as React from 'react';
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';
import Typography from '@mui/material/Typography';

export default function PieAnimation({ title, data }) {
  const [itemNb, setItemNb] = React.useState(5);

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>



      <Typography variant="h6" color="initial" sx={{ textAlign: 'left', marginBottom: '16px' }}>
        {title}
      </Typography>

      {data ? (
        <PieChart
        height={200}
        series={[
          {
            data: data.slice(0, itemNb),
            innerRadius: 65,
            arcLabelMinAngle: 30,
            valueFormatter: (item) => `${item.label} (${item.value})`,
          },
        ]}
        centerLabel={{
          text: `Total: ${data.reduce((acc, item) => acc + item.value, 0)}`, 
          style: { fontSize: 16, fontWeight: 'bold', fill: '#000' } 
        }}
      />
      ) : (
       
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '200px',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '60px' }}>
            monitoring
          </span>
          <h5>No Graph data available!</h5>
        </Box>
      )}
    </Box>
  );
}

