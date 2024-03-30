import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Admin.css'

const Admin = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
  const [price, setPtice] = useState("")



    return (
        <div id='admin'>
            <div className="container">
                <div className="admin">
                    <h1>Nikes</h1>
                <TextField onChange={(e) => setName(e.target.value)} id="filled-basic" label="Name Boot" variant="filled" />
                <TextField onChange={(e) => setImage(e.target.value)} id="filled-basic" label="IMG url" variant="filled" />
                <TextField onChange={(e) => setPtice(e.target.value)} id="filled-basic" label="For Whom" variant="filled" />
                {/* <TextField onChange={() => setData(e.target.value)} id="filled-basic" label="Рow Ьuch Сolor" variant="filled" /> */}
                {/* <TextField onChange={() => setData(e.target.value)} id="filled-basic" label="Price" variant="filled" /> */}
                <Button sx={{background: '#181818'}} variant="contained">Create</Button>
                </div>
            </div>
        </div>
    );
};

export default Admin;