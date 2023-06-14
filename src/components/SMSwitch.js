import React from 'react'
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const SMSwitch = ({label,onChange}) => {
  return (
    <>
     <Switch label={label} onChange={onChange} />
    </>
  )
}
export default SMSwitch;
