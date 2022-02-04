import './ImageGalleryItem.css'
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, id, largeImage  }) => {
    
    return (
        <li key={id} className="ImageGalleryItem-item" onClick={() => largeImage(largeImageURL)}>
            <img className="ImageGalleryItem-image" src={webformatURL}
                alt={tags}
                
            />
        </li>
    );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImage: PropTypes.func.isRequired,
};