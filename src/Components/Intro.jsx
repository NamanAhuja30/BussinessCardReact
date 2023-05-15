



export default function Intro(){

    return(

        <div className="Intro">  

            <img className="ProfilePic" src="src\assets\ProfilePic.jpeg"  />
            <div className="IntroText">
            <h1>Naman Ahuja</h1>
            <h4>Full-stack Developer</h4>
            <a className="WebsiteButton" href="">NamanAh.website</a>
            </div>

            <div className="BussinessHandles">
                <a className="EmailButton" href="">
                    <img className="EmailImg" src="https://icon-library.com/images/email-icon-logo/email-icon-logo-16.jpg" width="30px" height="30px"/>
                    <p>Email</p>
                </a>

                <a className="LinkedInButton" href="">
                    <img className="LinkedInImg" src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360" width="30px" height="30px"/>
                    <p>LinkedIn</p>
                </a>
            </div>

    

        </div>
    )

}

