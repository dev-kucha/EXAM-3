import './BranchList.css';
import Branch from '../Branch/Branch';
import React from 'react';

class BranchesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { display: true };
    }

    render(props) {
        return (
            <div className="Branch-list">
                <h3>Branches List</h3>
                {
                    this.props.branches.map(item => <Branch key={item.id} branch={item} setSelectedZoom={this.props.setSelectedZoom} setSelectedCenter={this.props.setSelectedCenter}></Branch>)
                }
            </div>
        )
    }
}

export default BranchesList;