import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Button, Modal, Box, Typography, TextField, Stack, Select, MenuItem,
  InputLabel, FormControl, SelectChangeEvent
} from '@mui/material';

interface FormValues {
  title: string;
  ingredients: string;
  instructions: string;
  readyInMinutes: string;
  servings: string;
  mask: string;
  backgroundImage: string;
  image: File | null;
  imageUrl: string;
  author: string;
  backgroundColor: string;
  fontColor: string;
  source: string;
}

const ButtonModal = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    title: '',
    ingredients: '',
    instructions: '',
    readyInMinutes: '',
    servings: '',
    mask: '',
    backgroundImage: '',
    image: null,
    imageUrl: '',
    author: '',
    backgroundColor: '',
    fontColor: '',
    source: '',
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const files = (e.target as HTMLInputElement).files;
      setFormValues({
        ...formValues,
        [name]: files ? files[0] : null,
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues); // This is where form data can be sent to a server or processed
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Add Recipe
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" id="modal-modal-title" gutterBottom>
            New Recipe
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Title"
                name="title"
                variant="outlined"
                fullWidth
                required
                value={formValues.title}
                onChange={handleInputChange}
              />
              <TextField
                label="Ingredients"
                name="ingredients"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                helperText="One ingredient per line"
                value={formValues.ingredients}
                onChange={handleInputChange}
              />
              <TextField
                label="Instructions"
                name="instructions"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                helperText="One step per line"
                value={formValues.instructions}
                onChange={handleInputChange}
              />
              <TextField
                label="Ready In Minutes"
                name="readyInMinutes"
                type="number"
                variant="outlined"
                fullWidth
                required
                value={formValues.readyInMinutes}
                onChange={handleInputChange}
              />
              <TextField
                label="Servings"
                name="servings"
                type="number"
                variant="outlined"
                fullWidth
                required
                value={formValues.servings}
                onChange={handleInputChange}
              />
              <FormControl fullWidth variant="outlined">
                <InputLabel id="mask-label">Mask</InputLabel>
                <Select
                  labelId="mask-label"
                  name="mask"
                  value={formValues.mask}
                  onChange={handleSelectChange}
                  label="Mask"
                >
                  {["ellipseMask", "diamondMask", "starMask", "heartMask", "potMask", "fishMask"].map((mask) => (
                    <MenuItem key={mask} value={mask}>
                      {mask}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="backgroundImage-label">Background Image</InputLabel>
                <Select
                  labelId="backgroundImage-label"
                  name="backgroundImage"
                  value={formValues.backgroundImage}
                  onChange={handleSelectChange}
                  label="Background Image"
                >
                  {["none", "background1", "background2"].map((image) => (
                    <MenuItem key={image} value={image}>
                      {image}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Image URL"
                name="imageUrl"
                variant="outlined"
                fullWidth
                value={formValues.imageUrl}
                onChange={handleInputChange}
              />
              <Button
                variant="contained"
                component="label"
                fullWidth
              >
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  hidden
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                />
              </Button>
              <TextField
                label="Author"
                name="author"
                variant="outlined"
                fullWidth
                required
                value={formValues.author}
                onChange={handleInputChange}
              />
              <TextField
                label="Background Color"
                name="backgroundColor"
                type="color"
                variant="outlined"
                fullWidth
                value={formValues.backgroundColor}
                onChange={handleInputChange}
              />
              <TextField
                label="Font Color"
                name="fontColor"
                type="color"
                variant="outlined"
                fullWidth
                value={formValues.fontColor}
                onChange={handleInputChange}
              />
              <TextField
                label="Source"
                name="source"
                variant="outlined"
                fullWidth
                required
                value={formValues.source}
                onChange={handleInputChange}
              />
              <Button type="submit" variant="outlined" fullWidth>
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ButtonModal;
