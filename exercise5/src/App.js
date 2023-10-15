import './App.css';
import { Component } from 'react'

class Title extends Component {
  render() {
    return (
      <div className='Title'>
        <h1>โหวตอาหาร</h1>
        </div>
    )
  }
}

class VoteButton extends Component{
  onTrigger = () =>{
    this.props.parentCallback(1);
  }

  changeColourWhenMouseON(event){
    event.target.style.background = 'Gainsboro';
  }
  changeColourWhenMouseLeave(event){
    event.target.style.background = 'white';
  }

  render(){
    return(<button className="button" type="button" onClick={this.onTrigger} onMouseOver={this.changeColourWhenMouseON} onMouseLeave={this.changeColourWhenMouseLeave}>Click to Vote</button>)
  }
}

class UnvoteButton extends Component{
  onTrigger = () =>{
    this.props.parentCallback(-1);
  }

  changeColourWhenMouseON(event){
    event.target.style.background = 'Gainsboro';
  }
  changeColourWhenMouseLeave(event){
    event.target.style.background = 'white';
  }

  render(){
    return(<button className="button" type="button" onClick={this.onTrigger} onMouseOver={this.changeColourWhenMouseON} onMouseLeave={this.changeColourWhenMouseLeave} >Click to Unvote</button>)
  }
}

class Card extends Component{
  display = 'MIN';
  state = {
    count :0,
  }

  updateDisplay(){
    if(this.state.count===0){
      this.display = 'MIN'
    }
    else if(this.state.count===10){
      this.display = 'MAX'
    }
    else{
      this.display = this.state.count.toString()
    }
  }

  foodVotingCallback(data){
    if(this.state.count >=0 && this.state.count <= 9  ){
      this.setState({count: this.state.count+=data})
    }

    else if(this.state.count <= 10){
      alert('Cannot Vote more')
    }

    this.updateDisplay()
  }
  foodUnvotingCallback(data){
    if(this.state.count >=1 && this.state.count <= 10  ){
      this.setState({count: this.state.count+=data})
    }

    else if(this.state.count >= 0){
      alert('Cannot unvote')
    }

    this.updateDisplay()
  }

  render(){
  return(
    <div>
      <div class="rectangle"> 
        <h1>{this.props.category}</h1>
        <img src= {this.props.img} alt="" class="pic"></img>
        <h2>{this.props.name}</h2>
        <div class= "content">
        <p>{this.props.content}</p>
        <div className="buttonZone">
            <VoteButton parentCallback = {this.foodVotingCallback.bind(this)}/>
            <div class="vote"><h2>{this.display}</h2></div>
            <UnvoteButton parentCallback = {this.foodUnvotingCallback.bind(this)}/>
        </div>
        </div>
      </div>
    </div>
  );
  }
}

class App extends Component {
  render() {
    return (
      <div>
      <Title/>
      <Card category="อาหารคาว" name="ข้าวผัด" img ="https://www.ajinomoto.co.th//storage/photos/shares/our-story/tips/friedrice/62ff47ff5a301.jpg"
          content='
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />
      <Card category="อาหารหวาน" name="บัวลอย" img ="https://img.kapook.com/u/2017/wanwanat/93_bualoy/loy4_1.jpg"
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        />
      </div>
    )
  }
}

export default App;