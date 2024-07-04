
import Card from "./Card"
import PropTypes from 'prop-types';



function Gallery({data, searchValidation}) {
  

  return (
    <section>
      <h3>{searchValidation}</h3>
      {data.map((product)=>{
        return <Card key={product.idProduct} product={product}/>
      })}
    </section>
  )
}

Gallery.propTypes = {
  data: PropTypes.array.isRequired
};

export default Gallery