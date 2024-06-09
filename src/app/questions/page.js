import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function QuestionsPage() {
    const questions = [
        {
            id: 1,
            text: "What do they secretly like?",
            
            options: [
                { value: "chocolate", label: "Chocolate" },
                { value: "romantic-movies", label: "Romantic Movies" },
                { value: "video-games", label: "Video Games" },
                { value: "cartoons", label: "Cartoons" }
            ]
        },
        {
            id: 2,
            text: "What is their favorite genre of music?",
           
            options: [
                { value: "pop", label: "Pop" },
                { value: "rock", label: "Rock" },
                { value: "hip-hop", label: "Hip-Hop/Rap" },
                { value: "jazz", label: "Jazz" },
                { value: "indie-alternative", label: "Indie/Alternative" }

            ]
        }
    ];

    const totalQuestions = questions.length;
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNextQuestion = () => {
        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleSkipQuestion = () => {
        handleNextQuestion();
    };

    const handleBackQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = () => {
        alert("Questionnaire submitted!");
    };

    const sliderSettings = {
        arrows: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
        
        
    };

    
    

    return (
        <div className="questions-page">
            <Slider {...sliderSettings}>
                {questions.map((question, index) => (
                    <div key={index} className={``}>
                        <h3 className="">{question.text}</h3>
                        {question.options.map(option => (
                            <div key={option.value} className="text-align-center">
                                <input type="radio" id={option.value} name={`question${currentQuestion}`} value={option.value} required className="mr-2" />
                                <label htmlFor={option.value} className="">{option.label}</label>
                            </div>
                        ))}
                    </div>
                ))}
            </Slider>

            <div className="text-center mt-8">
               
                <button onClick={handleSubmit} className='bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded-full border-b-8 mr-4 transition-all duration-300'>
                    Okay, take me to the gift now!
                </button>
            </div>
        </div>
    );
  }

export default QuestionsPage;
