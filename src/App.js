import React from 'react';


class Header extends React.Component{
  render(){
    return(
      <h1>Hello, {this.props.firstName}!</h1>
    )
  }
}

class App extends React.Component {
   render() {
      return (
         <div>
            <Header firstName="Anthea" />
         </div>
      );
   }
}

export default App;