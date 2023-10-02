import { useState, useCallback, useEffect } from 'react';

import { Container, ErrorMessage, notifyInit } from './index.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from '../api/pixabay-api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const INITIAL_STATE = {
  images: [],
  error: false,
  loader: false,
  searchQuery: '',
  isShowModal: false,
  imageForModal: '',
  page: 1,
  totalPage: 0,
};

export const App = () => {
  const [images, setImages] = useState(INITIAL_STATE.images);
  const [error, setError] = useState(INITIAL_STATE.error);
  const [loader, setLoader] = useState(INITIAL_STATE.loader);
  const [searchQuery, setSearchQuery] = useState(INITIAL_STATE.searchQuery);
  const [isShowModal, setIsShowModal] = useState(INITIAL_STATE.isShowModal);
  const [imageForModal, setImageForModal] = useState(
    INITIAL_STATE.imageForModal
  );
  const [page, setPage] = useState(INITIAL_STATE.page);
  const [totalPage, setTotalPage] = useState(INITIAL_STATE.totalPage);

  useEffect(() => {
    setImages(INITIAL_STATE.images);
  }, []);

  const fetchInputImages = useCallback(async () => {
    try {
      setLoader(true);
      const data = await fetchImages(searchQuery, page);
      if (!data.hits.length) {
        Notify.warning(
          `Sorry, there are no images matching your search query. Please try again.`,
          notifyInit
        );
        setLoader(false);
        return;
      }
      const normalized = data.hits.map(
        ({ id, tags, webformatURL, largeImageURL }) => ({
          id,
          tags,
          webformatURL,
          largeImageURL,
        })
      );
      setLoader(false);

      if (page === 1) {
        setImages(normalized);
      } else {
        setImages(prevImages => [...prevImages, ...normalized]);
      }

      setTotalPage(Math.ceil(data.totalHits / data.perPage));
    } catch (error) {
      setError(true);
      setLoader(false);
    } finally {
      setError(false);
    }
  }, [searchQuery, page]);

  useEffect(() => {
    setImages([]);
    setPage(INITIAL_STATE.page);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery) {
      fetchInputImages();
    }
  }, [searchQuery, fetchInputImages]);

  const handleSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(INITIAL_STATE.page);
    setImages(INITIAL_STATE.images);
    setTotalPage(INITIAL_STATE.totalPage);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const getModalImage = image => {
    setImageForModal(image);
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(INITIAL_STATE.isShowModal);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} currentPage={{ page, totalPage }} />
      {images && images.length > 0 && (
        <ImageGallery images={images} getModalImage={getModalImage} />
      )}
      {loader && <Loader />}
      {error && <ErrorMessage>Oooops! Something went wrong...</ErrorMessage>}
      {totalPage > 0 && totalPage !== page && (
        <Button handleLoadMore={handleLoadMore} />
      )}
      {isShowModal && (
        <Modal largeImageURL={imageForModal} onCloseModal={closeModal} />
      )}
    </Container>
  );
};

//* ====== Old code before transitioning to hooks from class components. ======

// import { Component } from 'react';
// import { Container, ErrorMessage, notifyInit } from './index.styled';
// import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { fetchImages } from '../api/pixabay-api';
// import { Button } from './Button/Button';
// import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// export class App extends Component {
//   state = {
//     images: [],
//     error: false,
//     loader: false,
//     searchQuery: '',
//     isShowModal: false,
//     imageForModal: '',
//     page: 1,
//     totalPage: 0,
//   };

//   componentDidUpdate(_, prevState) {
//     if (
//       prevState.searchQuery !== this.state.searchQuery ||
//       prevState.page !== this.state.page
//     )
//       this.fetchInputImages();
//   }

//   fetchInputImages = async () => {
//     try {
//       this.setState({ loader: true });
//       const data = await fetchImages(this.state.searchQuery, this.state.page);
//       if (!data.hits.length) {
//         Notify.warning(
//           `Sorry, there are no images matching your search query. Please try again.`,
//           notifyInit
//         );
//         return;
//       }

//       const normalized = data.hits.map(
//         ({ id, tags, webformatURL, largeImageURL }) => ({
//           id,
//           tags,
//           webformatURL,
//           largeImageURL,
//         })
//       );

//       this.setState(prevState => ({
//         images: [...prevState.images, ...normalized],
//         totalPage: Math.ceil(data.totalHits / data.perPage),
//       }));
//     } catch (error) {
//       this.setState({ error: true });
//     } finally {
//       this.setState({ loader: false });
//     }
//   };

//   handleSubmit = searchQuery => {
//     this.setState({ searchQuery, page: 1, images: [], totalPage: 0 });
//   };

//   handleLoadMore = () => {
//     this.setState(({ page }) => ({ page: page + 1 }));
//   };

//   getModalImage = image => {
//     this.setState({
//       imageForModal: image,
//       isShowModal: true,
//     });
//   };

//   closeModal = () => {
//     this.setState({ isShowModal: false });
//   };

//   render() {
//     const {
//       images,
//       loader,
//       error,
//       isShowModal,
//       imageForModal,
//       totalPage,
//       page,
//     } = this.state;
//     const { handleSubmit, getModalImage, handleLoadMore, closeModal } = this;

//     return (
//       <Container>
//         <Searchbar onSubmit={handleSubmit} currentPage={{ page, totalPage }} />
//         {images && images.length > 0 && (
//           <ImageGallery images={images} getModalImage={getModalImage} />
//         )}
//         {loader && <Loader />}
//         {error && <ErrorMessage>Oooops! Something went wrong...</ErrorMessage>}
//         {totalPage > 0 && totalPage !== page && (
//           <Button handleLoadMore={handleLoadMore} />
//         )}
//         {isShowModal && (
//           <Modal largeImageURL={imageForModal} onCloseModal={closeModal} />
//         )}
//       </Container>
//     );
//   }
// }
