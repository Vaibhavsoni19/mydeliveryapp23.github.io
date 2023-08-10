import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return <div>
             <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(6, 3, 21, .5)' }}>
             <div className="container">
             <div className="row justify-content-start">
            <div className="col-10 col-lg-8">
             <h5 className="text-white text-uppercase mb-3 animated slideInDown">Transport & MyDeliverys Solution</h5>
            <h1 className="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span className="text-primary">MyDeliverys</span> Solution</h1>
            <p className="fs-5 fw-medium text-white mb-4 pb-2">Big or small...We can handle it all .</p>
             {/* <Link to="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</Link>
              <Link to="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</Link> */}
               </div>
             </div>
           </div>
       </div>
    </div>
                                
    }

}