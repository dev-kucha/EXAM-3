import './Branch.css';
import React, { createElement } from 'react';

class Branch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            branchTitle: this.props.branch.title,
            branchDescription: ''
        };
        /* console.log(props); */
    }

    onDescriptionDisplay = () => {
        let currentBranchDescription = this.state.branchDescription;
        currentBranchDescription = this.props.branch.title;
        this.setState({
            branchDescription: currentBranchDescription
        })
    }
    offDescriptionDisplay = () => {
        this.setState({
            branchDescription: ''
        })
    }
    render() {
        const titleBreakPos1 = this.props.branch.title.indexOf('<br>');
        let titleName = this.props.branch.title.slice(0, titleBreakPos1);
        const p = document.createElement('p');

        return (
            <div className="Branch-block" >
                {/* <p className="Branch-id">{this.props.branch.id}</p> */}
                <h3 className="Branch-title" >{titleName}</h3>
                {/* <p>{this.props.branch.title}</p> */}
                { this.state.branchDescription ? null : (<p className="BranchShowDetails" onClick={this.onDescriptionDisplay}>Детальніше...</p>)}
                {/*                 <p onClick={this.onDescriptionDisplay}>Відкрити деталі...</p> */}

                <p className="Branch-description" dangerouslySetInnerHTML={{ __html: this.state.branchDescription }}></p>
                { this.state.branchDescription ? (<p className="BranchHideDetails" onClick={this.offDescriptionDisplay}>Сховати</p>) : null}
                {/*                 <p onClick={this.offDescriptionDisplay}>Закрити деталі...</p> */}
                {/* <p>{this.props.branch.geocoords}</p> */}
                <p className="Branch-geo">lat: {this.props.branch.geocoords.split('|')[0]}<br />lon: {this.props.branch.geocoords.split('|')[1]}</p>
            </div>
        );
    };

}
/* Розібрати рядок координат на latitude та longitude*/
/* if(offices[i].geocoords) {
                        offices[i].latitude = offices[i].geocoords.split('|')[0] * 1,
                            offices[i].longitude = offices[i].geocoords.split('|')[1] *  */

/* 
function Branch(props) {
    const titleBreakPos1 = props.title.indexOf('<br><br/>');
    const titleName = props.title.slice(0, titleBreakPos1);
    const titleBreakPos2 = titleName.length + 9;
    let titleOther = props.title.slice(titleBreakPos2);
    const titleBreakPos3 = titleOther.indexOf('<br/>');
    const titleAddress = titleOther.slice(0, titleBreakPos3);
    //titleOther = titleOther.slice(titleBreakPos3);
    const titleBreakPos4 = titleOther.indexOf('тел.');
    const titlePhones = titleOther.slice(titleBreakPos4);
 
 
    const geocoordsBreakPos = props.geocoords.indexOf('|');
    const lat = props.geocoords.slice(0, geocoordsBreakPos);
    const lng = props.geocoords.slice(geocoordsBreakPos + 1);
 
    return (
        <div className="Branch-block">
            <h3>{props.id}</h3>
            <p style={{ "fontWeight": "bold" }}>{titleName}</p>
            <p>{titleAddress}</p>
            <p>{titlePhones}</p>
            <p>{props.geocoords}</p>
            <p>{lat}</p>
            <p>{lng}</p>
        </div>
    );
 
} */

export default Branch;