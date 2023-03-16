import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {
  const product = useSelector((state) => state.products.items)
  const currentMoney = useSelector((state) => state.products.currentMoney)
  const money = useSelector((state) => state.products.money)

  let totalMoney = money - currentMoney

  return (
    <>
      {totalMoney !== 0 &&
        <div className='row bg-white mt-2 fw-bolder text-center'>
          <div className='col mt-4'>
            <div>
              <span className='fs-3'>Your Receipt</span>
            </div>
          </div>
          <div className='mt-4'>
            {product.map((item) => item.amount > 0 &&
              <div key={item.product_id}>

                <div className='position-relative'>
                  <div className='position-absolute top-0 start-0 translate-middle'>
                    <span className='' style={{ marginLeft: 940 }}>{item.product_name}</span>
                  </div>
                  <div className='position-absolute top-0 start-50 translate-middle'>
                    <span className="" style={{ fontSize: 18, marginLeft: 90 }}>X{item.amount}</span>
                  </div>
                  <div className='position-absolute top-0 start-100 translate-middle'>
                    <span className='text-success ' style={{ fontSize: 18, marginLeft: -880 }}>
                      ${new Intl.NumberFormat("en-GB", {
                        notation: "compact",
                        compactDisplay: "short",
                      }).format(item.product_price * item.amount)}
                    </span>
                  </div>
                </div><br />

              </div>
            )}
            <div className='border-top border-secondary mb-4' style={{ width: 330, marginLeft: 380, display: 'flex' }}>
              <div style={{ textAlign: 'left' }}>
                <span>TOTAL</span>
              </div>
              <div style={{ textAlign: 'right', width: 300 }}>
                <span className='text-success' style={{ fontSize: 18 }}>
                  ${(totalMoney).toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </span>
              </div>
            </div>
          </div>

        </div>
      }

    </>
  )
}

export default Footer