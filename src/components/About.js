import React from 'react'

function About(props) {

    return (
        <>
            <div className="container my-4">
                <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>About Us</h1>
                <div className="accordion accordion-flush" id="accordionFlushExample" >

                    <p className={`text-${props.mode==='light'?'dark':'light'}`}>Welcome to textutils, your ultimate Text Utility App website crafted with React – the dynamic hub for seamless text processing! Tailored for writers, students, and text enthusiasts, our React-based app provides an engaging platform to elevate your text-related tasks. Dive into a suite of features designed for effortless text manipulation within the intuitive React interface of textutils. Transform text with ease—whether converting to uppercase, lowercase, or capitalizing sentences. Copying text becomes a breeze with dedicated features, and textutils' extra spaces removal ensures consistently polished content. The React framework guarantees a smooth and responsive user experience, making these powerful text tools accessible to all users. Whether drafting content, composing emails, or involved in creative projects, textutils, powered by React, invites you to explore a world of streamlined text editing. Elevate your efficiency and precision – embark on a React-powered text processing journey. Visit textutils today to revolutionize the way you work with words!</p>

                </div>
            </div>
        </>
    )
}

export default About
