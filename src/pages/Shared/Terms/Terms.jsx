import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms And Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate vel debitis distinctio sequi, nesciunt expedita magni autem aperiam architecto quas.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quae natus aut ut obcaecati officia vitae, quis itaque nesciunt, asperiores quisquam expedita recusandae. Nulla, error ratione!</p>
            <p>Go Back To <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;