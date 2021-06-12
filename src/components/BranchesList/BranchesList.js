import './BranchList.css';
//import normaliseBranches from '../Data/NormaliseData';
import Branch from '../Branch/Branch';
import React from 'react';

/* for (let i = 0; i <= normaliseBranches.branches.length; i++) {
    <Branch key={normaliseBranches.branches[i].id} branch={normaliseBranches.branches[i]}></Branch>
} */

class BranchesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { display: true };
        /* console.log(props); */
    }
    render() {
        return (
            <div className="Branch-list">
                <h3>Branches List</h3>
                {
                    this.props.branches.map(item => <Branch key={item.id} branch={item} ></Branch>)
                }

                {/*  <Branch branch={this.props.branches[0]} />
                <Branch branch={this.props.branches[1]} />
                <Branch branch={this.props.branches[2]} />
                <Branch branch={this.props.branches[3]} /> */}

            </div>
        )
    }
}

export default BranchesList;