import styled from 'styled-components';

export const ImageGalleryList = styled('ul')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gridGap: '16px',
  marginTop: '0',
  margin: '20px auto ',
  padding: '0 16px',
  maxWidth: '1366px',
});
