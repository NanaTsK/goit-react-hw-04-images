import styled from 'styled-components';

const transition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const GalleryItem = styled('li')({
  borderRadius: '4px',
  boxShadow:
    '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
});
export const GalleryImg = styled('img')({
  borderRadius: '4px',

  width: '100%',
  height: '260px',
  objectFit: 'cover',

  '&:hover': {
    transform: 'scale(1.03)',
    cursor: 'zoom-in',
  },
  transition: `transform ${transition}, cursor ${transition}`,
});
