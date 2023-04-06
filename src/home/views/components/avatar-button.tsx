import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import UserModel from '../../../shared/models/user-model';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import profile2 from '../../../assets/imagem-profile.jpg';

interface Props {
  user?: UserModel | undefined;
}

export default function ImageAvatars(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Coloque aqui o código para fazer logout da conta
  };

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        <Avatar  src={props.user !== undefined ? props.user.profilePictureImageUrl : profile2} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleLogout}>
          
          Sair
        </MenuItem>
      </Menu>
    </>
  );
}
