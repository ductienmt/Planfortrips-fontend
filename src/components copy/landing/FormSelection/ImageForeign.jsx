import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageListForeign() {
  return (
    <ImageList sx={{ width: 300, height: 250 }} >
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Các điểm đến ở nước ngoài</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}`}
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar 
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://th.bing.com/th/id/OSK.HEROaGAGnKzK7epUjsswrScbyw05AAobRCO6bB3J660Q4lo?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Singapore',
    rows: 1,
    cols: 1,
    featured: true,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.OVOdYLt-qXdCdNHMTx-0eAHaEK?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Tokyo',
    rows: 1,
    cols: 1,
    featured: true,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.DypKuAcJ9mQqjhjTu6dZ-QHaEo?rs=1&pid=ImgDetMain',
    title: 'Băng cốc',
    rows: 1,
    cols: 1,
    featured: true,
  },
];