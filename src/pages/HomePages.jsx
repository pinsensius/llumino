import SideNav from '../components/sideNav'
import SecondFooter from '../components/SecondFooter'
import GoogleIcon from '../assets/image/google.svg'
import MusicCover1 from '../assets/image/tophit1.png'
import MusicCover2 from '../assets/image/tophit2.png'
import MusicCover3 from '../assets/image/tophit3.png'
import PlayButton from '../assets/image/play-button.svg'
import SadReaction from '../assets/image/sad.png'
import NormalReaction from '../assets/image/normal.png'
import HappyReaction from '../assets/image/happy.png'
import MusicCover4 from '../assets/image/musicover1.png'
import MusicCover5 from '../assets/image/musicover2.png'
import MusicCover6 from '../assets/image/musicover3.png'
import MusicCover7 from '../assets/image/musicover4.png'
import StoryCover1 from '../assets/image/storycover1.png'
import StoryCover2 from '../assets/image/storycover2.png'
import StoryCover3 from '../assets/image/storycover3.png'
import StoryCover4 from '../assets/image/storycover4.png'
import JournalIcon from '../assets/image/journalColor.svg'
import calendarIcon from '../assets/image/calendarColor.svg'
import '../assets/style/homePage.css'

function HomePages(){
    return(
        <>
        <div className="homePage-container">

            <div className="example-2">
                <SideNav/>
            </div>
            <div className="homePage-content">
                <div className="homePage-top-content">
                    <h1>Welcome to llumino!</h1>
                    <div className="homePage-login-option">
                        <a href="#">Sign Up</a>
                        <a href="#">
                            <div className="google-option">
                                <img src={GoogleIcon} alt="Google Icons" />
                                Log in
                            </div>
                        </a>
                    </div>
                </div>
                <hr />
                <div className="homePage-popular-songs">
                    <h1>Popular Songs</h1>
                    <div className="popular-songs-list">
                        <div className="popular-songs-card">
                            <img src={MusicCover1} alt="music cover" />
                            <div className="popular-songs-card-detail">
                                <p>Top hit 1</p>
                                <p>3:45</p>
                                <img src={PlayButton} alt="" />
                            </div>
                        </div>
                        <div className="popular-songs-card">
                            <img src={MusicCover2} alt="music cover" />
                            <div className="popular-songs-card-detail">
                                <p>Top hit 1</p>
                                <p>3:45</p>
                                <img src={PlayButton} alt="" />
                            </div>
                        </div>
                        <div className="popular-songs-card">
                            <img src={MusicCover3} alt="music cover" />
                            <div className="popular-songs-card-detail">
                                <p>Top hit 1</p>
                                <p>3:45</p>
                                <img src={PlayButton} alt="" />
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="homePage-feeling-content">
                    <p>Hello arinza</p>
                    <h2>How are you feeling today?</h2>
                    <div className="feeling-content-list">
                        <img src={SadReaction} alt="sad" />
                        <img src={NormalReaction} alt="normal" />
                        <img src={HappyReaction} alt="happy" />
                    </div>
                </div>
                <div className="homePage-music-content">
                    <div className="music-top-content">
                        <h2>Music</h2>
                        <p><u>See all</u></p>
                    </div>
                    <div className="music-list-content">
                        <div className="music-list-content-card">
                            <img src={MusicCover4} alt="Music Cover" />
                            <div className="music-list-content-card-detail">
                                <p>Waiting from the bus</p>
                                <p>3:45</p>
                                <img src={PlayButton} alt="play button" />
                            </div>
                        </div>
                        <div className="music-list-content-card">
                            <img src={MusicCover5} alt="Music Cover" />
                            <div className="music-list-content-card-detail">
                                <p>Waiting from the bus</p>
                                <p>3:45</p>
                                <img src={PlayButton} alt="play button" />
                            </div>
                        </div>
                        <div className="music-list-content-card">
                            <img src={MusicCover6} alt="Music Cover" />
                            <div className="music-list-content-card-detail">
                                <p>Waiting from the bus</p>
                                <p>3:45</p>
                                <img src={PlayButton} alt="play button" />
                            </div>
                        </div>
                        <div className="music-list-content-card">
                            <img src={MusicCover7} alt="Music Cover" />
                            <div className="music-list-content-card-detail">
                                <p>Waiting from the bus</p>
                                <p>3:45</p>
                                <img src={PlayButton} alt="play button" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homePage-story-content">
                    <div className="story-top-content">
                        <h2>Track</h2>
                        <p><u>See all</u></p>
                    </div>
                    <div className="story-list-content">
                        <div className="story-list-content-card">
                            <img src={StoryCover1} alt="story Cover" />
                            <div className="story-list-content-card-detail">
                                <p>Waiting from the bus</p>
                                <p>3:45</p>
                            </div>
                        </div>
                        <div className="story-list-content-card">
                            <img src={StoryCover2} alt="story Cover" />
                            <div className="story-list-content-card-detail">
                                <p>Waiting from the bus</p>
                                <p>3:45</p>
                            </div>
                        </div>
                        <div className="story-list-content-card">
                            <img src={StoryCover3} alt="story Cover" />
                            <div className="story-list-content-card-detail">
                                <p>Waiting from the bus</p>
                                <p>3:45</p>
                            </div>
                        </div>
                        <div className="story-list-content-card">
                            <img src={StoryCover4} alt="story Cover" />
                            <div className="story-list-content-card-detail">
                                <p>Waiting from the bus</p>
                                <p>3:45</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homePage-daily-reflection-content">
                    <h2>Daily Reflection</h2>
                    <div className="daily-reflection-content-list">
                        <div className="daily-reflection-content-card">
                            <img src={JournalIcon} alt="Journal Icon" />
                            <h3>My Journal</h3>
                            <p>Write about it...</p>
                        </div>
                        <div className="daily-reflection-content-card">
                            <img src={calendarIcon} alt="Journal Icon" />
                            <h3>Activity Calendar</h3>
                            <p>Shedule your daily activities here...</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="homePage-footer-content">
            <SecondFooter/>
        </div>
        </>
    );
}

export default HomePages