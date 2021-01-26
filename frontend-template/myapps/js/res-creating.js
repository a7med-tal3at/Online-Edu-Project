var ulContainer = document.querySelectorAll("#reqs");

var addBtn = document.querySelectorAll(".add-req");

function creatFont() {
    // Create The I Tag
    var font = document.createElement('i');

    // Add the Required Classes
    font.classList.add('fa');
    font.classList.add('fa-check-circle');

    return font;
}

function creatFinalLi(font, value) {
    // Create the Paragraph
    var prg = document.createElement('p');

    // Append The Icon To The Paragraph
    prg.appendChild(font);

    // Append The Value To The Paragraph
    prg.innerHTML += " " + value;

    return prg;
}
 
addBtn.forEach(function(b) {
    // Get A Button And Write Our Logic 
    b.onclick= function() {
        // Create A New Li Tag
        var createdReq = document.createElement('li');

        // Get All Inputs That Has [ inp-Data ] Class
        var inputs = document.querySelectorAll('.inp-data');
        // Check The Button We Clicked On
        if(b.parentNode.className == "c-overview") {
            // Set The Value Of the Input In LI Tag
            createdReq.innerHTML = inputs[0].value;

            // Append All Data To The UL That Has Index[0]
            ulContainer[0].appendChild(createdReq);

        } else {
            // Get The Font-Awesome Icon
            var font = creatFont();

            // Create A P Tag With A Font-Awesome Icon
            var pWithIcon = creatFinalLi(font, inputs[1].value);

            // Append The P Tag To The LI
            createdReq.appendChild(pWithIcon);

            // Append All Data To The UL That Has Index[1]
            ulContainer[1].appendChild(createdReq);
        }
        // Get All LI Tags
        var allLi = document.querySelectorAll("li");
        
        // Loop On LI Tags
        allLi.forEach(function(l) {
            // Remove The Current LI 
            l.onclick = function() {
                l.parentNode.removeChild(l);
            }
        
        });
    }

});

/** Add New Part Logic Beggin */

// Get Text From Lable

function getInpData() {
    return document.querySelector('input[placeholder="Add New Part"]').value;
}

