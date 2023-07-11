import React from 'react'

export default function LongIn() {
    return (
      <div>
        <div className='logIn-container'>
          <h2>Log In</h2>
          <div className="data">
            <input
              type="email"
              placeholder="Enter your Email"
              required
            />
            <input
              type="pasword"
              placeholder="Enter your Password"
              required
            />
          </div>
          <button type='submit'>Log In</button>
        </div>
      </div>
    );
}

