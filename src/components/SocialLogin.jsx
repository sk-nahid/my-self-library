import React from 'react'

export default function SocialLogin() {
    const handleGoogleLogin = () => {
        console.log('clicked on btn')
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn text-black btn-primary '>
                Login with google
            </button>
        </div>
    )
}
