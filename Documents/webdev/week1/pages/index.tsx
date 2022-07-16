import Head from "next/head";

export default function Index() {
    const myName= "Keith";
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
                <h1>Hi, nice to meet you!</h1>
                <div id="on-lines-container">
                    <div id="flex-container-top">
                        <div id="topleft-section">
                            <img src="/keithprofile.jpg" id="prof-pic"/>
                        </div>
                        <div id="topright-section">
                            <p>
                            <b>I'm {myName} 🤠</b><br/>a 13-year-old who<b><br/>flies planes. {/*builds PCs, and plays minecraft.*/}</b>
                            </p>
                        </div>
                    </div>
                    <div id="middle-section">
                        <p>
                        In the past year, I've advanced to first lieutenant at my local civilian air patrol, restarted training as a black belt in karate, learned java while working on a robot with my friends, and met Vitalik at ETHDenver. 
                        </p>
                        <p>
                        Here are some projects I've finished. Please click.
                        </p>
                    </div>sounds
                    {/*to make images link, wrap the entire project-box in an a tag*/}
                    <div id="flex-container-bottom">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="project-wrapper">
                    <div className="project-box">
                        <img src="/ARgif.gif" id="AR-pic"/>
                        <p>Code: AR+VR</p>
                    </div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="project-wrapper">
                    <div className="project-box">
                        <img src="/PC.gif" id="PC-pic"/>
                        <p>Video: Building PC</p>
                    </div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="project-wrapper">
                    <div className="project-box">
                        <img src="/cryptogif.gif" id="crypto-pic"/>
                        <p>Article: Crypto</p>
                    </div>
                    </a>
                </div> 
            </div>
            </div>
        </>
    );
}
