import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LabPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    setStatus('loading');
    // do API request here
    setTimeout(() => {
      setStatus('loaded');
      setData({
        department: 'APMA',
        name: 'Random APMA Lab',
        pi: [{ name: 'Alex Ding', url: 'https://www.github.com/alexander-ding' }, { name: 'Austin Lang', url: 'https://www.github.com/alexander-ding' }],
        rating: 5.4,
        size: 12,
        workload: 20,
        description: 'The Brown Visual Computing group develops technology to make and make sense of visual data. They leverage both principled physical models and data-driven methods to synthesize, edit, and explain visual data.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        open_position: true,
        keywords: 'computer graphics, machine learning, computer vision',
        avg_experience: 7.5,
        avg_hoursInLab: 5.6,
        avg_hoursOutLab: 3,
        avg_workload: 8.6,
        avg_communication: 5.0,
      })
    }, 50)

  }, [id])

  return <Box>
    Lab page {id}
  </Box>;
}

export default LabPage;