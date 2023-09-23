import { LoadMoreBtn } from './Button.styled';

// export const Button = ({ handleLoadMore }) => {
//   return <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>;
// };

export const Button = ({ handleLoadMore }) => {
  return (
    <LoadMoreBtn
      onClick={e => {
        e.currentTarget.blur();
        handleLoadMore();
      }}
    >
      Load More
    </LoadMoreBtn>
  );
};
