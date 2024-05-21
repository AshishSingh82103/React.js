import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Custum App! </h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "singhashish82103@gmail.com";
const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: '_blank'},
  'Click me to visit google',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
    // <App/>
    

  
)
