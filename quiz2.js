//our initial array, containing a bunch of json objects with the pages
const pages = [
    {
    elements: [{
        type: "html",
        html: "You are about to start a quiz on general driver's ed. <br>You will have 10 seconds for every question and 25 seconds to end the quiz. Click <b>Start Quiz</b> to begin."
    }]
}, 

{
    elements: [{
        type: "radiogroup",
        name: "flashlight",
        title: "A flashing red light means:",
        choices: [
            "Signal light is out of order, proceed with caution", "You must stop and yield for pedestrians and oncoming traffic", "Slow down and drive with increased caution", "You must make a complete stop. Move through the intersection only when it is safe to do so"
        ],
        correctAnswer: "You must make a complete stop. Move through the intersection only when it is safe to do so"
    }]
},

{
    elements: [{
        type: "radiogroup",
        name: "signcolors",
        title: "What are the colors of a sign which tells you the distance to the next exit of a highway",
        choicesOrder: "random",
        choices: [
            " Yellow with black letters.", "Black with white letters.", "Red with white letters.", "Green with white letters."
        ],
        correctAnswer: "Green with white letters."
    }]
},

{
    elements: [{
        type: "radiogroup",
        name: "train",
        title: "What is the appropriate action to take when approaching a railroad crossing that does not have signals (such as lights or crossing gates)?",
        choicesOrder: "random",
        choices: [
            "Always bring the car to a complete stop.",
            "Slow down and be prepared to stop.",
            "Do nothing; all railroad crossings have signals.",
            "Increase speed to get across the tracks quickly."
        ],
        correctAnswer: "Slow down and be prepared to stop."
    }]
},

{
    elements: [{
        type: "radiogroup",
        name: "expressway",
        title: "When you get ready to leave an expressway, you should begin to use your turn signal",
        choicesOrder: "random",
        choices: [
            "Just as you get to the exit ramp.",
            "50 feet before the exit ramp.",
            "100 feet before the exit ramp.",
            "When you see cars behind you in the exit lane."
        ],
        correctAnswer: "100 feet before the exit ramp."
    }]
},

{
    elements: [{
        type: "radiogroup",
        name: "speed",
        title: "At highway speeds, on a dry road, a safe following distance is at least:",
        choicesOrder: "random",
        choices: [
            "3 seconds of following distance from the car ahead of you",
            "2 seconds of following distance from the car ahead of you",
            "4 seconds of following distance from the car ahead of you",
            "2 car lengths of following distance from the car ahead of you"
        ],
        correctAnswer: "4 seconds of following distance from the car ahead of you"
    }]
},

{
    elements: [{
        type: "radiogroup",
        name: "brake",
        title: "Anti-locking brake systems can help improve steering ability, which means ____",
        choicesOrder: "random",
        choices: [
            "avoiding spin-outs.",
            "directing the car where the driver wants it to go.",
            "decreasing the distance needed to stop the vehicle.",
            "none of the above"
        ],
        correctAnswer: "directing the car where the driver wants it to go."
    }]
},

{
    elements: [{
        type: "radiogroup",
        name: "truck",
        title: "When sharing the road with a truck, it is important to remember that, in general, trucks:",
        choicesOrder: "random",
        choices: [
            "Take longer distances than cars to stop",
            "Require less time to pass on a downgrade than cars",
            "Require less turning radius than cars",
            "Require less time to pass on an incline than cars"
        ],
        correctAnswer: "Take longer distances than cars to stop"
    }]
},

{
    elements: [{
        type: "radiogroup",
        name: "lane",
        title: "After you have passed a car you should return to the right lane when you",
        choicesOrder: "random",
        choices: [
            "See the front bumper of the other car in your mirror.",
            "Have put your turn signal on.",
            "Have turned your headlights on.",
            "See the other car's headlights come on."
        ],
        correctAnswer: "See the front bumper of the other car in your mirror."
    }]
}]

//we are going to reorder this array before creating the survey
for (let i = 1; i < pages.length; i++){
    //loop through the array of json objects
    //as you loop through, swap
    let temp = pages[i];
    let randomNum = Math.floor(Math.random() * pages.length);
    pages[i] = pages[randomNum];
    pages[randomNum] = temp;
}

//survey created here
const surveyJson = {
    title: "Driver's Ed",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages,
    completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
    completedHtmlOnCondition: [{
        expression: "{correctAnswers} == 0",
        html: "<img width=\"500px\" src=\"sad-cat.jpeg\"> <h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
    }, {
        expression: "{correctAnswers} == {questionCount}",
        html: "<h1>So fur, so good B)</h1> <img width=\"500px\" src=\"happy-cat.jpeg\"> <h4>Congratulations! You answered all the questions correctly!</h4>"
    }]
};

const survey = new Survey.Model(surveyJson);

$(function() {
    $("#quiz").Survey({ model: survey });
});

