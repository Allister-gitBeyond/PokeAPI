

const pokemon   =   [] 
const request = document.getElementById("form");
const contentTwo = document.getElementById("quizProgress");
const content = document.getElementById("Outputmessage");



//////// unknown function
function port (pokemon)   {

            list = []

            for (let key of pokemon)    
                { list.push(key.id); }
            return list
    };
//////// returns an array



//////// calls a function that makes the first letter a captial in any string 
function capitalizeFirstLetter(string)  { return string.charAt(0).toUpperCase() + string.slice(1); };
//////// returns a string variable



//////// calls a function that updates the questions 
function clear (ElementT)   { ElementT.innerHTML = ""; };
//////// returns an empty question field for populating with new question 



//////// calls a function that makes an API request 
function getAPI (apiInput)  {
            fetch(apiInput)
            .then(response => {
                if (!response.ok)   
                    { throw new Error('Network response was not ok'); }
                return response.json();
            })};
 /////// updates the current question
                                            


//////// calls a function that populates the webpage 
function getInfo (key , value)  {

            let temp = "";

            for (let i = 0 ; i < key.length ; i++)  {
                if  (key[i] === "_") 
                        { temp += " "; }
                else    { temp += key[i]; }};

            let temp2 = capitalizeFirstLetter(temp);

            let zap = document.createElement("p");
            zap.className = ("stats");
            zap.innerHTML = (`${temp2}`);
            content.appendChild(zap);   

            let bar = document.createElement("p");
            bar.className = ("value");
            bar.innerHTML = (`${value}`);
            content.appendChild(bar);   
    };
//////// returns Pokemon information



//////// calls a function that populates the webpage 
function getPic (value)     {
            let zap = document.createElement("img");
            zap.src = value;
            contentTwo.appendChild(zap);   
    };
//////// returns Pokemonm picture



/////// adds event listener to input form
request.addEventListener("submit", (e) => { 

    e.preventDefault();

    let poke = document.forms["form"]["name"].value;
        if (poke == "") 
            { alert("No Pokemon name entered");
            // throw error
            } else {

                clear(content);
                clear(contentTwo);

                // perform operation with form input
                pokemon.push({'id':poke});
                // stores the input as a      key : value

                const apiURL = `https://pokeapi.co/api/v2/pokemon/${poke}/`;

                fetch(apiURL)
                
                .then(response =>   {
                    if (!response.ok)   { throw new Error('Network response was not ok'); }
                    return response.json();
                                    })
                .then(data =>       {
                    Object.keys(data).forEach(key => {

                        const value = data[key];

                        if (key === "sprites")  {

                            Object.keys(value).forEach(key => { 

                                const value2 = value[key]
                                const check = value2 instanceof Object

                                if (typeof value2 == Object)    { return }
                                if (check === true) { return }

                                console.log(key);
                                console.log(typeof key);

                                if (key === "back_default") {
                                    getPic(value2);
                                    return
                                }})}
                    })
                    Object.keys(data).forEach(key => {

                        // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png
                
                        const value = data[key];
                        const check = value instanceof Object;

                        if (check === true) {return}   
                        if (key === "is_default")   {return}
                        if (key === "location_area_encounters") {return}          
                        if (key === "name") {
                            let temp3 = capitalizeFirstLetter(value);
                            getInfo(key , temp3);    
                            return  
                        }

                        getInfo(key , value);    

                        });
                })}});



//////// ensures correct load of web page
function validate ()   {
            let x = document.forms["form"]["name"].value;
            if ( x == "" )  {
                alert("Enter Pokemon");
                return false
            } else { return true }};
//////// returns an alert 



// handle( );
validate( );




                                

