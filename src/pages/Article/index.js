import './styles.css'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { addToChart } from '../../redux/productsSlice'

import Loading from '../../components/Loading'
import Error from '../../components/Error'


function Article({ productItem }) {
    const status = useSelector((state) => state.products.status)
    const error = useSelector((state) => state.products.error)

    const [quantity, setQuantity] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addToChart({ quantity, productItem }))
    }, [dispatch, status, quantity, productItem])

    const handleBuy = () => {
        setQuantity((p) => p + 1)
        console.log(quantity);
    }

    const handleShell = () => {
        setQuantity((p) => p - 1)
        console.log(quantity);
    }

    const handleChange = (value) => {
        console.log(value);
    };

    if (status === 'loading') {
        return <Loading />
    }

    if (error) {
        return <Error message={error} />
    }

    return (
        <>
            {status === 'idle' &&

                <div className='row mt-2'>

                    <div key={productItem.product_id} className="card mb-3 text-center" style={{ width: '23.75rem' }}>
                        <div className="card-body">
                            <img alt={productItem.product_name} src={productItem.img} style={{}} />
                            <div>
                                <h5 className="card-title">{productItem.productname}</h5>
                            </div>
                            <div>
                                <p className="card-text text-success fs-3 fw-semibold">${productItem.product_price}</p>
                            </div>

                            <div className='' style={{ position: '' }}>

                                <button
                                    href="#"
                                    className="btn bg-secondary-subtle fw-bold btn-lg button"
                                    onClick={handleShell}
                                    disabled={quantity === 0 ? true : false}
                                >Sell</button>

                                <input
                                    id={productItem.product_id}
                                    type={'text'}
                                    className='text-center ms-2 me-2'
                                    value={quantity}
                                    onChange={(e) => handleChange(e.target.value)}
                                    size={4}
                                />

                                <button
                                    id={productItem.product_id}
                                    href="#"
                                    className="btn btn-success fw-bold btn-lg button"
                                    onClick={handleBuy}
                                >Buy</button>

                            </div>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}

export default Article