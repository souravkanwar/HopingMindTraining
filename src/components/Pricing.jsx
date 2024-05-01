import React from 'react'

function Pricing() {
  return (
    <div className='pricing'>
    <div className='pricing_outer'>
        <h1>PRICING</h1>
        <p>Choose a pricing plan that fits your needs.</p>
    </div>
    <div className='pricing_inner'>
        <ul>
            <li>Basic</li>
            <li>100GB Storage</li>
            <li>10 Emails</li>
            <li>10 Domains</li>
            <li>Per Month</li>
            <li><button>Sign Up</button></li>
        </ul>
        <ul>
            <li>Pro</li>
            <li>100GB Storage</li>
            <li>10 Emails</li>
            <li>10 Domains</li>
            <li>Per Month</li>
            <li><button>Sign Up</button></li>
        </ul>
        <ul>
            <li>Premium</li>
            <li>100GB Storage</li>
            <li>10 Emails</li>
            <li>10 Domains</li>
            <li>Per Month</li>
            <li><button>Sign Up</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Pricing
