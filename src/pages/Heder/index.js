import React from 'react'

const value = 100000000000;
const num = '$' + value.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

function Header() {
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
                    <span>{`${num}`}</span>
                </div>
            </div>
        </>
    )
}

export default Header