import './styles.css'

import { fetchProducts } from '../../redux/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import Loading from '../../components/Loading'
import Error from '../../components/Error'

function Article() {
    const products = useSelector((state) => state.products.items)
    const status = useSelector((state) => state.products.status)
    const error = useSelector((state) => state.products.error)

    const dispatch = useDispatch()
    console.log(status);
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts())
        }
    }, [dispatch, status])

    if (status === 'loading') {
        return <Loading />
    }

    if (error) {
        return <Error message={error} />
    }

    return (
        <div className='row mt-2'>

            {/* <Masonry
                breakpointCols={3}
                className="my-masonry-grid bg-white"
                columnClassName="my-masonry-grid_column"
                style={{ marginLeft: 0 }}>

                {products.map((product) => (

                    <div key={product.product_id}>

                        <img alt={product.product_name} src={product.img} className='product' />

                        <div className='char_name'>{product.productname} - <b>{product.product_price}</b></div>

                    </div>
                ))}
            </Masonry> */}

            {products.map((product) => (

                <div key={product.product_id} className="card mb-3 text-center" style={{ width: '23.75rem' }}>
                    <div className="card-body">
                        <img alt={product.product_name} src={product.img} />
                        <h5 className="card-title">{product.productname}</h5>
                        <p className="card-text text-success fs-3 fw-semibold">${product.product_price}</p>
                        <div className=''>
                            <a href="#" className="btn bg-secondary-subtle fw-bold btn-lg button">Sell</a>
                            <input type={'text'} className='text-center ms-2 me-2' value={0} size={4} />
                            <a href="#" className="btn btn-success btn-lg button">Buy</a>
                        </div>
                    </div>
                </div>
            ))}



        </div>
    )
}

export default Article