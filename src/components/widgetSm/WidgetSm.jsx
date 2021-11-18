import './widgetSm.css';
import Visibility from '@material-ui/icons/Visibility';

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="img/client2.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Roy Keane</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton"><Visibility className='widgetSmIcon'/> Display</button>
                </li>
                <li className="widgetSmListItem">
                    <img src="img/client5.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Joy Bean</span>
                        <span className="widgetSmUserTitle">Hardware Engineer</span>
                    </div>
                    <button className="widgetSmButton"><Visibility className='widgetSmIcon'/> Display</button>
                </li>
            </ul>
        </div>
    )
};

export default WidgetSm;
