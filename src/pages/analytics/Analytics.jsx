//import { Link } from "react-router-dom";
import "./analytics.css";
import { productData } from "../../DemoData"

import Chart from "../../components/charts/chartsAnalytics"

import { Publish } from "@material-ui/icons";

export default function Analytics() {


    return (
        <div className="product">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
        </div>
    );
}
