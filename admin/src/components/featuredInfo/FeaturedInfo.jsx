import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./featuredInfo.css"

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,145</span>
                <span className="featuredMoneyRate">
                    -11.4<ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="feauturedSub">Compared to last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,145</span>
                <span className="featuredMoneyRate">
                    -11.4<ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="feauturedSub">Compared to last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,245</span>
                <span className="featuredMoneyRate">
                    +211.4<ArrowUpward className="featuredIcon"/>
                </span>
            </div>
            <span className="feauturedSub">Compared to last Month</span>
        </div>
    </div>
  )
}
