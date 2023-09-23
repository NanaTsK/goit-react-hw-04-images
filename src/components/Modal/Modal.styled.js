import styled from 'styled-components';

export const ModalOverlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  zIndex: 1200,
});

export const ModalWindow = styled('div')({
  position: 'relative',
  width: '86%',
  maxWidth: '960px',
  //   borderRadius: '4px',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',

  '& img': {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
});
