import { Link, Route, Routes } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa6";

export default function AdminPage(){
    return(
        <div className="w-full h-screen bg-gray-200 flex p-2" >
            <div className="h-full w-[300px] ">

                
                <Link to="/admin/users" className=" p-2 border flex items-center"><FaUser className="mr-2" />Users</Link>
                <Link to="/admin/products" className="block p-2  flex items-center"><FaWarehouse className="mr-2"/>products</Link>
                <Link to="/admin/orders" className="block p-2  flex items-center"><FaFileInvoice className="mr-2" />Orders</Link>
              
                

            </div>
            <div className="h-full bg-white w-[calc(100vw-300px)] rounded-lg">

                <Routes path="/*">

                    <Route path="/users" element={<h1>Users</h1>}/>
                    <Route path="/products" element={<h1>products</h1>}/>
                    <Route path="/orders" element={<h1>orders</h1>}/>
                    <Route path="/items" element={<h1>orders</h1>}/>
                   

                </Routes>

            

            </div>

        </div>
       

    );

}