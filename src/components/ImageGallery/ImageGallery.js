import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import './ImageGallery.css';
import PropTypes from 'prop-types';


export const ImageGallery = ({ pictures, onClick }) => {
    return (
        <ul className="ImageGallery">
            {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}
                    largeImage={onClick}
                    />
            ))}
    </ul>
    )
};

ImageGallery.propTypes = {
    pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
    ),
    onClick: PropTypes.func.isRequired,
}