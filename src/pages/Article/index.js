import './styles.css'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { addToChart } from '../../redux/productsSlice'

import Loading from '../../components/Loading'
import Error from '../../components/Error'

function Article({ productItem }) {
    const currentMoney = useSelector((state) => state.products.currentMoney)

    const status = useSelector((state) => state.products.status)
    const error = useSelector((state) => state.products.error)

    const [quantity, setQuantity] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addToChart({ quantity, productItem }))
    }, [dispatch, status, quantity, productItem])

    const handleBuy = () => {
        setQuantity((p) => p + 1)
        // console.log(quantity);
    }

    const handleShell = () => {
        setQuantity((p) => p - 1)
        // console.log(quantity);
    }

    const handleChange = (value) => {

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
                <div key={productItem.product_id} className="card-group mb-3 text-center" style={{ width: '23.75rem' }}>
                    <div className="card-body bg-light pt-2 pb-2">
                        <img alt={productItem.product_name} src={productItem.img} style={{}} />
                        <div>
                            <h5 className="card-title">{productItem.product_name}</h5>
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
                                onChange={handleChange}
                                size={4}
                            />

                            <button
                                href="#"
                                className="btn btn-success fw-bold btn-lg button"
                                disabled={
                                    currentMoney < productItem.product_price || currentMoney === 0 ? true : false
                                }
                                onClick={handleBuy}
                            >Buy</button>

                        </div>
                    </div>
                </div>
            }


        </>
    )
}

export default Article