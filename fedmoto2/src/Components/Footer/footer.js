import React, { Component } from 'react';
import "./footer.css"
class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="row" >
          <div classs="col-sm-2"></div>
          <div class="col-sm-6" id="footerText1">© FEDERAL MOTO 2019</div>
          <div class="col-sm-4" id="footerText2">Terms of Use</div>
        </div>
      </footer>
    )
  }
}
export default Footer;