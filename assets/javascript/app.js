// //Define an object for each question, including question/choices/method (return the correct answer)
// var triavia_1 = {question: "what is the only bird known to fly backwards ?", 
//                         a: "Hummingbird", 
//                         b: "sparrow", 
//                         c: "Blue Jay", 
//                         d: "Mourning Dove", 
//             correctAnswer: function(){return this.a}
//                 };

// var triavia_2 = {question: "In China, what number is considered unlucky because its pronunciation is similar to that for the word 'death' ?", 
//                         a: "8", 
//                         b: "7", 
//                         c: "4", 
//                         d: "10", 
//             correctAnswer: function(){return this.c}
//                 };
// var triavia_3 = {question: "The Martial art of Kung Fu originated in which conuntry ?", 
//                         a: "India", 
//                         b: "Korea", 
//                         c: "Japan", 
//                         d: "China", 
//             correctAnswer: function(){return this.d}
//                 };
// var triavia_4 = {question: "What NBA player was known as 'The Pearl' ?", 
//                         a: "James Harden", 
//                         b: "Earl Monroe", 
//                         c: "Kobe Brant", 
//                         d: "Michael Jordan", 
//             correctAnswer: function(){return this.b}
//                 };
// var triavia_5 = {question: "the world's fastest growing plant is a species of what ?", 
//                         a: "Flowering Plants", 
//                         b: "Mosses", 
//                         c: "Grass", 
//                         d: "Bamboo", 
//             correctAnswer: function(){return this.d}
//                 };
// var triavia_6 = {question: "On the Apollo 11 moon mission, which astronaut stayed aloft in the command module while Neil Armstrong and Buzz Aldrin walked on the moon ?", 
//                         a: "Peter Li", 
//                         b: "Donald Trump", 
//                         c: "Michael Collins", 
//                         d: "Hillary Clinton", 
//             correctAnswer: function(){return this.c}
//                 };
// var triavia_7 = {question: "When a drink is served 'on the rocks', it is served with what ?", 
//                         a: "Ice Cubes", 
//                         b: "Creamy Cheese", 
//                         c: "Salt", 
//                         d: "Sugar", 
//             correctAnswer: function(){return this.a}
//                 };

//   console.log(triavia_4);
//   console.log(triavia_4.correctAnswer());
// //Define an array to store all the object;
// var triaviaLibrary = [triavia_1,triavia_2,triavia_3,triavia_4,triavia_5,triavia_6,triavia_7];
// console.log(triaviaLibrary);

// //Define an winCount;
// var winCount;
// //Define an LossCount;
// var lossCount;
// //Define an variable to store the unanswered;
// var unAnswered;


// //play
//     //for loop through each item of the array;{}
//         //Set up an timer and display it on the screen;
//         // put the question and choices on the screen;
//             //create an button for each choice

//         //if the timers is up and no choice made {;
//             // show the time is up;
//             // show the right answer;
//             // move onto next question;
//             // setup timer and display it on the screen;
//             //Put the question and choices on the screen;
//         //} else if the choice is made within the time {
//             // decide whether the choice is correct; (clicked html = object.correctmethod);
//             //if the choice is correct {
//                 //stop the timer;
//                 //display it let the user know it's correct
//                 //play an celebration video;
//                 //Go to next question
//                 //setup timer and display
//                 //put the question on the screen
//             //} else if {
//                 //stop the timer;
//                 //display it let the user know it's wrong;
//                 // show the correct answer;
//                 //play an unfortunate video
//                 //go to next question
//                 //.....
//                 //.....
//              //}

//         //}
// //}

// // display the winCount;
// // display the lossCount
// // display the unanswered count;
// // Create an "start over" button
// // if the user clicked, play again (called the play function)

window.onload = function() {

  trivia.initialize();
  debugger;
  
  console.log(trivia.triaviaLibrary);
  $(".container").on("click", ".start", function() {

    $(".start").remove();
    trivia.play();
   
  });

  $(".container").on("click", ".playAgain", function() {
    trivia.initialize();
  });

  };
  
  var trivia = {
    //Define an object for each question, including question/choices/method (return the correct answer)
    triaviaLibrary: [ 
    {question: "what is the only bird known to fly backwards ?", 
    a: "Hummingbird", 
    b: "sparrow", 
    c: "Blue Jay", 
    d: "Mourning Dove", 
    correctAnswer: function(){return this.a}
    },

    {question: "In China, what number is considered unlucky because its pronunciation is similar to that for the word 'death' ?", 
    a: "8", 
    b: "7", 
    c: "4", 
    d: "10", 
    correctAnswer: function(){return this.c}
    },

    {question: "The Martial art of Kung Fu originated in which conuntry ?", 
    a: "India", 
    b: "Korea", 
    c: "Japan", 
    d: "China", 
    correctAnswer: function(){return this.d}
    },
    {question: "What NBA player was known as 'The Pearl' ?", 
    a: "James Harden", 
    b: "Earl Monroe", 
    c: "Kobe Brant", 
    d: "Michael Jordan", 
    correctAnswer: function(){return this.b}
    },

    {question: "the world's fastest growing plant is a species of what ?", 
    a: "Flowering Plants", 
    b: "Mosses", 
    c: "Grass", 
    d: "Bamboo", 
    correctAnswer: function(){return this.d}
    },

    {question: "On the Apollo 11 moon mission, which astronaut stayed aloft in the command module while Neil Armstrong and Buzz Aldrin walked on the moon ?", 
    a: "Peter Li", 
    b: "Donald Trump", 
    c: "Michael Collins", 
    d: "Hillary Clinton", 
    correctAnswer: function(){return this.c}
    },

    {question: "When a drink is served 'on the rocks', it is served with what ?", 
    a: "Ice Cubes", 
    b: "Creamy Cheese", 
    c: "Salt", 
    d: "Sugar", 
    correctAnswer: function(){return this.a}
    }
  ], 

    //Define an array to store all the object;
    //triaviaLibrary: [this.triavia_1,this.triavia_2,this.triavia_3,this.triavia_4,this.triavia_5,this.triavia_6,this.triavia_7],
  
    //Define an winCount;
    winCount:0,
    //Define an LossCount;
    lossCount:0,
    //Define an variable to store the unanswered;
    unAnswered:0,
    //Define an array to store the index of answered question
    libraryIndex:[],

    showTrivia: function(o) {
          var question = o.question;
          var a = o.a;
          var b = o.b;
          var c = o.c;
          var d = o.d;
          var correctAnswer = o.correctAnswer();

          var newQuestion = $(".question");
          newQuestion.text(question);

          $(".choices").empty();
          $(".choices").append("<button class = 'button button1' value = 'a'>"+ a +"</button");
          $(".choices").append("<button class = 'button button2' value = 'b'>"+ b +"</button");
          $(".choices").append("<button class = 'button button3' value = 'c'>"+ c +"</button");
          $(".choices").append("<button class = 'button button4' value = 'd'>"+ d +"</button");
      
          },
      
      showAnswer: function(o,buttonClicked) {
        var correctAnswer =o.correctAnswer();
            console.log(o);
            console.log(correctAnswer);

        var buttonContent = buttonClicked;
            console.log(buttonContent);
        var celebration = $('<img class = "celebration">');
            console.log( $(".celebration"));
        var disappointing = $('<img class = "disappointing">'); 
       
        if (buttonContent === correctAnswer) {
          console.log("Yes");
          trivia.winCount++;
          $(".answer").html("<h4>Correct!</h4>");
          $(".sub_container").empty();
          $(".sub_container").append(celebration);
          console.log( $(".celebration"));
          $(".celebration").attr("src", "assets/gifs/celebration.gif");
          $(".celebration").css("width", "300px");
          $(".celebration").css("height","180px");
          $(".celebration").css("align-self","center");
          console.log( $(".celebration"));

        } else {
          console.log("Nope");
          trivia.lossCount++;
          $(".answer").html("<h4>Nope! the correct answer is: " + correctAnswer +"</h4>");
          $(".sub_container").empty();
          $(".sub_container").append(disappointing);
          $(".disappointing").attr("src", "assets/gifs/disappointing.gif");
          $(".disappointing").css("width", "300px");
          $(".disappointing").css("height","180px");
          $(".disappointing").css("align-self","center");
        }


      },

      showFinals: function() {
        $(".container").empty()
        $(".container").append("<p class ='summary'>ALL Done, Heres how you did! </p>");
        $(".container").append("<p class ='summary'>" +"Correct Answer: " + trivia.winCount + "</p>");
        $(".container").append("<p class ='summary'>" +" incorrect Answer: " + trivia.lossCount + "</p>");
        $(".container").append("<p class ='summary'>" +"unAnswered: " + trivia.unAnswered + "</p>");
        $(".container").append("<button class ='playAgain'>Play Again?</button>");

      },

      initialize: function() {
        
        var gameHeader = $('<div class = "game_header">');
            gameHeader.text("Total Trival Trivia!")

        var startTimer = $('<div class = "timer">');
        var answerDiv = $('<div class = "answer">');

        var startButton =$('<button class = "start">');
            startButton.text("start");
        
        var subContainer = $('<div class = "sub_container">');
        
        $(".container").empty();
        $(".container").append(gameHeader, startTimer, answerDiv,startButton, subContainer);

        trivia.winCount = 0;
        //Define an LossCount;
        trivia.lossCount = 0;
        //Define an variable to store the unanswered;
        trivia.unAnswered = 0;
        //Define an array to store the index of answered question
        trivia.libraryIndex = [];

      },

      play: function() {
        var i = trivia.generateRandom();
        var timeoutID;
        var triaviaObject;

        //if (trivia.triaviaLibrary.length < 7)  {
        
        triaviaObject = trivia.triaviaLibrary[i];

        $(".answer").empty();
        $(".sub_container").empty();
        var question = $('<div class = "question">');
        var choices = $('<div class = "choices">');

        $(".sub_container").append(question,choices);

        trivia.showTrivia(triaviaObject);
        timer.reset();
        timer.start();

        $(".button").click(function(){
          console.log(this);
          timer.stop();
          var buttonContent = $(this).text();
          console.log (buttonContent);
          trivia.showAnswer(triaviaObject, buttonContent);
          // console.log(trivia.t)
          // debugger;
          if (trivia.libraryIndex.length >= 7)  {
            clearTimeout(timeoutID);
            setTimeout((trivia.showFinals), 3000);
          } else {
          setTimeout((trivia.play), 3000);
          clearTimeout(timeoutID);    }                                    
        });
        
        //if (trivia.libraryIndex.length >= 7)  {
         // trivia.showFinals();
        //} else {
        timeoutID = setTimeout(showTimeup, 30000); 
        //} 

     // } else {trivia.showFinals()}

        function showTimeup() {
          var correctAnswer =triaviaObject.correctAnswer();
          trivia.unAnswered++;
          $(".answer").html("<h4>Time is up! the correct answer is: " + correctAnswer +"</h4>");
  
          $(".sub_container").empty();
          var disappointing = $('<img class = "disappointing">'); 
          $(".sub_container").append(disappointing);
          $(".disappointing").attr("src", "assets/gifs/disappointing.gif");
          $(".disappointing").css("width", "300px");
          $(".disappointing").css("height","180px");
          $(".disappointing").css("align-self","center");
  
          //setTimeout(trivia.play, 3000);

          if (trivia.libraryIndex.length >= 7)  {
            
            setTimeout((trivia.showFinals), 3000);
          } else {
            setTimeout((trivia.play), 3000);
          }    
  
        }
          
      },

      showTimeup: function() {
        //var correctAnswer =o.correctAnswer();
        //$(".answer").html("<h4>Time is up! the correct answer is: " + correctAnswer +"</h4>");
        trivia.unAnswered++;
        $(".sub_container").empty();
        var disappointing = $('<img class = "disappointing">'); 
        $(".sub_container").append(disappointing);
        $(".disappointing").attr("src", "assets/gifs/disappointing.gif");
        $(".disappointing").css("width", "300px");
        $(".disappointing").css("height","180px");
        $(".disappointing").css("align-self","center");

        setTimeout(trivia.play, 3000);

      },
       

      

      generateRandom: function() {
        var randomNum = Math.floor(Math.random()*7);

            while(trivia.libraryIndex.includes(randomNum)) {
                  randomNum = Math.floor(Math.random()*7);
                }
            trivia.libraryIndex.push(randomNum);
            console.log(trivia.libraryIndex);
            return randomNum;
           
      }
    };

  var timer = {

      intervalId: null,
      timerRunning: false,
      time: 30,
    
      reset: function() {
        timer.time = 30;
    
        //Change the "timer-display" div to "00:00."
        var currentTime = timer.timeConverter(timer.time);
        $(".timer").html("Time Remaining: " + currentTime + " seconds")
      },
    
      start: function() {
    
        //Use setInterval to start the count here and set the timer to running.
        if (!timer.timerRunning) {
          timer.intervalId = setInterval(timer.count, 1000);
          timer.timerRunning = true;
          console.log(timer.timerRunning);
        }  
      },

      stop: function() {
    
        //Use clearInterval to stop the count here and set the timer to not be running.
        clearInterval(timer.intervalId);
        timer.timerRunning = false;
      },
    
      count: function() { 
    
        //  decrement time by 1, remember we cant use "this" here.
            timer.time--;
        // Get the current time, pass that into the stopwatch.timeConverter function,
        //        and save the result in a variable.
            var currentTime = timer.timeConverter(timer.time);
        // Use the variable just created to show the converted time in the "display" div.
            $(".timer").text("Time Remaining: " + currentTime + " seconds");
            console.log(timer.time <=0);
            if (timer.time <= 0) {
              timer.stop();
              //timer.time =30;
              console.log(timer.timerRunning);            
            } 
    
      },
    
      timeConverter: function(t) {
    
        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
    
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
    
        if (minutes === 0) {
          minutes = "00";
        }
    
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
      }
    };

  
  
      

  