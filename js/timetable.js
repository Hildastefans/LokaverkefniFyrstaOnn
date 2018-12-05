/*XXXXXXXXXXXXXXXXXXXXXX    TÍMAR Í DAG     XXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

var timetableArray = [ 
    {
        weekday: "Sunnudagur",
        classes: [ 
            {
                hours: "10:00 - 11:15",
                name: "Kundalini jóga",
            },       
    ]
    }
    ,
    {
        weekday: "Mánudagur",
        classes: [ 
            {
                hours: "06:30 - 07:30",
                name: "Kundalini jóga",
            },
            {
                hours: "10:15 - 11:30",
                name: "Mömmujóga",
            },
            {
                hours: "12:00 - 13:15",
                name: "Meðgöngujóga",
            },
            {
                hours: "17:15 - 18:30",
                name: "Hatha jóga",
            },
            {
                hours: "18:45 - 20:00",
                name: "Grunnnámskeið",
            },
            {
                hours: "20:15 - 21:15",
                name: "Karlajóga",
            },
    ]
    }
    ,
    {
        weekday: "Þriðjudagur",
        classes: [ 
            {
                hours: "10:00 - 11:15",
                name: "Mjúkt jóga",
            },
            {
                hours: "12:00 - 13:00",
                name: "Kundalini jóga",
            },
            {
                hours: "13:30 - 14:30",
                name: "Jóga fyrir 60+",
            },
            {
                hours: "17:15 - 18:30",
                name: "Kundalini jóga",
            },
            {
                hours: "18:45 - 20:00",
                name: "Meðgöngujóga",
            },
            {
                hours: "20:15 - 21:30",
                name: "Jóga og 12 sporin",
            },
    ]
    }
    ,
    {
        weekday: "Miðvikudagur",
        classes: [ 
            {
                hours: "06:30 - 07:30",
                name: "Kundalini jóga",
            },
            {
                hours: "10:15 - 11:30",
                name: "Mömmujóga",
            },
            {
                hours: "12:00 - 13:15",
                name: "Meðgöngujóga",
            },
            {
                hours: "16:00 - 17:00",
                name: "Meðgöngujóga",
            },
            {
                hours: "17:15 - 18:30",
                name: "Hatha og Nidra",
            },
            {
                hours: "18:45 - 20:00",
                name: "Grunnnámskeið",
            },
            {
                hours: "20:15 - 21:15",
                name: "Kuldalini & Gong",
            },
    ]
    }
    ,
    {
        weekday: "Fimmtudagur",
        classes: [ 
            {
                hours: "10:00 - 11:15",
                name: "Mjúkt jóga",
            },
            {
                hours: "12:00 - 13:00",
                name: "Kundalini jóga",
            },
            {
                hours: "13:30 - 14:30",
                name: "Jóga fyrir 60+",
            },
            {
                hours: "17:15 - 18:30",
                name: "Kundalini jóga",
            },
            {
                hours: "18:45 - 20:00",
                name: "Meðgöngujóga",
            },
            {
                hours: "20:15 - 21:30",
                name: "Jóga og 12 sporin",
            },
    ]
    }
    ,
    {
        weekday: "Föstudagur",
        classes: [ 
            {
                hours: "10:00 - 11:15",
                name: "Sadhana",
            },
            {
                hours: "11:30 - 12:40",
                name: "Jóga Nidra",
            },
            {
                hours: "13:00 - 13:50",
                name: "Hatha og Nidra",
            },
            {
                hours: "14:00 - 14:50" ,
                name: "Dans og slökun",
            },
    ]
    }
    ,
    {
        weekday: "Laugardagur",
        classes: [ 
            {
                hours: "10:00 - 11:15",
                name: "Hatha jóga",
            },
            {
                hours: "11:30 - 12:40",
                name: "Meðgöngujóga",
            },
            {
                hours: "13:00 - 13:50",
                name: "Krakkajóga",
            },
            {
                hours: "14:00 - 14:50",
                name: "Krakkajóga",
            },
    ]
    }
    ,
]

// Þetta er fyrir Tímar í dag á forsíðu að hann sýni í námskeið sem opið eða lokað með lit á forsíðu.
var isClassOpen = function(className){

    for(var i = 0; i < allClassesArrayVariable.length; i++){
        if(className === allClassesArrayVariable[i].title){
            if(allClassesArrayVariable[i].type === "open"){
                return true
            } else {
                return false
            }
        }
    }

}

var timetableElement = document.getElementById("time_container")

for(var i = 0; i<timetableArray.length; i++){
    var timetableArrayTamplete=`
    <div class="timeTableContainer_2">
        <div class="top_container">
            <h1> Tímar í dag</h1>
            <div class="selected_date_border"></div>
            <ul>
                <li>${timetableArray[i].weekday}</li>
                
            </ul>
            <button onclick="changeDay(1)" class="or_left">&#60;</button>
            <button onclick="changeDay(-1)" class="or_right">&#62;</button>
        </div>

            <div class="bottom_container">
            <div class="class_time"> 
    `

    for( var j = 0; j<timetableArray[i].classes.length; j++){
        var isOpen;
        if(isClassOpen(timetableArray[i].classes[j].name)){
            isOpen = `<div class="classOpen"></div>`
        } else {
            isOpen = `<div class="classClosed"></div>`
        }
        
        timetableArrayTamplete += `
        
            <div class="line first">
                <div class="class_time_text_container">
                    <span class="classTime">${timetableArray[i].classes[j].hours}</span>
                </div>
                <div class="class_time_text_container">
                    <span>${timetableArray[i].classes[j].name}</span>
                </div>
                ${isOpen}
            </div>
        
        `   
    }
    timetableArrayTamplete += `
    </div> 
    </div>
    </div>
    `
    timetableElement.innerHTML += timetableArrayTamplete;
}

var move;

if(window.innerWidth < 500){
    move = 419
} else {
    move = 448
}

var moveDayNumber = 0;
var weekdayPosition = 0;
timetableElement.style.left = "0px";

var changeDay = function(direction){
    weekdayPosition += direction
    
    if (weekdayPosition === -7) {
        // Komin á laugardag, fara áfram á sunnudag
        weekdayPosition = 0
        moveDayNumber = 0;
    } else if (weekdayPosition === 1) {
        // Á sunnudegi, fara til baka á laugardag
        weekdayPosition = -6
        moveDayNumber += move * weekdayPosition;
    } else {
        // Fara einn dag áfram eða til baka
        moveDayNumber += move * direction;
    }

    timetableElement.style.left = moveDayNumber + "px";



    if(moveDayNumber <= timetableArray.length*move* -1){
       /* timetableElement.style.transition = "all 0s";*/
        timetableElement.style.left ="0px";
        moveDayNumber=0;
        setTimeout(()=>{
            timetableElement.transition = "all 2s";
            moveDayNumber += move*direction;
            timetableElement.style.left = moveDayNumber + "px";
            },200);
  
    }
}

// Upphafsstilla á daginn í dag
var today = new Date()
var dayOfWeek = today.getDay()
changeDay(-dayOfWeek)


