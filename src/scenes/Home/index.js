import React, { Component } from 'react';

export default class Home extends Component {
  state = {
    ja: true,
  };

  render() {
    console.log('Home: ', this);
    return (
      <button onClick={() => this.setState({ ja: !this.state.ja })}>{this.state.ja ? 'Ja' : 'Nee'}</button>
    );
  }
}

// const Home = () => ([
//   <div>Home</div>,
//   <span>pindakaas</span>
// ]);

// export default Home;
