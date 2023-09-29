import { useState } from 'react';
// import { Component } from 'react';
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

//* ====== Old code before transitioning to hooks from class components. ======

// import { Component } from 'react';
// import {
//   SearchBarHeader,
//   SearchForm,
//   SearchFormBtn,
//   SearchFormInput,
//   CurrentPage,
// } from './Searchbar.styled';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { notifyInit } from '../index.styled';

// const INITIAL_STATE = {
//   inputQuery: '',
// };

// export class Searchbar extends Component {
//   state = INITIAL_STATE;

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.inputQuery.trim() === '') {
//       Notify.info(`Please, enter your request`, notifyInit);
//       return;
//     }
//     this.props.onSubmit(this.state.inputQuery.trim());
//     this.setState(INITIAL_STATE);
//   };

//   handleInput = e => {
//     this.setState({
//       inputQuery: e.target.value.toLowerCase(),
//     });
//   };

//   render() {
//     const {
//       currentPage: { page, totalPage },
//     } = this.props;
//     return (
//       <SearchBarHeader>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchFormBtn type="submit">
//             <AiOutlineSearch />
//           </SearchFormBtn>
//           <SearchFormInput
//             type="text"
//             name="searchQuery"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleInput}
//             value={this.state.inputQuery}
//           />
//         </SearchForm>

//         {totalPage > 1 && (
//           <CurrentPage>
//             {page}/{totalPage}
//           </CurrentPage>
//         )}
//       </SearchBarHeader>
//     );
//   }
// }
