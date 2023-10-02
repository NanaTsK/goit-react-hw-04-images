import { useState } from 'react';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  CurrentPage,
} from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyInit } from '../index.styled';

const INITIAL_STATE = '';

export const Searchbar = ({ onSubmit, currentPage: { page, totalPage } }) => {
  const [value, setValue] = useState(INITIAL_STATE);

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      Notify.info(`Please, enter your request`, notifyInit);
      return;
    }
    onSubmit(value.trim());
    setValue(INITIAL_STATE);
  };

  const handleInput = ({ target: { value } }) => {
    setValue(value);
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <AiOutlineSearch />
        </SearchFormBtn>
        <SearchFormInput
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInput}
          value={value}
        />
      </SearchForm>

      {totalPage > 1 && (
        <CurrentPage>
          {page}/{totalPage}
        </CurrentPage>
      )}
    </SearchBarHeader>
  );
};
