import "./About-Me.css";
import { Link } from "react-router-dom";

const AboutMe = () => {
    window.document.title = "About Me";
    return (
        <section className="about-me">
            <div className="thumbnail"></div>
            <div className="body">
                <h1>About Me</h1>
                <p style={{ textAlign: "center" }}>Hi! I'm Mozammel Hossain Joy, a self-taught software developer with a passion for crafting beautiful, functional and realtime problem solving apps. While I haven't pursued formal computer science education yet, I've actively honed my skills for the past 4 years through online resources, documentation, and personal projects.</p>

                <h1>Current Status</h1>
                <p>Currently, I'm a Flutter developer with almost 3 years of experience and a strong foundation in project management, as evidenced by my certificate. I'm also passionate about sharing knowledge, having worked as a Flutter instructor at Viewo. In my free time, I create Flutter tutorials on YouTube and enjoy freelancing on various projects.</p>
                <br />
                <p>I thrive in fast-paced environments and excel at managing multiple tasks efficiently.</p>
                <br />
                <p>You can explore my <Link to="/projects">projects</Link> to get a taste of my work.</p>

                <h1>Biodata</h1>
                <p>I'm a 16-year-old, from Bangladesh 🇧🇩. While I haven't completed my secondary education at <abbr title="Monipur Uccha Bidyalay & College">MUBC</abbr> yet, being a part of SSC-2K25 batch, I'm committed to pursuing a degree in Computer Science in the near future.</p>

                <h1>Coding Journey</h1>
                <p>My journey is indeed interesting, starting from Game Devlopment to continuing with Software Development.</p>
                <br />
                <p>&emsp;I started my journey with my burning will of creating my own game at 12 years old. Despite not having much knowledge, I designed the 3d models for the simple shooting game. That was the time, I came across the term coding/programming. Game development inspired me to start my journey, learnt C, C++ & a little bit of C# at first.</p>
                <br />
                <p>&emsp;My journey continued as I moved towards Web Development with the intention of creating some cool & aesthetic designed websites. I learned web development with pure HTML, CSS & JS; as well as with React JS framework.</p>
                <br />
                <p>&emsp;Later on, I met Python and it took my attention. So, I learned to play with some cool modules like pygame, pyttsx3, tkinter etc... I also shifted to being a back-end developer as I learned creating api servers using Flask and also used it as some of my project's back-end.</p>
                <br />
                <p>&emsp;From my pure curiousity, I dived into the pool of networking to know the basics of the power that's uniting this whole world together.</p>
                <br />
                <p>&emsp;After all the struggles, I am now working as a software developer mastering other skills like time management, project management and principles of designing.</p>

                <h1><b>Feel free to reach out and connect!</b></h1>
                <p style={{ textAlign: "center" }}>The combination of self-taught skills, practical experience, and a thirst for knowledge makes me a highly motivated and adaptable developer. If you have anything more to ask me, feel free to reach me on any of the platforms below. 🫂</p>
            </div>
        </section>
    );
}

export default AboutMe;