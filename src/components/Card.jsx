
import PropTypes from 'prop-types';
import Modal from './Modal';
import { useState } from 'react';


function Card({product}) {
const [modal, setModal] = useState(false);
  const toggleModal = () => {
       setModal(!modal);
   };    
   if(modal) {
       document.body.classList.add('active-modal')
   } else {
       document.body.classList.remove('active-modal')
   }

  return (
    <>
    <article onClick={toggleModal}>
        <img src={product.img} alt={"Image of " + product.name} />
        <h3>{product.name}</h3>
    </article>
    {modal && (<Modal product={product} toggleModal={toggleModal}/>)}
    </>
  )
}

Card.propTypes = {
    product: PropTypes.object.isRequired,
};

export default Card