import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Keith's website</title>
                <meta name="description" content="Welcome to my portfolio"/>
                <link rel="icon" type="image/png" href="/rocket.png"/>
            </Head>
            <div id="navbar">
                <span>Keith Pais</span>
            </div>
            <div id="container">
                <div id="top-section">
                    <img src="/keithprofile.jpg" id="prof-pic"/>
                    <h1>Hi, nice to meet you!<br/>I'm Keith 🤠</h1>
                    <a href="https://twitter.com/home" className="button-wrapper">
                    <button type="button">Twitter</button>
                    </a>
                    <p>
                    I'm a 13 year old from New Jersey who <b><br/>flies planes, builds PCs, and plays minecraft.</b>
                    </p>
                    <p>
                    For the last year, I've advanced to first lieutenant at my local civilian air patrol, restarted training as a black belt in karate, learned java while working on a robot with my friends, and met Vitalik at ETHDenver. 
                    </p> 
                 
                <hr/>  
                <p>Some projects I've finished:</p>

                {/*to make images link, wrap the entire project-box in an a tag*/}
                <div id="flex-container">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="project-wrapper">
                <div className="project-box">
                    <img src="/VR.jpeg" id="VR-pic"/>
                    <h2>How AR and VR Work (plz click)</h2>
                    <p>Article I wrote after trying to understand how tech that seems like sci-fi was built and where I predict the future of this industry is going.</p>
                </div>
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="project-wrapper">
                <div className="project-box">
                    <img src="/pc.webp" id="PC-pic"/>
                    <h2>How I Built My PC (plz click)</h2>
                    <p>Video where I take apart my PC and explain its tech specs which include 128 GB of RAM, a 16-core CPU, water cooling infrastructure, and an RTX 3090 GPU.</p>
                </div>
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="project-wrapper">
                <div className="project-box">
                    <img src="/pc.webp" id="PC-pic"/>
                    <h2>How I Built My PC (plz click)</h2>
                    <p>Video where I take apart my PC and explain its tech specs which include 128 GB of RAM, a 16-core CPU, water cooling infrastructure, and an RTX 3090 GPU.</p>
                </div>
                </a>
                </div>
                </div>
            </div>
        </>
    );
}


