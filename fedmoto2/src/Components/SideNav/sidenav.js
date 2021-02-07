import React from 'react';
import "./sidenav.css";
import { Link } from 'react-router-dom';


class SideNav extends React.Component {

    render() {
        return (
            <div>
                <div class="col-sm-2">

                    <div>
                        <Link to='/' ><img src="https://images.squarespace-cdn.com/content/539b5adbe4b0dc27b961c927/1568922341756-C62F6BQPUW065CIQ69WN/federallogo.jpg?content-type=image%2Fjpeg" id="fedlogo" class="img-fluid flex-center"></img></Link><br />
                    </div>
                    <ul id="topSideNav">
                        <li class="nav-item">
                            <Link to='bikes' class="nav-link m-2 menu-item">BIKES</Link><br />
                        </li>
                        <li class="nav-item">
                            <Link to='public' class="nav-link m-2 menu-item">BUILD INQUIRY</Link><br />
                        </li>
                        <li class="nav-item">
                            <Link to='private' class="nav-link m-2 menu-item">SERVICE APPOINTMENT</Link><br />
                        </li>
                        <li class="nav-item">
                            <Link to='/' class="nav-link m-2 menu-item">SHOP</Link><br />
                        </li>
                        <li class="nav-item">
                            <Link to='/' class="nav-link m-2 menu-item">EVENTS</Link><br />
                        </li>
                        <li class="nav-item">
                            <Link to='/' class="nav-link m-2 menu-item">CAREERS</Link><br />
                        </li>
                        <li class="nav-item">
                            <Link to='/' class="nav-link m-2 menu-item">SIGN IN</Link><br />
                        </li>

                        {/* <Link to='bikes'>Bikes</Link><br /> */}
                        {/* <Link to='public'>Public</Link><br /> */}
                        {/* <Link to='private'>HI</Link><br /> */}
                    </ul>

                </div>









            </div>




        );
    }
}
export default SideNav;