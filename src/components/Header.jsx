import React, { useState } from 'react'
import { AppBar, Typography, Toolbar, Tabs, Tab } from '@mui/material'
import { NavLink } from "react-router-dom"

export const Header = () => {

  const [value, setValue] = useState(0)

  return (
    <div>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography>
            <Tabs textColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
              <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
              <Tab LinkComponent={NavLink} to="books" label="Books" />
              <Tab LinkComponent={NavLink} to="/about" label="About us" />
            </Tabs>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
