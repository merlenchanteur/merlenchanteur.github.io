function move_cursor(){

    switch (current) {
      
      // VERTICAL AXIS
      case 'ecstasy':
        aim.style.top = "7%";
        aim.style.left = "47%";
        break;
      
      case 'joy':
        aim.style.top = "15%";
        aim.style.left = "47%";
        break;
        
      case 'serenity':
        aim.style.top = "25%";
        aim.style.left = "47%";
        break;

      case 'pensiveness':
        aim.style.top = "70%";
        aim.style.left = "47%";
        break;
      
      case 'sadness':
        aim.style.top = "80%";
        aim.style.left = "47%";
        break;
        
      case 'grief':
        aim.style.top = "90%";
        aim.style.left = "47%";
        break;

      // HORIZONTAL AXIS
      case 'rage':
        aim.style.top = "42%";
        aim.style.left = "5%";
        break;
      
      case 'anger':
        aim.style.top = "42%";
        aim.style.left = "15%";
        break;

      case 'annoyance':
        aim.style.top = "42%";
        aim.style.left = "25%";
        break;
      
      case 'apprehension':
        aim.style.top = "42%";
        aim.style.left = "70%";
        break;
        
      case 'fear':
        aim.style.top = "42%";
        aim.style.left = "80%";
        break;

      case 'terror':
        aim.style.top = "42%";
        aim.style.left = "88%";
        break;


      // TOP-LEFT -- BOTTOM-RIGHT AXIS
      case 'vigilance':
        aim.style.top = "17%";
        aim.style.left = "18%";
        break;
      
      case 'anticipation':
        aim.style.top = "23%";
        aim.style.left = "23%";
        break;

      case 'interest':
        aim.style.top = "33%";
        aim.style.left = "30%";
        break;
      
      case 'distraction':
        aim.style.top = "63%";
        aim.style.left = "63%";
        break;
        
      case 'surprise':
        aim.style.top = "70%";
        aim.style.left = "68%";
        break;

      case 'amazement':
        aim.style.top = "75%";
        aim.style.left = "75%";
        break;
     
      // BOTTOM-LEFT -- TOP-RIGHT AXIS
      case 'loathing':
        aim.style.top = "75%";
        aim.style.left = "18%";
        break;
      
      case 'disgust':
        aim.style.top = "70%";
        aim.style.left = "23%";
        break;

      case 'boredom':
        aim.style.top = "63%";
        aim.style.left = "30%";
        break;
      
      case 'acceptance':
        aim.style.top = "33%";
        aim.style.left = "63%";
        break;
        
      case 'trust':
        aim.style.top = "23%";
        aim.style.left = "68%";
        break;

      case 'admiration':
        aim.style.top = "17%";
        aim.style.left = "75%";
        break;


      // COMPOUND EMOTIONS
      case 'optimism':
        aim.style.top = "9%";
        aim.style.left = "31%";
        break;
      
      case 'love':
        aim.style.top = "9%";
        aim.style.left = "65%";
        break;

      case 'submission':
        aim.style.top = "33%";
        aim.style.left = "88%";
        break;
      
      case 'awe':
        aim.style.top = "63%";
        aim.style.left = "88%";
        break;
        
      case 'disapproval':
        aim.style.top = "85%";
        aim.style.left = "65%";
        break;

      case 'remorse':
        aim.style.top = "85%";
        aim.style.left = "31%";
        break;

      case 'contempt':
        aim.style.top = "63%";
        aim.style.left = "5%";
        break;
        
      case 'aggressiveness':
        aim.style.top = "33%";
        aim.style.left = "5%";
        break;
        
      // NEUTRAL
      case 'neutral':
        aim.style.top = "40%";
        aim.style.left = "47%";
        break;      
    };
    document.getElementById("p_current").innerHTML = current;
  };