import './home.css';
import {userData} from '../../data';
import Chart from '../../components/chart/Chart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import FeacturedInfo from '../../components/featuredinfo/FeaturedInfo';

const Home = () => {
    return (
        <div className='home'>
            <FeacturedInfo/>
            <Chart data={userData} title='User Analytics' dataKey='Active User' grid />
            <div className='homeWidgets'>
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
};

export default Home;
