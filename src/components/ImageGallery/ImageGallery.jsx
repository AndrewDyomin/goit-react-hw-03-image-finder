import { List } from './ImageGallery.styled';
import { GalleryItem } from 'components/ImageGalleryItem/GalleryItem';


export const ImageGallery = ({ imageList }) => {
    return (
        <List className="gallery">
            {imageList.map(photo => (
                <li key={photo.id}>
                    <GalleryItem item={photo} />
                </li>
            ))}
        </List>
    );
};