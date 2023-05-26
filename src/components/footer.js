import React from "react";
import './footer.css';
export default function Footer(){

    return(
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div class="container contact-wrapper">
                <div class="contact-content">
                    <h1 class="section-header">Reach out to me!</h1>
                    <p class="contact-para mb-4">Let's get in touch! Feel free to contact me anytime for queries, feedback, or just to say hi. I'll do my best to respond as soon as possible.</p>
                    <div class="social-menu">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/ankitkumar225/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in fa-xl"></i></a></li>
                            <li><a href="https://www.instagram.com/ankit225598/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram fa-xl"></i></a></li>
                            <li><a href="https://m.facebook.com/profile.php?id=100016218132388" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook fa-xl"></i></a></li>
                            <li><a href="mailto:ankit225598@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-google fa-xl"></i></a></li>
                            <li><a href="https://github.com/ak225598" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-xl"></i></a></li>
                        </ul>
                    </div>
                </div>
                <footer class="copyright">
                    &copy; 2023 Ankit Kumar
                </footer>
            </div>
        </>
    )

}