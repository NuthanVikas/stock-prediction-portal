import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>The Stock Prediction Portal is a platform that leverages historical stock data and machine learning models to predict future stock prices or trends. It provides users with interactive charts, real-time updates, and tools for analyzing market performance. Designed for traders and investors, it helps make data-driven decisions in the stock market.</p>
                <Button text="Login" class="btn-outline-info"/>
            </div>
        </div>
    </>
  )
}

export default Main
