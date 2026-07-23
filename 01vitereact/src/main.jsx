import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}
const anotherUser = "chai aur react"
const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target: '_blank' },
    'Click me to visit google',
    anotherUser
)
createRoot(document.getElementById('root')).render(
    // <MyApp />
    reactElement
)
