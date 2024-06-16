import React, { useState } from 'react';
import {useRouter} from 'next/navigation';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




function QuestionsPage() {
    const router = useRouter();
    const [answers, setAnswers]=useState({});
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
        },
        {
            id: 3,
           
            text: "What is their zodiac sign?",
            options: [
                { value: "aries", label: "Aries (March 21 - April 19)" },
                { value: "taurus", label: "Taurus (April 20 - May 20)" },
                { value: "gemini", label: "Gemini (May 21 - June 20)" },
                { value: "cancer", label: "Cancer (June 21 - July 22)" },
                
            ]
        },

        {
            id: 4,
            text:"No? Well, is it one of the below?",
            options:[
                {value:"leo", label: "Leo(July 23 - August 22)"},
                {value:"virgo", label:"Virgo (August 23 - September 22)"},
                { value: "libra", label: "Libra (September 23 - October 22)" },
                { value: "scorpio", label: "Scorpio (October 23 - November 21)" },
            ]

        },

        {
            id: 5,

            text:"Has to be here, if not already!",
            options:[
                { value: "sagittarius", label: "Sagittarius (November 22 - December 21)" },
                { value: "capricorn", label: "Capricorn (December 22 - January 19)" },
                { value: "aquarius", label: "Aquarius (January 20 - February 18)" },
                { value: "pisces", label: "Pisces (February 19 - March 20)" }

            ]
        },

        {
            id: 6,
            
            text: "What is their favorite type of food?",
            options: [
                { value: "spicy", label: "Spicy" },
                { value: "sweet", label: "Sweet" },
                { value: "savoury", label: "Savoury" },
               
                { value: "healthy", label: "Healthy" },
                { value: "dessert", label: "Dessert" }
            ]
        },
        {
            id: 7,
          
            text: "What is their favorite way to exercise or stay active?",
            options: [
                { value: "running", label: "Running/jogging" },
                { value: "dancing", label: "Dancing" },
                { value: "weightlifting", label: "Weightlifting/strength training" },
                { value: "yoga", label: "Yoga/Pilates" },
                { value: "swimming", label: "Swimming" },
                { value: "team-sports", label: "Playing team sports" }
            ]
        },
        {
            id: 8,
            text: "If they could learn any new skill or hobby, what would it be?",
            options: [
                { value: "cooking", label: "Cooking" },
                { value: "painting", label: "Painting" },
                { value: "language", label: "Learning a new language" },
                { value: "musical-instrument", label: "Playing a musical instrument" },
                { value: "coding", label: "Coding/Programming" }
            ]
        },
        {
            id: 9,
            text: "What's their favorite type of movie or TV show?",
            options: [
                { value: "action", label: "Action/Adventure" },
                { value: "comedy", label: "Comedy" },
                { value: "drama", label: "Drama" },
                { value: "sci-fi", label: "Sci-Fi/Fantasy" },
                { value: "documentary", label: "Documentary" },
                { value: "animated", label: "Animated" }
            ]
        },
        {
            id: 10,
            text: "What's their favorite way to express creativity?",
            options: [
                { value: "painting", label: "Painting or drawing" },
                { value: "writing", label: "Writing poetry or stories" },
                { value: "crafting", label: "Crafting and DIY projects" },
                { value: "musical-instrument", label: "Playing a musical instrument" },
                { value: "cooking", label: "Cooking or baking experimental dishes" },
                { value: "designing", label: "Designing and decorating spaces" }
            ]
        },
        {
            id: 11,
            text: "What's their go-to comfort food on a rainy day?",
            options: [
                { value: "crusty-bread", label: "Hearty homemade soup with crusty bread" },
                { value: "macaroni", label: "Creamy macaroni and cheese" },
                { value: "mashed-potatoes", label: "Warm and savory pot roast with mashed potatoes" },
                { value: "ramen", label: "Spicy ramen noodles with all the fixings" },
                { value: "chocolate-chip", label: "Chocolate chip cookies fresh from the oven" },
                { value: "grilled-cheese-sandwich", label: "Classic grilled cheese sandwich with tomato soup" }
            ]
        },
        {
            id: 12,
            text: "What's their idea of a perfect weekend getaway?",
            options: [
                { value: "relaxing-cabin", label: "Relaxing at a cozy cabin in the mountains" },
                { value: "exploring-city", label: "Exploring a vibrant city and its cultural attractions" },
                { value: "lounging-beach", label: "Lounging by the beach and soaking up the sun" },
                { value: "hiking-camping-trip", label: "Going on an adventurous hiking or camping trip" },
                { value: "spa-retreat", label: "Indulging in a luxurious spa retreat" },
                { value: "landmarks-museums", label: "Visiting historical landmarks and museums" }
            ]
        },
        {
            id: 13,
            text: "What is their favorite color?",
            options: [
                { value: "red", label: "Red" },
                { value: "blue", label: "Blue" },
                { value: "green", label: "Green" },
                { value: "yellow", label: "Yellow" },
                { value: "pink", label: "Pink" },
                { value: "purple", label: "Purple" },
                { value: "orange", label: "Orange" }
            ]
        },
        {
            id: 14,
            text: "How would you describe their fashion style?",
            options: [
                { value: "casual", label: "Casual" },
                { value: "classic", label: "Classic" },
                { value: "bohemian", label: "Bohemian" },
                { value: "trendy", label: "Trendy" },
                { value: "sporty", label: "Sporty" },
                { value: "elegant", label: "Elegant" },
                { value: "vintage", label: "Vintage" }
            ]
        },
        {
            id: 15,
            text: "Which type of accessories do they prefer?",
            options: [
                { value: "jewelry", label: "Jewelry" },
                { value: "watches", label: "Watches" },
                { value: "scarves", label: "Scarves" },
                { value: "sunglasses", label: "Sunglasses" },
                { value: "handbags", label: "Handbags" },
                { value: "hats", label: "Hats" },
                { value: "caps", label: "Caps" },
                { value: "belts", label: "Belts" }
            ]
        },
        {
            id: 16,
            text: "Are they into technology? If so, which gadgets interest them the most?",
            options: [
                { value: "smartphones", label: "Smartphones" },
                { value: "laptops", label: "Laptops" },
                { value: "tablets", label: "Tablets" },
                { value: "smartwatches-fitnesstracker", label: "Smartwatches/Fitness Trackers" },
                { value: "cameras", label: "Cameras" },
                { value: "gaming-consoles", label: "Gaming consoles" },
                { value: "audio-devices", label: "Audio Devices (Headphones, Speakers, Earbuds)" }
            ]
        },
        {
            id: 17,
            text: "Are they interested in fitness or sports? If so, what are their fitness goals?",
            options: [
                { value: "weight-loss", label: "Weight loss" },
                { value: "muscle-gain", label: "Muscle gain" },
                { value: "cardio", label: "Endurance/Cardiovascular fitness" },
                { value: "flexibility-yoga", label: "Flexibility/Yoga" },
                { value: "sports-performance", label: "Sports performance improvement" }
            ]
        },
        {
            id: 18,
            text: "Do they have a preferred fragrance or scent?",
            options: [
                { value: "floral", label: "Floral" },
                { value: "woody", label: "Woody" },
                { value: "citrus", label: "Citrus" },
                { value: "fresh-aquatic", label: "Fresh/Aquatic" },
                { value: "spicy", label: "Spicy" },
                { value: "oriental", label: "Oriental" },
                { value: "fruity", label: "Fruity" }
            ]
        },
        {
            id: 19,
            text: "How would you describe their home decor style?",
            options: [
                { value: "minimalist", label: "Minimalist" },
                { value: "vintage-retro", label: "Vintage/Retro" },
                { value: "modern-contemporary", label: "Modern/Contemporary" },
                { value: "bohemian", label: "Bohemian" },
                { value: "scandinavian", label: "Scandinavian" },
                { value: "industrial", label: "Industrial" },
                { value: "farmhouse", label: "Farmhouse" }
            ]
        },
        {
            id: 20,
            text: "What is their favorite type of beverage?",
            options: [
                { value: "coffee", label: "Coffee" },
                { value: "tea", label: "Tea" },
                { value: "soft-drinks", label: "Soft Drinks" },
                { value: "juice", label: "Juice" },
                { value: "beer", label: "Beer" },
                { value: "wine", label: "Wine" },
                { value: "cocktails", label: "Cocktails" }
            ]
        },
        {
            id: 21,
            text: "What's their profession or field of work?",
            options: [
                { value: "technology-it", label: "Technology/IT" },
                { value: "healthcare-medicine", label: "Healthcare/Medicine" },
                { value: "education", label: "Education/Academia" },
                { value: "finance", label: "Finance/Banking" },
                { value: "creative", label: "Creative/Arts" },
                { value: "business", label: "Business/Entrepreneurship" },
                { value: "hospitality", label: "Hospitality" }
            ]
        },
        {
            id: 22,
            text: "Are they into sports? If so, which sports do they follow?",
            options: [
                { value: "football", label: "Football/Soccer" },
                { value: "basketball", label: "Basketball" },
                { value: "baseball", label: "Baseball" },
                { value: "tennis", label: "Tennis" },
                { value: "golf", label: "Golf" },
                { value: "ping-pong", label: "Ping Pong" },
                { value: "rugby", label: "Rugby" },
                { value: "hockey", label: "Hockey" }
            ]
        },
        {
            id: 23,
            text: "Do they have any pets? If so, what kind?",
            options: [
                { value: "dogs", label: "Dogs" },
                { value: "cats", label: "Cats" },
                { value: "birds", label: "Birds" },
                { value: "fish", label: "Fish" },
                { value: "reptiles", label: "Reptiles/Amphibians" },
                { value: "small-mammals", label: "Small mammals (hamsters, rabbits, etc)" },
                { value: "none", label: "None" }
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
        const queryParams = new URLSearchParams(answers).toString();
        router.push(`/gifts?${queryParams}`)
        
    };

    const handleCountryChange= (selectedOption)=>{
        setSelectedCountry(selectedOption);
    };

    const handleOptionChange= (questionId, optionValue)=>{
        setAnswers(prev=>({...prev, [questionId]: optionValue}))
    }

    const handleChange = (questionId, value)=>{
        setAnswers({...answers, [questionId]: value})
    };

   






    const sliderSettings = {
       
        dots: true,
        infinite: false,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        swipe: true,
        swipeToSlide: true,
        useCSS: true,
        arrows: true

        
    };

    
    
    
    

    return (
        <div className="questions-page">
            <Slider {...sliderSettings}>
                {questions.map((question, index) => (
                    <div key={index} className="">
                        <h3 className="">{question.text}</h3>
                        {question.options.map(option => (
                            <div key={option.value} className="text-align-center">
                                
                                <input type="radio" id={option.value} name={`question${index}`} value={option.value}  onChange = {()=> handleChange(question.id, option.value)}required className="mr-2" />
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
