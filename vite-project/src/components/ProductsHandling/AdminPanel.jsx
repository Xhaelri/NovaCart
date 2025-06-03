import { useState } from "react";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";
import { motion } from "framer-motion"; // For smooth transitions

const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  console.log("AdminPanel rendering. Active Component:", activeComponent);

  return (
    <div className="flex   min-h-screen">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[250px] bg-white border-r border-gray-200 p-5">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Admin Panel
        </h2>
        <ul className="space-y-2">
          <li>
            <details className="group">
              <summary className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100">
                <span>Products</span>
                <span className="transition-transform group-open:rotate-90">
                  ▶
                </span>
              </summary>
              <ul className="pl-4 space-y-2">
                <li>
                  <button
                    onClick={() => setActiveComponent("AddProduct")}
                    className={`w-full text-left px-3 py-2 rounded-lg ${
                      activeComponent === "AddProduct"
                        ? "bg-[#DB4444] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Add New Product
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveComponent("DeleteProduct")}
                    className={`w-full text-left px-3 py-2 rounded-lg ${
                      activeComponent === "DeleteProduct"
                        ? "bg-[#DB4444] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Delete Product
                  </button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-4/5 p-6 ">
        {activeComponent === "AddProduct" && (
          <motion.div
            key="AddProduct"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <AddProduct />
          </motion.div>
        )}
        {activeComponent === "DeleteProduct" && (
          <motion.div
            key="DeleteProduct"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <DeleteProduct />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
