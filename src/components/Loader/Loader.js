import { BallTriangle } from 'react-loader-spinner';
import './Loader.css';

const LoaderImg = () => {
    return (
        <div className='Wrapper'>
        <BallTriangle
            heigth="200"
            width="200"
            color='blue'
            ariaLabel='loading'
            />
            </div>
    );
};

export default LoaderImg;