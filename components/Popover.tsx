"use client"
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FaHeart } from 'react-icons/fa';

interface Props {
  favorites:string[]
}
export default function BasicPopover({ favorites} : Props) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        Favorites
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {favorites.length === 0 && <p>No favorites</p>}
        {favorites.map(fav =>  <Typography key={fav} sx={{ p: 2 }}>{fav}<FaHeart size={20} color='red'/></Typography> )}
      </Popover>
    </div>
  );
}