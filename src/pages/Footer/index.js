import React from 'react'

function Footer() {
  return (
    <>
      <div className='row bg-white mt-2 fw-bolder text-center'>
        <div className='col mt-4'>
          <div>
            <span className='fs-3'>Your Receipt</span>
          </div>
          <div className='mt-4'>

            <div className='position-relative'>
              <div className='position-absolute top-0 start-0 translate-middle'>
                <span className='' style={{ marginLeft: 940 }}>Apache Helicopter</span>
              </div>
              <div className='position-absolute top-0 start-50 translate-middle'>
                <span className="" style={{ fontSize: 18, marginLeft: 90 }}>X1</span>
              </div>
              <div className='position-absolute top-0 start-100 translate-middle'>
                <span className='text-success ' style={{ fontSize: 18, marginLeft: -880 }}>$2.3b</span>
              </div>
            </div><br />
            <div className='position-relative'>
              <div className='position-absolute top-0 start-0 translate-middle'>
                <span className='' style={{ marginLeft: 940 }}>NBA Team</span>
              </div>
              <div className='position-absolute top-0 start-50 translate-middle'>
                <span className="" style={{ fontSize: 18, marginLeft: 90 }}>X1</span>
              </div>
              <div className='position-absolute top-0 start-100 translate-middle'>
                <span className='text-success ' style={{ fontSize: 18, marginLeft: -880 }}>$2.3b</span>
              </div>
            </div><br />
            <div className='position-relative'>
              <div className='position-absolute top-0 start-0 translate-middle'>
                <span className='' style={{ marginLeft: 940 }}>Apache Helicopter</span>
              </div>
              <div className='position-absolute top-0 start-50 translate-middle'>
                <span className="" style={{ fontSize: 18, marginLeft: 90 }}>X1</span>
              </div>
              <div className='position-absolute top-0 start-100 translate-middle'>
                <span className='text-success ' style={{ fontSize: 18, marginLeft: -880 }}>$2.3b</span>
              </div>
            </div><br />
            <div className='position-relative'>
              <div className='position-absolute top-0 start-0 translate-middle'>
                <span className='' style={{ marginLeft: 940 }}>NBA Team</span>
              </div>
              <div className='position-absolute top-0 start-50 translate-middle'>
                <span className="" style={{ fontSize: 18, marginLeft: 90 }}>X1</span>
              </div>
              <div className='position-absolute top-0 start-100 translate-middle'>
                <span className='text-success ' style={{ fontSize: 18, marginLeft: -880 }}>$2.3b</span>
              </div>
            </div><br />

            <div className='border-top border-secondary mb-4' style={{ width: 330, marginLeft: 380, display: 'flex' }}>
              <div style={{ textAlign: 'left' }}>
                <span>TOTAL</span>
              </div>
              <div style={{ textAlign: 'right', width: 300 }}>
                <span className='text-success' style={{ fontSize: 18 }}>$4,047,503,105</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer