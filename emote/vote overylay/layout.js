import React,{Component} from 'react'
import './style.css';
import pogchamp from '../../pogchamp.png';
import openSocket from 'socket.io-client';

class Layout extends Component {
    constructor(props){
        super(props);

        this.state = {
            emotion: 'surprised',
            image1: 'monkaS',
            image2: 'Jebaited',
            image3: 'PogChamp',
            image1Click: true,
            image2Click: true,
            image3Click: true,
        }

      
    }

    vote(image) {
        if(this.state.image1Click && this.state.image2Click && this.state.image3Click){
            this.setState({image1Click: false,image2Click: false,image3Click: false})

            const socket = openSocket('http://0.0.0.0:8080');

            socket.emit('vote','hello');


        }

    }

    render(){
        return(
            <div className="outer">
                <div className="container">
                    <img onClick = {() => this.vote('monkaS')} src={pogchamp} />
                    <img src={pogchamp} />
                    <img src={pogchamp} />
                </div>
                <h1>{this.state.emotion}</h1>
            </div>
        )
    }
}

export default Layout;