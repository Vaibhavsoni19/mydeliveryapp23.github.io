import React from "react"
import AdminNav from "./AdminNav"
function AdminHome() {
    return (
        <div className="px-3">
            <AdminNav  />
            <div className="container-fluid">
                <div className="row g-3 my-2">
                    <div className="col-md-3 p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">8</h3>
                                <p className="fs-5">Customer list</p>
                            </div>
                            <i className="bi bi-cart-plus p-3 fs-1"></i>
                        </div>
                    </div>

                    <div className="col-md-3 p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">10</h3>
                                <p className="fs-5">Vehicle list</p>
                            </div>
                            <i className="bi bi-cart-plus p-3 fs-1"></i>
                        </div>
                    </div>

                    <div className="col-md-3 p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">20</h3>
                                <p className="fs-5">vehicle booking</p>
                            </div>
                            <i className="bi bicurrency-dollar p-3 fs-1"></i>
                        </div>
                    </div>

                    <div className="col-md-3 p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">20</h3>
                                <p className="fs-5">payment</p>
                            </div>
                            <i className="bi bi-graph-up-arrow p-3 fs-1"></i>
                        </div>
                    </div>
                </div>
            </div>

            <table class="table caption-top bg-white rounded mt-2">
              <caption className="text-white fs-4">Customer List</caption>
                <thead>
                    
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone No.</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">UserId</th>
                        <th scope="col">Status</th>

                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th scope="row">1</th>
                        <td>Neeraj</td>
                        <td>9765684525</td>
                        <td>neeraj@45gmail.com</td>
                        <td>N1458689</td>
                        <td>booking</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>ajay</td>
                        <td>8895684525</td>
                        <td>ajay@45gmail.com</td>
                        <td>N145689</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                        <td>Vijay</td>
                        <td>7455684525</td>
                        <td>vijay@789gmail.com</td>
                        <td>N45698689</td>
                        <td>Complete</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                        <td>raja</td>
                        <td>7895484525</td>
                        <td>raja@1256gmail.com</td>
                        <td>N1589289</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                        <td>rajesh</td>
                        <td>7895684525</td>
                        <td>rajesh@759gmail.com</td>
                        <td>N1236689</td>
                        <td>booking</td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                        <td>Shivam</td>
                        <td>7895684525</td>
                        <td>shivam@42645gmail.com</td>
                        <td>N489689</td>
                        <td>Complete</td>
                    </tr>
                    <tr>
                    <th scope="row">7</th>
                        <td>ram</td>
                        <td>78995684525</td>
                        <td>ram@gmail.com</td>
                        <td>N1455995</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                    <th scope="row">8</th>
                        <td>abhisek</td>
                        <td>5964684525</td>
                        <td>abhisek@45gmail.com</td>
                        <td>N18545689</td>
                        <td>Complete</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AdminHome