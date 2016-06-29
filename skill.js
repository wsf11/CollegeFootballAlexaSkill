/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
 http://aws.amazon.com/apache2.0/
 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';


var questions = [
    {
        "Which team has the highest total of wins in the FBS?": [
            "Michigan",
            "Ohio State",
            "Notre Dame",
            "Alabama",
            "Penn State"
        ]
    },
    {
        "Which team has had the most players drafted in the first round of the NFL Draft?": [
            "USC",
            "Alabama",
            "Ohio State",
            "Auburn",
            "Florida"
        ]
    },
    {
        "What team has been to the most bowl games?": [
            "Alabama",
            "USC",
            "Virginia Tech",
            "South Carolina",
            "Ohio State"
        ]
    },
    {
        "Which team has the highest winning percentage in all of the FBS?": [
            "Notre Dame",
            "Alabama",
            "Penn State",
            "Florida",
            "Auburn"
        ]
    },
    {
        "Which team has won the most overall conference championships?": [
            "Nebraska",
            "USC",
            "Oklahoma",
            "Alabama",
            "Penn State"
        ]
    },
    {
        "In what year did Joe Montana win his first Heisman Trophy?": [
            "He never won the Heisman Trophy",
            "1980",
            "1979",
            "1977"
        ]
    },
    {
        "Who is the only athlete to win two Heisman trophies?": [
            "Archie Griffin",
            "Cam Newton",
            "Robert Griffin the third",
            "Tim Tebow",
            "Tom Brady"
        ]
    },
    {
        "What team holds the record for the longest winning streak in College Football?": [
            "Oklahoma",
            "Alabama",
            "Nebraska",
            "USC",
            "Ohio State"
        ]
    },
    {
        "What team holds the record for the most laterals in a game?": [
            "Michigan",
            "University of Virginia",
            "Penn State",
            "Oklahoma State",
            "University of South Carolina"
        ]
    },
    {
        "What year was the forward pass first implemented in College Football?": [
            "1906",
            "1893",
            "1915",
            "1935"
        ]
    },
    {
        "What team has won the most National Championships in College Football?": [
            "Alabama",
            "Notre Dame",
            "Ohio State",
            "Brown",
            "USC"
        ]
    },
    {
        "Who won the first College Football game ever played?": [
            "Rutgers",
            "University of Richmond",
            "Florida",
            "USC",
            "Auburn"
        ]
    },
    {
        "President John F. Kennedy compared the difficulties of reaching space in a rocket to what team defeating the Texas Longhorns?": [
            "Rice Owls",
            "Rutgers Scarlet Knights",
            "Virginia Tech Hokies",
            "Georgetown Hoyas"
        ]
    },
    {
        "How many points did field goals originally represent in College Football?": [
            "5",
            "4",
            "3",
            "2"
        ]
    },
    {
        "What is the oldest rivalry played at a neutral site?": [
            "Texas vs. Oklahoma",
            "South Carolina vs. Clemson",
            "Florida vs. Florida State",
            "Notre Dame vs. USC"
        ]
    },
    {
        "Which of the following stadiums hold more than 100,000 fans?": [
            "University of Tennessees Neyland Stadium",
            "Auburns Jordan Hare Stadium",
            "Alabamas Bryant Denny Stadium",
            "University of Texas Darrell K. Royal Texas Memorial Stadium"
        ]
    },
    {
        "How many points were touchdowns originally worth?": [
            "3 points",
            "4 points",
            "5 points",
            "6 points"
        ]
    },
    {
        "The most popular names for four-year college mascots are:": [
            "Eagles and Tigers",
            "Spiders and Gators",
            "Tigers and Lions",
            "Hawks and Dukes"
        ]
    },
    {
        "Who has the most players in the College Football Hall of Fame?": [
            "Notre Dame",
            "Ohio State",
            "Nebraska",
            "University of Tennesse",
            "Alabama"
        ]
    },
    {
        "Quarterbacks from which school won the first three Superbowls?": [
            "Alabama",
            "USC",
            "Notre Dame",
            "Georgia Tech",
            "Florida State"
        ]
    },
    {
        "Who won the first Rose Bowl?": [
            "Michigan",
            "Notre Dame",
            "University of Georgia",
            "Rutgers"
        ]
    },
    {
        "What team was one of the first college football national champions?(Hint: there were two)": [
            "Princeton",
            "Yale",
            "Auburn",
            "Alabama"
        ]
    },
    {
        "Who holds the NCAA all time passing record?": [
            "Case Keenum",
            "Timmy Chang",
            "Colt McCoy",
            "Phillip Rivers"
        ]
    },
    {
        "Who holds the NCAA single season passing record?": [
            "BJ Symons",
            "Case Keenum",
            "Tom Brady",
            "Ty Detmer"
        ]
    },
    {
        "Who holds the NCAA all time rushing record?": [
            "Ron Dayne",
            "Archie Griffin",
            "DeAngelo Williams",
            "Reggie Bush"
        ]
    },
    {
        "Who holds the NCAA single season rushing record?": [
            "Barry Sanders",
            "Derrick Henry",
            "Matt Forte",
            "Reggie Bush"
        ]
    },
    {
        "Who holds the NCAA all time touchdown record?": [
            "Keenan Reynolds",
            "Montee Ball",
            "Ricky Williams",
            "Ron Dayne"
        ]
    },
    {
        "What coach holds the NCAA all time win record?": [
            "Joe Paterno",
            "Bobby Bowden",
            "George Welsh",
            "Lou Holtz"
        ]
    },
    {
        "What coach has been in the most career bowl games?": [
            "Joe Paterno",
            "Nick Saban",
            "Bobby Bowden",
            "Frank Beamer"
        ]
    },
    {
        "Where is the Sugar Bowl played?":[
            "New Orleans",
            "Dallas",
            "Oklahoma City",
            "Phoenix"
        ]
    },
    {
        "What team won the first Sugar Bowl in 1935?":[
            "Tulane",
            "Temple",
            "Wisconsin",
            "South Carolina"
        ]
    },
    {
        "Where is the Orange Bowl played?":[
            "Miami",
            "Dallas",
            "Oklahoma City",
            "New Orleans"
        ]
    },
    {
        "Who won the first Orange Bowl in 1935?":[
            "Bucknell",
            "Miami",
            "Catholic",
            "Mississippi"
        ]
    },
    {
        "Who won the 2005 National Championship":[
            "Texas",
            "USC",
            "TCU",
            "Alabama"
        ]
    },
    {
        "Which Division 1-A team has the most wins without a national championship?": [
            "West Virginia",
            "Virginia Tech",
            "Oklahoma",
            "Georgia Tech"
        ]
    }
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

     if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.71f1fd72-3290-4c1d-a677-d2e6830e9710") {
        context.fail("Invalid Application ID");
      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "College_Football_Trivia"; 

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "I will ask you " + GAME_LENGTH.toString()
            + " questions, try to score as many touchdowns as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". ";
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "opponentScore": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            opponentScore= parseInt(session.attributes.opponentScore),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore=currentScore+7;
            speechOutputAnalysis = "Hold the phone! Touchdown! That's another seven! ";
        } else {
            if (!userGaveUp) {
                opponentScore=opponentScore+7;
                speechOutputAnalysis = "Dad gummit! Turnover for a defensive touchdown! ";
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            if (currentScore > opponentScore) {
                speechOutput = userGaveUp ? "" : "" ;
                speechOutput += speechOutputAnalysis + "You won! You beat your opponent " + currentScore.toString() + " to "
                + opponentScore.toString() + ". Thank you for playing!";
            } else {
                speechOutput = userGaveUp ? "" : "";
                speechOutput += speechOutputAnalysis + "Darn! You lost to your opponent " + currentScore.toString() + " to "
                + opponentScore.toString() + ". Thank you for playing!";
            }
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". ";
            }
            speechOutput += userGaveUp ? "" : "";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". Your opponents score is "+ opponentScore.toString()+". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "opponentScore":opponentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
