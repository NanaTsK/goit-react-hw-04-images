import styled from 'styled-components';

const transition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const SearchBarHeader = styled('header')({
  top: '0',
  left: '0',
  position: 'sticky',
  zIndex: '1100',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '64px',
  padding: '12px 24px',
  backgroundColor: 'rgba(38, 192, 211, 0.8)',
  boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.5)',
});

export const SearchForm = styled('form')({
  display: 'flex',
  alignItems: 'center',
  width: '80%',
  maxWidth: '600px',
  backgroundColor: 'whitesmoke',
  borderRadius: '3px',
  overflow: 'hidden',
});

export const SearchFormBtn = styled('button')({
  width: '48px',
  height: '48px',
  fontSize: '24px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '0',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  opacity: '0.6',
  backgroundColor: 'rgba(187, 187, 187, 0.4)',

  '&:hover': {
    opacity: '0.8',
    fontSize: '28px',
    backgroundColor: 'rgba(187, 187, 187, 0.8)',
  },
  transition: `opacity ${transition}, font-size ${transition}, background-color ${transition}`,
});

export const SearchFormInput = styled('input')({
  display: 'inline-block',
  width: '100%',
  font: 'inherit',
  fontSize: '20px',
  border: 'none',
  outline: 'none',
  paddingLeft: '8px',
  paddingRight: '4px',
  backgroundColor: 'whitesmoke',

  '&::placeholder': {
    font: 'inherit',
    fontSize: '18px',
    opacity: '0.4',
  },
});

export const CurrentPage = styled('button')({
  background: 'transparent',
  border: 'none',
  fontSize: '20px',
  paddingLeft: '10px',
  color: '#fefefe',
});
