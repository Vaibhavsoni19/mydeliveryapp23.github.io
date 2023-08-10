import React from "react"
import './AdminStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function AdminSlider(){
    return(
        <div className="bg-white slidebar p-2">
        <div className="m-2">
            <i className="bi bi-bootstrap-fill my-3 fs-4" ></i>
            <span className="brand-name fs-4">My Dilevery</span> 
        </div>
        <hr className="text-dark" />
        <div className="list-group list-group-flush">
            <a className="list-group-item py-2 my-1">
            <i className="bi bi-speedometer2 fs-5 me-2"></i>
            <span className="fs-5">Dashboard</span>
            </a>

            <a className="list-group-item py-2">
            <i className="bi bi-house fs-5 me-3 "></i>
            <span className="fs-5">Customer list</span>
            </a>

            <a className="list-group-item py-2">
            <i className="bi bi-table fs-5 me-3"></i>
            <span className="fs-5">Vehicle list</span>
            </a>

            <a className="list-group-item py-2">
            <i className="bi bi-clipboard-data fs-5 me-3 "></i>
            <span className="fs-5">Vehicle booking</span>
            </a>

            <a className="list-group-item py-2">
            <i className="bi bi-people fs-5 me-3"></i>
            <span className="fs-5">payment</span>
            </a>

            <a className="list-group-item py-2">
            <i className="bi bi-power fs-5 me2 "></i>
            <span className="fs-5">Logout</span>
            </a>
        </div>

        </div>
    )
}
export default AdminSlider