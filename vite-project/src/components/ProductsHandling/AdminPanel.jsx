import { useState } from "react";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";

const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="grid grid-cols-[20%_80%]">
      <div className="border-e-2 border-gray-200 pt-5 flex justify-center h-screen">
        <ul className="menu bg-transparent rounded-box w-56 text-black p-0">
          <li>
            <details>
              <summary>Products</summary>
              <ul>
                <li>
                  <a
                    onClick={() => setActiveComponent("AddProduct")} // Set active component
                    className="cursor-pointer"
                  >
                    Add New Product
                  </a>
                </li>
                <li>
                  <a onClick={() => setActiveComponent("DeleteProduct")} className="cursor-pointer">Delete Product</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>


      <div className="w-full ">
        {activeComponent === "AddProduct" && <AddProduct />} 
        {activeComponent === "DeleteProduct" && <DeleteProduct />}
      </div>
    </div>
  );
};

export default AdminPanel;