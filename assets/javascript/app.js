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
      //Define an array to store all the object;
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

        
      //Define an winCount;
      winCount:0,
      //Define an LossCount;
      lossCount:0,
      //Define an variable to store the unanswered;
      unAnswered:0,
      //Define an array to store the index of answered question
      libraryIndex:[],
 
      //Define an function to initialize for each round of play;
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
      //Define an function to show up the trivia question in Window;
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
      
      //Define an function to show the answer for each question and play a gif for correct and Incorrect answer;
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

        //Define an function to show the final result and create an button remainding "play again";
      showFinals: function() {
          $(".container").empty();
          $(".container").append("<div class = 'game_header'>Total Trival Trivia!");
          $(".container").append("<p class ='summary_title'>ALL Done, Heres how you did! </p>");
          $(".container").append("<p class ='summary'>" +"Correct Answer: " + trivia.winCount + "</p>");
          $(".container").append("<p class ='summary'>" +"Incorrect Answer: " + trivia.lossCount + "</p>");
          $(".container").append("<p class ='summary'>" +"Non Answered: " + trivia.unAnswered + "</p>");
          $(".container").append("<button class ='playAgain'>Play Again?</button>");

      },

      //Define an function to generate an random number so I can play trivia in an random(but no repeat) order
        //instead of fixed order; 
        generateRandom: function() {
          var randomNum = Math.floor(Math.random()*7);

              while(trivia.libraryIndex.includes(randomNum)) {
                    randomNum = Math.floor(Math.random()*7);
                  }
              trivia.libraryIndex.push(randomNum);
              console.log(trivia.libraryIndex);
              return randomNum;
            
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
          
          //if (trivia.libraryIndex.length >= 7)  { "can't be here, otherwise it will do this first while 
          //waiting for the event above"
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

  
  
      

  