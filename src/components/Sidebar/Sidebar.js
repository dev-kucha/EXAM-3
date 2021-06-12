import './Sidebar.css';
import BranchesList from '../BranchesList/BranchesList';

function Sidebar(props) {
    return (
        <div className="App-sidebar">
            {/* <h2>Branches</h2> */}
            <BranchesList branches={props.branches} />
        </div>
    );
}

export default Sidebar;