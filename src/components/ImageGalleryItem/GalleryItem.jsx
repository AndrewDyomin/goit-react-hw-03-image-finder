import { ImageGalleryItemImage } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const GalleryItem = ({ item }) => {
    return (
        <ImageGalleryItemImage src={item.webformatURL} alt={item.tags} />
    )
};