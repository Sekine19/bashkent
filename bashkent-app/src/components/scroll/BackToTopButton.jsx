import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const BackToTopButton = () => {

    const [BackToTopButton, setBackToTopButton] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, []);

    const scroollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='app-scroll'>
            {
                BackToTopButton && (
                    <button
                        style={{
                            backgroundColor: '#ca3d26',
                            border: 'none',
                            color: '#ffff',
                            position: 'fixed',
                            bottom: '40px',
                            right: '40px',
                            height: '40px',
                            width: '40px',
                            fontSize: '40px',
                        }}
                        onClick={scroollUp}
                    >
                        <i className="fa-solid fa-chevron-up"></i>
                    </button>
                )
            }
        </div>
    )
}


