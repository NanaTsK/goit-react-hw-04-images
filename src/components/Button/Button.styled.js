import styled from 'styled-components';

export const LoadMoreBtn = styled('button')({
  padding: '12px 16px',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '2px',
  backgroundColor: 'rgba(38, 192, 211, 0.6)',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  border: '0',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100vw',

  color: '#fff',
  boxShadow:
    '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',

  '&:is(:hover, :focus)': {
    backgroundColor: 'rgba(38, 192, 211, 0.8)',
  },
});
