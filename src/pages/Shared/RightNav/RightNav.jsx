import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            </div>

            <div className='my-4'>
                <h4>Find Us On</h4>
                <ListGroup className='p-2'>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <QZone></QZone>

            <div className='position-relative'>
                <img src={bg} alt="" />
                <div className='p-4 my-4 text-center text-white gap-3 position-absolute top-0'>
                    <h2 className='fw-bold py-4 '>Create an Amazing Newspaper</h2>
                    <p className='pb-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='w-75' variant="danger">Learn More</Button>
                </div>
            </div>

        </div>
    );
};

export default RightNav;