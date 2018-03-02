import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: [
        {id: 0, name: "Home", color: "red", col: "white"},
        {id: 1, name: "About", color: "red", col: "white"},
        {id: 2, name: "Contact", color: "red", col: "white"}
      ],
      : [
        {id: 0, name: "first", price: 195, color: "red", col: "white"},
        {id: 1, name: "second", price: 250, color: "red", col: "white"},
        {id: 2, name: "third", price: 380, color: "red", col: "white"},
      ],
      total: 0.0,
    }
  }

  handleClick = (idx) =>{
    var arr = this.state.items;

    arr.map(i => {
      if(i.id === id){
        i.color = "blue";
        i.col = "red";
      }else{
        i.color = "red";
        i.col = "white";
      }
    })

    this.setState({
      items: arr
    })
  }

  handleClick2 = (idx) =>{
    var mapping = this.state.second;
    var total_price = this.state.total;
    mapping.map(i => {
      if(i.id === id){
        if(i.color === "blue"){
          total_price -= i.price;
          i.color = "red";
          i.col = "white";
        }else{
          total_price += i.price;
          i.color = "blue";
          i.col = "red";
        }
      }
    })

    this.setState({
      second: mapping,
      total: total_price
    })
  }

  render() {
    return (
      <div className="main">
        <div className = "App">
          {this.state.items.map(i => {
            return (<Button key={i.id} button={i} 
              onButtonClick={this.handleClick}/>)
          })}
        </div>
        <br/>
        <div className = "box">
          <h3>Products</h3>
          <div className="box">
            {this.state.second.map(s => {
              return(<list key={s.id} list={s} onButtonClick={this.handleClick2} />)
            })}
          </div>
          <div class="center">Total: {this.state.total}tg</div>
          </div>
      </div>
    );
  }
}

class list extends Component {

  handleClick = () => {
    this.props.onButtonClick(this.props.list.id)
  }

  render(){
    return(
      <div className="list" style={{backgroundColor: this.props.list.color,
        color: this.props.list.col}} onClick={this.handleClick}>
        <p>{this.props.list.name} {this.props.list.price}tg</p>
      </div>
    )
  }
}

class Button extends Component {

  handleClick = () => {
    this.props.onButtonClick(this.props.button.id)
  }

  render(){
    return(
      <div style={{backgroundColor: this.props.button.color,
        color: this.props.button.col}} 
        className="button" onClick={this.handleClick}>
          {this.props.button.name}
      </div>
    )
  }
}

export default App;
