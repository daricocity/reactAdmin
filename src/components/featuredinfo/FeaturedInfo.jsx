import './featuredInfo.css';
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward';

const FeacturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,309</span>
                    <span className="featuredMoneyRate">
                        -11.4<ArrowDownward className='featuredIcon negative'/> 
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,451</span>
                    <span className="featuredMoneyRate">-31.4 <ArrowDownward className='featuredIcon negative'/> </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$200</span>
                    <span className="featuredMoneyRate"> +12<ArrowUpward className='featuredIcon'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
};

export default FeacturedInfo;