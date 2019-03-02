import React,{Component} from 'react';

class Slide extends Component {

    render()
    {
        return (
            <div className={`mySlides ${this.props.active ? 'active' : 'fade'}`} style={{display: this.props.active ?  'block' : undefined}}>
                <div className={"numbertext"}>{`${this.props.index +1}/${this.props.total}`}</div>
                <img src={this.props.src} style={{width:'100%'}}></img>
                {/* <div className={"text"}>Caption Text</div> */}
            </div>
        )
    }
}

export default Slide; 