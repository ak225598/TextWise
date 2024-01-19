import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './About.css';
import img from './AK.jpeg';

export default function About(props) {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="about-section my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <h1>About Textwise</h1>
                <p className="aboutTextWise my-3 mx-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                    TextWise is a web application built using React that provides various text manipulation and analysis features.
                    Key Features:
                    <ol >
                        <li className="mt-3 mb-2">Text conversion: Enables users to convert text to lowercase, uppercase, and other formats effortlessly.</li>
                        <li className='my-2'>Reading time estimation: Calculates and displays the estimated reading time for the input text, helping users manage their reading schedules efficiently.</li>
                        <li className='my-2'>Language Translation : Translation support for 70+ languages, meeting diverse communication needs.</li>
                        <li className='my-2'>Copy text: Allows users to conveniently copy the processed text from the text box, facilitating seamless sharing or further editing.</li>
                    </ol>
                </p>
                <h1>About Me</h1>
                <img src={require('./AK.jpeg')} alt="Your Image" />
                <p className="aboutme" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>I'm pursuing a Bachelor's degree in <b>Mechatronics Engineering</b>  at the <b>Indian Institute of Information Technology, Bhagalpur</b>, expecting to graduate in 2024.<br /><br /> I'm passionate about web development, exploring new frameworks, and have a strong foundation in data structures and algorithms. Practicing regularly on platforms like <b><a className="codingId" target="_blank" href="https://leetcode.com/ank225/">LeetCode</a></b> and <b><a className="codingId" target="_blank" href="https://auth.geeksforgeeks.org/user/ankit225598/">GeeksforGeeks</a></b> helps me improve and stay proficient in tackling various coding challenges. <br /><br />Combining my interdisciplinary background in Mechatronics, coding proficiency, and enthusiasm for web development, I aim to create innovative solutions that integrate hardware and software seamlessly.</p>
            </div>
        </>

    )
}
