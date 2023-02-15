import React from 'react'

function Loading() {
  return (
    <div>
      Loading
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loading