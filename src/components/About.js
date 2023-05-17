import React, { useState } from 'react'
import './About.css';
import img from './AK.jpeg';

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'

    })

    const [btntext, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color == 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div class="about-section">
                <h1>About Textwise</h1>
                <p class="aboutTextWise">
                    TextWise is a web application built using React that provides various text manipulation and analysis features.
                    Key Features:
                    <ol >
                        <li>Text conversion: Enables users to convert text to lowercase, uppercase, and other formats effortlessly.</li>
                        <li>Reading time estimation: Calculates and displays the estimated reading time for the input text, helping users manage their reading schedules efficiently.</li>
                        <li>Copy text: Allows users to conveniently copy the processed text from the text box, facilitating seamless sharing or further editing.</li>
                    </ol>
                </p>
                <h1>About Me</h1>
                <img src={require('./AK.jpeg')} alt="Your Image" />
                <p class="aboutme">I'm pursuing a Bachelor's degree in <b>Mechatronics Engineering</b>  at the <b>Indian Institute of Information Technology, Bhagalpur</b>, expecting to graduate in 2024.<br /><br /> I'm passionate about web development, exploring new frameworks, and have a strong foundation in data structures and algorithms. Practicing regularly on platforms like <b><a class="codingId" target="_blank" href="https://leetcode.com/ank225/">LeetCode</a> and <a class="codingId" target="_blank" href="https://auth.geeksforgeeks.org/user/ankit225598/">GeeksforGeeks</a></b> helps me improve and stay proficient in tackling various coding challenges. <br /><br />Combining my interdisciplinary background in Mechatronics, coding proficiency, and enthusiasm for web development, I aim to create innovative solutions that integrate hardware and software seamlessly.</p>
            </div>

            <div class=" container contact-wrapper">
                <h1 class="section-header">Reach me out!</h1>
                <p class="contact-para mb-4"> Let's <span>Get in touch!</span> You can contact me anytime regarding anything, whether you have a query, feedback or just want to say Hi, I'll try my best to respond you as soon as possible. </p>

                <div class="social-menu">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/ankitkumar225/" target="_blank"><i class="fa-brands fa-linkedin-in fa-xl"></i></a></li>
                        <li><a href="https://www.instagram.com/ankit225598/" target="_blank"><i class="fa-brands fa-instagram fa-xl"></i></a></li>
                        <li><a href="https://m.facebook.com/profile.php?id=100016218132388" target="_blank" ><i class="fa-brands fa-facebook fa-xl"></i></a></li>
                        <li><a href="mailto:ankit225598@gmail.com" target="_blank"><i class="fa-brands fa-google fa-xl"></i></a></li>
                        <li><a href="https://github.com/ak225598" target="_blank"><i class="fa-brands fa-github fa-xl"></i></a></li>
                    </ul>
                </div>

                <footer class="copyright">&copy; Copyright @2023 <span>Ankit Kumar.</span></footer>
            </div>
        </>

    )
}
