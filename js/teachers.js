// Array fyrir Kennara

var teachersArrayVariable = [
    {
        img: `images/audur.png`,
        name: `Auður Bjarnadóttir`,
        description: `EIGANDI, KUNDALINI, MEÐGÖNGUJÓGA`,
    }
    ,
    {
        img: `images/þorunn.png`,
        name: `ÞÓRUNN JÓNSDÓTTIR`,
        description: `MÖMMU OG MEÐGÖNGUJÓGA`,
    }
    ,
    {
        img: `images/annarin.png`,
        name: `ARNA RÍN JÓNSDÓTTIR`,
        description: `MÖMMU OG MEÐGÖNGUJÓGA`,
    }
    ,
    {
        img: `images/run.png`,
        name: `RÚN STEFÁNSDÓTTIR`,
        description: `NÚVITUND GENG STREITU`,
    }
    ,
    {
        img: `images/hildur.png`,
        name: `HILDUR ÖRNÓLFSDÓTTIR`,
        description: `HATHA OG KUNDALIN JÓGA`,
    }
    ,
    {
        img: `images/ester.png`,
        name: `ESTER ÞORVALDSDÓTTIR`,
        description: `KUNDALINI og Jóga Nidra`,
    }
    ,
    {
        img: `images/inga.png`,
        name: `INGA REYNISDÓTTIR`,
        description: `EMÖMMU OG MEÐGÖNGUJÓGA`,
    }
    ,
    {
        img: `images/rut.png`,
        name: `Rut Gunnarsdóttir`,
        description: `MJÚKT JÓGA OG JÓGA NIDRA `,
    }
    ,
    {
        img: `images/birgir.png`,
        name: `BIRGIR JÓAKIMSSON`,
        description: `KARLAJÓGA`,
    }
    ,
    {
        img: `images/erna.png`,
        name: `ERNA ARADÓTTIR `,
        description: `KUNDALINI OG JÓGA NIDRA`,
    }
    ,
    {
        img: `images/edda.png`,
        name: `EDDA GUNNARSDÓTTIR`,
        description: `MEÐGÖNGU OG MÖMMU JÓGA`,
    }
    ,
    {
        img: `images/bara.png`,
        name: `BÁRA GUÐNADÓTTIR`,
        description: `MJÚKT JÓGA OG JÓGA NIDRA`,
    }
      

]


var containerAllTeachersElement = document.getElementById("container_all_teachers")

var displayAllTeachersFunction = function(allTeachersArrayParameter) {
     // Ef elementið er til á síðunni þá skrifa út alla kennara
    if (containerAllTeachersElement === null) {
        return
     }

    containerAllTeachersElement.innerHTML= ""; // hérna tæmi ég containerinn


    for( var i = 0; i<allTeachersArrayParameter.length; i++){
        var teacher = allTeachersArrayParameter[i]
        displayTeacherFunction(teacher)
    }
}

var displayTeacherFunction = function(teacherParameter) {
    // console.log(teacherParameter) athuga 
    var teacherHtmlVariable = `
    <div class="teachers_container">
        <img class=image src="${teacherParameter.img}" alt="teacher">
        <h1>${teacherParameter.name}</h1>
        <p>${teacherParameter.description}</p>
    </div>
    `
    containerAllTeachersElement.innerHTML += teacherHtmlVariable
}

displayAllTeachersFunction(teachersArrayVariable)