import './App.css';
import { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <div class='header-member'>
        <h1>Group's Members</h1>
      </div>
    )
  }
}

class Blogs extends Component{
  render(){
    return(
      <div class='nameblog'>
        <h1>{this.props.name}</h1>
        <h2>{this.props.studentID}</h2>
        <img src={this.props.img} class='pic'></img>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Blogs name='ชิษณุพงศ์ บุญมา' studentID='64015031' img='https://cdn-icons-png.flaticon.com/512/236/236832.png'/>
      </div>
    )
  }
}

export default Main;
