import "./FeaturedInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainter">
                <span className="featuredMoney">$2000</span>
                <span className="featuredMoneyRATE">
                    -15.00 <ArrowDownward className="featuredIcon negative" />
                </span>
            </div>
            <span className="featuredSub">Compared To Last Month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainter">
                <span className="featuredMoney">$5000</span>
                <span className="featuredMoneyRATE">
                    -15.00 <ArrowDownward className="featuredIcon negative" />
                </span>
            </div>
            <span className="featuredSub">Compared To Last Month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainter">
                <span className="featuredMoney">$10000</span>
                <span className="featuredMoneyRATE">
                    +9.6 <ArrowUpward className="featuredIcon" />
                </span>
            </div>
            <span className="featuredSub">Compared To Last Month</span>
        </div>
    </div>
  )
}
