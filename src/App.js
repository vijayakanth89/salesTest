import React, { Component } from 'react';
import './App.css';
import Slide from './Slide.js';
import ContactUs from './ContactUs.js'

const images = [{'src' : '/img1.jpeg'},
{'src' : '/img2.jpeg'},
{'src' : '/img3.jpeg'},
{'src' : '/img4.jpeg'},
{'src' : '/img5.jpeg'},
{'src' : '/img6.jpeg'},
{'src' : '/img7.jpeg'}];

class App extends Component {
  constructor(props) 
  {
    super(props);
    this.state = {
      activeSlide : 0 , 
      showContactUs: false
    }
    this.currentSlide = this.currentSlide.bind(this);
  }
  
  currentSlide(id)
  {

    if( id >= images.length){
      id = 0 ; 
    } else if ( id < 0) {
      id = images.length-1;
    }
    this.setState((prevState)=> ({activeSlide: id}));
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1>
          <span style={{color: "green", textShadow: "-2px -1px 10px green"}}>Gypwell</span><span style={{color: "black", textShadow: "-2px -1px 10px black"}}>Decor</span>
          </h1>
          <div className="links">
            <a href="#about-us">About Us</a>
            <a href="#contact-us" onClick={function(){ 
              this.setState(({showContactUs})=>{
                showContactUs = showContactUs ? false : true; 
                return {showContactUs};
              })
            }.bind(this)}>Contact Us</a>
            <a href="#worksites">Our Work Sites</a>
          </div>

        </header>
        
        <div id="about-us" className="about-us content">
          <h3>About Us</h3>
          <p>We at <span style={{fontStyle: "italic", fontWeight: "bold"}}>Gypwell Decors</span> focus more on quality of work delivered, though we are less in number</p> 
          <p>Our employees strive to deliver the best at a minimum cost to the customers </p>
          <p>This makes a unique stand for us among our competitors</p>
        </div>



        <div id="worksites" className="content worksites">
          <h3>Work Sites</h3>
          <p>Here is a few worksites we have completed as of now</p>

        </div>

        <div className="content" >

          <a className="prev" onClick={function(){this.currentSlide(this.state.activeSlide -1)}.bind(this)}>&#10094;</a>
          <a className="next" onClick={function(){this.currentSlide(this.state.activeSlide +1)}.bind(this)}>&#10095;</a>

        </div>



        <div id="slides" className="content slideshow-container">
          {
            images.map(function(item, i){
              return <Slide key={'slide_'+i} total={images.length} src={item.src} index={i} active={i === this.state.activeSlide}/>;
            }.bind(this))
  
          }

        </div>
        
        <div style={{display: "none" , "textAlign":"center"}}>
          {
            images.map(function(item,index){
              return <span key={'dot '+index} className={"dot" } onClick={function(){
                console.log('here.....')
                this.currentSlide(index)
              }.bind(this) }></span> 
            }.bind(this))
          }
        </div>

        <ContactUs pressOk={function(){
          this.setState((prevState)=> ({showContactUs : false}) );
        }.bind(this)}
        
        show={this.state.showContactUs}/>

    </div>
    );
  }

}

export default App;
