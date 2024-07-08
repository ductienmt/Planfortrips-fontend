import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 600, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Các điểm đến ở Việt Nam</ListSubheader>
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
    img: 'https://pix6.agoda.net/geo/city/16440/1_16440_02.jpg?ca=6&ce=1&s=396x298&ar=4x3',
    title: 'Đà Nẵng',
  
  },
  {
    img: 'https://pix6.agoda.net/geo/city/2679/1_2679_02.jpg?ca=6&ce=1&s=396x298&ar=4x3',
    title: 'Nha Trang',
  },
  {
    img: 'https://pix6.agoda.net/geo/city/2758/065f4f2c9fa263611ab65239ecbeaff7.jpg?ce=0&s=396x298&ar=4x3',
    title: 'Hà Nội',
  },
  {
    img: 'https://pix6.agoda.net/geo/city/17190/1_17190_02.jpg?ca=6&ce=1&s=396x298&ar=4x3',
    title: 'Vũng Tàu',
    cols: 2,
  },
  {
    img: 'https://pix6.agoda.net/geo/city/15932/1_15932_02.jpg?ca=6&ce=1&s=396x298&ar=4x3',
    title: 'Đà Lạt',
    cols: 2,
  },
  {
    img: 'https://pix6.agoda.net/geo/city/16552/1_16552_02.jpg?ca=6&ce=1&s=396x298&ar=4x3',
    title: 'Hội An',
    rows: 2,
    cols: 2,
    featured: true,
  },
];