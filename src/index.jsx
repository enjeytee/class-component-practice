import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'

/*
Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug
*/

// #1
// function App() {
//     return (
//         <div>
//             <Header />
//             <Greeting />
//         </div>
//     )
// }
class App extends React.Component {
    render() {
        return (
            <div>
                <Header username="John"/>
                <Greeting />
            </div>
        )
    }
}

// #2
// function Header(props) {
//     return (
//         <header>
//             <p>Welcome, {props.username}!</p>
//         </header>
//     )
// }
class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}</p>
            </header>
        )
    }
}


// #3
// Hint: any "display logic" can be placed inside the `render`
// method before the `return` statement
// function Greeting() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
    
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//     return (
//         <h1>Good {timeOfDay} to you, sir or madam!</h1>
//     )
// }
class Greeting extends React.Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)