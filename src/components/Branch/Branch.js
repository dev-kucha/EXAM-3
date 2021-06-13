import './Branch.css';
import React from 'react';

class Branch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            branchTitle: this.props.branch.title,
            branchDescription: ''
        };
    }

    onDescriptionDisplay = () => {
        let currentBranchDescription = this.state.branchDescription;
        currentBranchDescription = this.props.branch.title;
        this.setState({
            branchDescription: currentBranchDescription
        });
        this.props.setSelectedZoom(14);
        this.props.setSelectedCenter({
            lat: Number(this.props.branch.geocoords.split('|')[0]),
            lng: Number(this.props.branch.geocoords.split('|')[1]),
        })
    }

    offDescriptionDisplay = () => {
        this.setState({
            branchDescription: ''
        });
        this.props.setSelectedZoom(false);
        this.props.setSelectedCenter(false)
    }

    render() {
        const titleBreakPos1 = this.props.branch.title.indexOf('<br>');
        let titleName = this.props.branch.title.slice(0, titleBreakPos1);

        return (
            <div className="Branch-block" >
                {/* <p className="Branch-id">{this.props.branch.id}</p> */}
                <h3 className="Branch-title" >{titleName}</h3>
                {/* <p>{this.props.branch.title}</p> */}
                {this.state.branchDescription ? null : (<p className="BranchShowDetails" onClick={this.onDescriptionDisplay}>Детальніше...</p>)}
                <p className="Branch-description" dangerouslySetInnerHTML={{ __html: this.state.branchDescription }}></p>
                {this.state.branchDescription ? (
                    <>
                        <p className="Branch-geo">lat: {this.props.branch.geocoords.split('|')[0]}<br />lon: {this.props.branch.geocoords.split('|')[1]}</p>
                        <p className="BranchHideDetails" onClick={this.offDescriptionDisplay}>Сховати</p>
                    </>
                ) : null}

                {/* <p>{this.props.branch.geocoords}</p> */}
                {/* <p className="Branch-geo">lat: {this.props.branch.geocoords.split('|')[0]}<br />lon: {this.props.branch.geocoords.split('|')[1]}</p> */}
            </div>
        );
    };
}

export default Branch;