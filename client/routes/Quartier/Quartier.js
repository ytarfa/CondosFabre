import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/Quartier/main.scss';
import Axios from 'axios';

export default class QuartierContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videoLoaded: false   
        }
        this.video = React.createRef();
        this.fetchVideo = this.fetchVideo.bind(this);
    }

    componentDidMount() {
        this.props.pushCurrentRoute(this.props.location.pathname);
        this.fetchVideo();
    }

    fetchVideo() {
        Axios({
            url: 'http://localhost:5000/images/video-plateau.mp4',
            method: 'GET',
            responseType: 'blob'
        }).then((res) => {
            const reader = new window.FileReader();
            reader.readAsDataURL(res.data);
            reader.onload = () => {
                let videoDataUrl = reader.result;
                if (reader.readyState == 2) {
                    this.video.current.setAttribute("src", videoDataUrl);
                    this.setState({videoLoaded: true});
                }
            }
        });
    }

    render() {
        return (
            <div class="Quartier">
                <div class="video-container">
                    <video ref={this.video} autoPlay muted style={{ opacity: this.state.videoLoaded ? '1' : '0'}}/>
                    <div class="screen" style={{opacity: this.state.videoLoaded ? '0.9' : '0'}}></div>
                </div>
            </div>
        )
    }
}