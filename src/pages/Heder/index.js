import React from 'react'
import { useSelector } from 'react-redux'

// const value = 100000000000;

function Header() {
    const value = useSelector((state) => state.products.totalMoney)
    const totalMoney = '$' + value.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

    return (
        <>
            <div className='row bg-white'>
                <div className="col text-center">
                    <div style={{ height: 240, marginTop: 40 }}>
                        <img
                            src={'https://neal.fun/spend/billgates.jpg'} alt='billgates'
                            className='rounded-circle'
                            style={{ width: '130px' }}
                        />
                        <h2 className='mt-4'>
                            Spend Bill Gates' Money
                        </h2>
                    </div>
                </div>
            </div>
            <div className='row mt-2 bg-success sticky-top'>
                <div
                    className='col bg-success text-light text-center pt-2'
                    style={{ height: 90, fontSize: 50 }}
                >
                    <span>{`${totalMoney}`}</span>
                </div>
            </div>
        </>
    )
}

export default Header