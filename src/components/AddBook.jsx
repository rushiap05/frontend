import React from 'react'
import { TextField, FormLabel } from '@mui/material'

const AddBook = () => {
  return (
    <form>
        <FormLabel>Name</FormLabel>
        <TextField margin="normal" fullWidht variant="outlined" name="name" />
        <FormLabel>author</FormLabel>
        <TextField margin="normal" fullWidht variant="outlined" name="author" />
        <FormLabel>description</FormLabel>
        <TextField margin="normal" fullWidht variant="outlined" name="description" />
        <FormLabel>price</FormLabel>
        <TextField margin="normal" fullWidht variant="outlined" name="price" />
    </form>
  )
}

export default AddBook