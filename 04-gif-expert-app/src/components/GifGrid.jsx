import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs'
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);
  return (
    <>
        <h3>{category}</h3>
        {
             isLoading && ( <h2> Cangando...</h2>)
        }

        <div className='card-grid'>
            {
                images.map( ( image ) => (
                    <GifItem 
                    key={ image.id.id }
                    { ...image }
                    />
                ))
            }
        </div>
    </>
  )
}

export default GifGrid

GifGrid.prototype = {
    category: PropTypes.string.isRequired,
}