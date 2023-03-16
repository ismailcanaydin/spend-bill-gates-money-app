import Article from '.';
import { products } from '../../products';

function Items() {

    return (
        <>

            <div className='row justify-content-md-center mt-2'>

                {products.map((item) => (
                    <Article productItem={item} key={item.product_id} />
                ))}
            </div>

        </>
    )
}

export default Items