import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import  AdminSlider  from "./AdminSlider"
import AdminHome from "./AdminHome"
function Admin()
{
  return(
    <div className="container-fluid bg-secondary min-vh-100">
    <div className="row">
   <div className="col-2 bg-white vh-100">
     <AdminSlider/>
    </div>
    <div className="col">
          <AdminHome/>
    </div>
    </div>
     </div>
  )
}
export default Admin