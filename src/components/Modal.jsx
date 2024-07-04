import Carousel from "./Carousel"
import PropTypes from 'prop-types';

function Modal({product, toggleModal}) {
  return (
    <article>
        <button onClick={toggleModal}>X</button>
        <Carousel data={product.photos}/>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        {product.stock && (
            <a href="">Buy</a>
        )}
    </article>
  )
}

Modal.propTypes = {
    product: PropTypes.object.isRequired,
    toggleModal: PropTypes.func.isRequired
  };

export default Modal