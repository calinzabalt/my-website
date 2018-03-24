import React, { Component } from 'react'
import { Grid, Row, Col, Image, } from 'react-bootstrap';
import './Work.css';

export default class Work extends Component {
    render() {
        return (

<div className="container">            
<div className="box">
    <h2>WORK</h2>
    <p>
	Besides web developement i have more skills . One of these are 3D designing and another one is animation maker</p>

</div>

<Grid>
  <Row>
      
    <Col xs={12} md={4}>
    <div className="padding">
      <Image src="assets/remastered zabalt.jpg" thumbnail />
      </div>
    </Col>
             
    <Col xs={12} md={4}>
    <div className="padding">
      <Image src="assets/0071.jpg" thumbnail />
      </div>
    </Col>
       
    <Col xs={12} md={4}>
    <div className="padding">
      <Image src="assets/calin tree.png" thumbnail />
      </div>
    </Col>
       
     <Col xs={12} md={4}>
    <div className="padding">
      <Image src="assets/grass.jpg" thumbnail />
      </div>
    </Col>
   
    <Col xs={12} md={4}>
    <div className="padding">
      <Image src="assets/planeta.jpg" thumbnail />
      </div>
    </Col>

    <Col xs={12} md={4}>
    <div className="padding">
      <Image src="assets/background.png" thumbnail />
      </div>
    </Col>

    <Col xs={12} md={4}>
    <div className="padding">
      <Image src="assets/zabalt snow.jpg" thumbnail />
      </div>
    </Col>

    <Col xs={12} md={4}>
    <div className="padding">
      <Image src="assets/mastercalin.png" thumbnail />
      </div>
    </Col>

     <Col xs={12} md={4}>
    <div className="padding">
      <Image src="assets/0073.png" thumbnail />
      </div>
    </Col>

  </Row>
</Grid>

<div className="container-fluid">
  <div className="align">
  <div className="row">
          <div className="col-sm-6 center">
          <div className="video-padding">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe title="videos" src="https://www.youtube.com/embed/XZppMeWxCuk" frameBorder="0" allowFullScreen ></iframe>
            </div>
            </div>
          </div>

          <div className="col-sm-6 center">
          <div className="video-padding">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe title="videos" src="https://www.youtube.com/embed/1qNz8LDjG_I" frameborder="0" allowfullscreen></iframe>
            </div>
            </div>
          </div>

          <div className="col-sm-6 center">
          <div className="video-padding">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe title="videos" src="https://www.youtube.com/embed/srrh_u1nMG0" frameborder="0" allowfullscreen></iframe>
            </div>
            </div>
          </div>

          <div className="col-sm-6 center">
          <div className="video-padding">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe title="videos" src="https://www.youtube.com/embed/olyZHJrjrh8" frameborder="0" allowfullscreen></iframe>
            </div>
            </div>
          </div>

  </div>
  </div>
  </div>



</div>            




        );
    }
}