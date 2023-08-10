import React from "react";
import { Link } from "react-router-dom";
export default class Service extends React.Component
{
    render()
    {
        return <div>
            <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-secondary text-uppercase">Our Services</h6>
                <h1 className="mb-5">Explore Our Services</h1>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/service-1.jpg" alt=""/>
                        </div>
                        <h4 className="mb-3">Air Freight</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <Link className="btn-slide mt-2" to=""><i className="fa fa-arrow-right"></i><span>Read More</span></Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/service-2.jpg" alt=""/>
                        </div>
                        <h4 className="mb-3">Ocean Freight</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <Link className="btn-slide mt-2" to=""><i className="fa fa-arrow-right"></i><span>Read More</span></Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/service-3.jpg" alt=""/>
                        </div>
                        <h4 className="mb-3">Road Freight</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <Link className="btn-slide mt-2" to=""><i className="fa fa-arrow-right"></i><span>Read More</span></Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/service-4.jpg" alt=""/>
                        </div>
                        <h4 className="mb-3">Train Freight</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <Link className="btn-slide mt-2" to=""><i className="fa fa-arrow-right"></i><span>Read More</span></Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/service-5.jpg" alt=""/>
                        </div>
                        <h4 className="mb-3">Customs Clearance</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <Link className="btn-slide mt-2" to=""><i className="fa fa-arrow-right"></i><span>Read More</span></Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/service-6.jpg" alt=""/>
                        </div>
                        <h4 className="mb-3">Warehouse Solutions</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <Link className="btn-slide mt-2" to=""><i className="fa fa-arrow-right"></i><span>Read More</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    }
}