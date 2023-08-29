
export const GalleryItem = ({ item }) => {
    return (
        <img src={item.webformatURL} alt={item.tags} />
    )
};