import './styles.css'

import { fetchProducts } from '../../redux/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import Loading from '../../components/Loading'
import Error from '../../components/Error'

function Article() {
    const products = useSelector((state) => state.products.items)
    const status = useSelector((state) => state.products.status)
    const error = useSelector((state) => state.products.error)


    const [quantity, setquantity] = useState()
    console.log(quantity);
    const [selectId, setSelectId] = useState(0)


    const dispatch = useDispatch()

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

    console.log(products.filter(product => product.product_id === 1));

    return (
        <div className='row mt-2'>

            {products.map((product) => (

                <div key={product.product_id} className="card mb-3 text-center" style={{ width: '23.75rem' }}>
                    <div className="card-body">
                        <img alt={product.product_name} src={product.img} style={{}} />
                        <div>
                            <h5 className="card-title">{product.productname}</h5>
                        </div>
                        <div>
                            <p className="card-text text-success fs-3 fw-semibold">${product.product_price}</p>
                        </div>

                        <div className='' style={{ position: '' }}>

                            <button
                                href="#"
                                className="btn bg-secondary-subtle fw-bold btn-lg button"
                            >Sell</button>

                            <input
                                id={product.product_id}
                                type={'text'}
                                className='text-center ms-2 me-2'
                                defaultValue={product.amount}
                                size={4}
                            />

                            <button
                                id={product.product_id}
                                href="#"
                                className="btn btn-success fw-bold btn-lg button"

                                onClick={(e) => {
                                    // if(product.product_id === )
                                    console.log(`click id = ${e.target.id}`)
                                    const click = products.filter(product => product.product_id === e.target.id)
                                    console.log(products.filter(product => product.product_id == e.target.id))
                                    console.log(product.product_id == e.target.id && product.amount + 1)
                                }}
                            // onClick={() => {
                            // setSelectId(product.product_id)
                            // if (selectId === product.product_id) {
                            //     setAmount(amount + 1)
                            //     console.log(product.amount)
                            // }
                            // }}
                            >Buy</button>

                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Article