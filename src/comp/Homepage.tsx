import React from 'react';
import Carousel from './Carousel';
import {
  BrowserRouter,
  useParams,
  Route,
  Routes,
  Link,
} from 'react-router-dom';

function Homepage(props: { logged: boolean }) {
    return (
        <div className="about">
            <Carousel images={["https://i0.wp.com/www.shanazrafiq.com/wp-content/uploads/2022/05/Chicken-Seekh-Kabab-1.jpg?w=1920&ssl=1","https://rukminim1.flixcart.com/image/416/416/poster/f/g/c/hades-god-of-war-athah-fine-quality-poster-original-imaejyf6y8sgsfq7.jpeg?q=70","https://m.media-amazon.com/images/I/71EYmWxcmdL._AC_SL1400_.jpg","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg"]}/>
            <div className='about-text'>
                <h1>LET YE HEART BE JUDGED AND THY SOUL BE RIGHTOUS</h1>
                <h3>
                    Man stands face to face with the irrational. He feels within him his longing for happiness and for reason. The absurd is born of this confrontation between the human need and the unreasonable silence of the world.
                    <br />
                    Likewise and during every day of an unillustrious life, time carries us. But a moment always comes when we have to carry it. We live on the future: “tomorrow,” “later on,” “when you have made your way,” “you will understand when you are old enough.” Such irrelevancies are wonderful, for, after all, it’s a matter of dying. Yet a day comes when a man notices or says that he is thirty. Thus he asserts his youth. But simultaneously he situates himself in relation to time. He takes his place in it. He admits that he stands at a certain point on a curve that he acknowledges having to travel to its end. He belongs to time, and by the horror that seizes him, he recognizes his worst enemy. Tomorrow, he was longing for tomorrow, whereas everything in him ought to reject it. That revolt of the flesh is the absurd.
                </h3>
            </div>
        </div>
    );
}

export default Homepage;
