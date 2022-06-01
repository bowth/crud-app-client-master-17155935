//import { Link } from "react-router-dom";
import "./sales.css";
import { productData } from "../../DemoData"

import Chart from "../../components/charts/chartsSales";


export default function Sales() {


    return (
        <div className="product">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
        </div>
    );
}
