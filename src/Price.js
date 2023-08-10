import React from "react";
import { Link } from "react-router-dom";
export default class Price extends React.Component
{
    render()
    {
        return <div>
            <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-secondary text-uppercase">Pricing Plan</h6>
                <h1 className="mb-5">Perfect Pricing Plan</h1>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="price-item">
                        <div className="border-bottom p-4 mb-4">
                            <h5 className="text-primary mb-1">Basic Plan</h5>
                            <h1 className="display-5 mb-0">
                                <small className="align-top" style={{fontSize: '22px', lineHeight: '45px'}}>₹</small>49.00<small
                                    className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/ Km</small>
                            </h1>
                        </div>
                        <div className="p-4 pt-0">
                        <p><i className="fa fa-check text-success me-3"></i>Auto/600 kg</p>
                            <p><i className="fa fa-check text-success me-3"></i>Tata Intra/500 Kg</p>
                            <p><i className="fa fa-check text-success me-3"></i>Ace Mega/400 Kg</p>
                            <p><i className="fa fa-check text-success me-3"></i>Yodha Pickua/300 Kg</p>
                            <p><i className="fa fa-check text-success me-3"></i>Ultra/100 Kg</p>
                            
                            <Link className="btn-slide mt-2" to=""><i className="fa fa-arrow-right"></i><span >Order Now</span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="price-item">
                        <div className="border-bottom p-4 mb-4">
                            <h5 className="text-primary mb-1">Standard Plan</h5>
                            <h1 className="display-5 mb-0">
                                <small className="align-top" style={{fontSize: '22px', lineHeight: '45px'}}>₹</small>99.00<small
                                    className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/ Km</small>
                            </h1>
                        </div>
                        <div className="p-4 pt-0">
                            <p><i className="fa fa-check text-success me-3"></i>Cargo/1000 kg</p>
                            <p><i className="fa fa-check text-success me-3"></i>Light Truck/900 kg</p>
                            <p><i className="fa fa-check text-success me-3"></i>Icv Truck/800 kg</p>
                            <p><i className="fa fa-check text-success me-3"></i>Construck/700 kg</p>
                            <p><i className="fa fa-check text-success me-3"></i>Prima/600 kg</p>
                            <Link className="btn-slide mt-2" to=""><i className="fa fa-arrow-right"></i><span >Order Now</span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="price-item">
                        <div className="border-bottom p-4 mb-4">
                            <h5 className="text-primary mb-1">Advanced Plan</h5>
                            <h1 className="display-5 mb-0">
                                <small className="align-top" style={{fontSize: '22px', lineHeight: '45px'}}>₹</small>149.00<small
                                    className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/ Km</small>
                            </h1>
                        </div>
                        <div className="p-4 pt-0">
                        <p><i className="fa fa-check text-success me-3"></i>CONTAINER 32 FT SXL / MXL HQ</p>
                            <p><i className="fa fa-check text-success me-3"></i>20 FEET OPEN ALL SIDE (ODC)</p>
                            <p><i className="fa fa-check text-success me-3"></i>28 FEET OPEN-TRAILOR JCB ODC</p>
                            <p><i className="fa fa-check text-success me-3"></i>2 FEET OPEN-TRAILOR ODC</p>
                            <p><i className="fa fa-check text-success me-3"></i>40 FEET OPEN-TRAILOR ODC/</p>
                            <Link className="btn-slide mt-2" to=""><i className="fa fa-arrow-right"></i><span >Order Now</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    }
}