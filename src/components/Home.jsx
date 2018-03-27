import React, { Component } from 'react'
import { Col, Image } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (

<div className="container">
    <div className="intro">
        <div className="overlay">
            <h1>I'm Călin</h1>
            <h3>a web developer</h3>
    </div>
    </div>
 

<div className="Fuck">
              
<div className="container">
  <div className="row-2">
    <div className="col-sm-12">
    <Col className="person-wrapper">
        <Image src="assets/resize.jpg" circle className="profile-pic"/>
    <h2>Web designer & Web developer</h2>
        <p>My name is Cozma Viorel Călin, I’m a web developer from Romania. I have a passion for web development and I love to create websites from scratch.
        </p>
        </Col>
    </div>
    </div>


<div className="row-3">
    <div className="col-sm-6">
    <h2> Design what you want</h2>
        <p>My goals are to focus on aspect , content, website speed ...
            I know how to create your website to run across devices using
            the latest technologies available.
        </p>
        </div>
    
</div>

    <div className="row-4">
        <div className="col-sm-6">
    <h2>How I do the work</h2>
        <p>I use programming languages like HTML 5, CSS 3 and JAVASCRIPT.</p>
    </div>
    
</div>

  </div>
</div>

</div>  
   
        );
    }
}