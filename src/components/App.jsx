const { Component } = require('react');

class App extends Component {
  state = {
    items: [],
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
    );
  }
}

export default App;
