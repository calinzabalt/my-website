import React, { Component } from 'react'
import './Contact.css';


export default class Contact extends Component {
    render() {
        return (
        
<div className="container contact">

    <div className="box-2">
    <h2>I’m currently available for freelance work.</h2>
      <p>If you have a project that you want to get started, or if you want my help to accomplish something you can contact my on this platforms:</p>
      <a href="https://web.facebook.com/calinviorel.cozma" target="blank" className="fa fa-facebook"></a>
      <a href="https://www.linkedin.com/in/cozma-viorel-calin-947658145/" target="blank" className="fa fa-linkedin"></a>
      <a href="https://www.youtube.com/channel/UCQ2N3yvA9bq0ZgXEK2m8pwA?view_as=subscriber" target="blank" className="fa fa-youtube"></a>
      <a href="https://plus.google.com/u/0/112508366335698318230" target="blank" className="fa fa-google"></a>
</div>
<form method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
</div>





        );
    }
}