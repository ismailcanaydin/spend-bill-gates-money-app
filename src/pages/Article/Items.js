import Article from '.';
import { products } from '../../products';

function Items() {

    return (
        <div>
            <pre>{JSON.stringify(products.map((product) => product))}</pre>
            {products.map((item) => (
                <Article productItem={item} key={item.product_id} />
            ))
            }
        </div>
    )
}

export default Items