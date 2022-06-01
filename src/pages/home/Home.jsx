import Charts from "../../components/charts/chartsProduct";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import {UserData} from "../../DemoData"
import WidgetsSm from "../../components/WidgetsSm/widgetsSm"
import WidgetsLg from "../../components/WidgetsLg/widgetsLg"

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Charts data={UserData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetsSm/>
          <WidgetsLg/>
        </div>
    </div>
  )
}
