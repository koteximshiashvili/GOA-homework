let div = React.createElement("div")
document.body.append(div)
function App() {
    return React.createElement('div', null,
      React.createElement('h1', null, 'My Website'),
      React.createElement('p', null, 'Welcome to my site!'),
      React.createElement('ul', null,
        React.createElement('li', null, 'Home'),
        React.createElement('li', null, 'About'),
        React.createElement('li', null, 'Contact')
      )
    );
    return(
        <div>
            <h1>My Website</h1>
            <p>Welcome to my site!</p>
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
        </div>
    )
  }
ReactDOM.createRoot(div).render(
    App()
)