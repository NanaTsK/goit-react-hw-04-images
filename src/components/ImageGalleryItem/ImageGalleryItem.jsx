import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  getModalImage,
  tags,
}) => {
  return (
    <GalleryItem onClick={() => getModalImage(largeImageURL)}>
      <GalleryImg src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};
