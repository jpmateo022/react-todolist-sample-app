import React from 'react';
import Lottie from 'react-lottie';
import anim from '../images/profile.json';
import { Row, Col } from 'react-materialize';

const Profile = () => {
    return (
        <Row>
            <Col s={12} align="center">
            <Lottie options={{
                    loop: true,
                    autoplay: true, 
                    animationData: anim,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                }}
                height={235}
                width={200}
            />  
            </Col>
            <Col s={12} align="center">
                <h5 style={{margin:'0px'}}>Juan dela Cruz</h5>
            </Col>
            <Col s={12} align="center">
                <pre>React Developer</pre>
            </Col>
        </Row>
    );
};

export default Profile;