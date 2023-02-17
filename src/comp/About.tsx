import React from 'react';
import Carousel from './Carousel';
import './about.css';

function About(props: { logged: boolean }) {
    return (
        <div className="about">
            <Carousel images={["https://assets.entrepreneur.com/content/3x2/2000/20191127190639-shutterstock-431848417-crop.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380","https://imageio.forbes.com/blogs-images/alejandrocremades/files/2018/07/desk-3139127_1920-1200x773.jpg?format=jpg&width=960"]}></Carousel>
            <div className='about-text'>
                <h1>
                    Who are we?
                </h1>
                <h3>
                    
                    Who are you? <br /> What are you? <br /> Get outta here! <br />
                    We are the stories we tell ourselves. In this universe, and this existence, where we live with this duality of whether we exist or not and who are we, the stories we tell ourselves are the stories that define the potentialities of our existence. We are the stories we tell ourselves. So that’s as wide as we look at stories. A story is the relationship that you develop between who you are, or who you potentially are, and the infinite world, and that’s our mythology.
                    <br />
                    We tell our stories, and a person without a story does not exist... everybody, has a story that they follow. We tell ourselves stories. So, I will go further, and I say, “I tell a story, and therefore I exist.” I exist because there are stories, and if there are no stories, we don’t exist. We create stories to define our existence. If we do not create the stories, we probably go mad.
                    <br />
                    Or for short, we really do be like that sometimes.
                </h3>
            </div>
        </div>
    );
}

export default About;
