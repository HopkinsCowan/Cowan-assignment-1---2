let arr = [{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male"
},
{
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a"
},
{
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a"
},
{
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male"
},
{
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female"
}];


let Operator = prompt("Choose an Operation: \n 1 - Male characters (name only) \n 2 - Female characters (name only) \n 3 - N/A characters (name only) \n 4 - height is greater than 150 (name only)");
if(Operator > 4 || Operator < 1){
invalid();
}


if(Operator == 1){

Malename();

}

else if(Operator == 2){

femalename();

}

else if(Operator == 3){

nogender();
    
    }


    else if(Operator == 4){

heightname();
    }




    


function invalid(){

    alert("Input is invalid.");
    return;
}


function Malename(){
    var name = "";
    arr.find(function(post, index) {
	
        if(post.gender == "male")
            name = name + "\n "+ post.name;

    });
alert(name);
}



function femalename(){

    var name = "";
    arr.find(function(post, index) {
	
        if(post.gender == "female")
            name = name + "\n "+ post.name;

    });
alert(name);

}

function nogender(){

    var name = "";
    arr.find(function(post, index) {
	
        if(post.gender == "n/a")
            name = name + "\n "+ post.name;

    });
    
    alert(name);
}

function heightname(){

    var name = "";
    arr.find(function(post, index) {
	
        if(parseInt(post.height) > 150)
            name = name + "\n "+ post.name;

    });
    alert(name);
}


