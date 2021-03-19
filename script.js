window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json();
         }).then(function(json){
    console.log(json);
    let container = document.querySelector('#container');
    let astros = ``;
    for (astronaut of json){
        astros+= `
        <div class ="astronaut">
            <div class = "bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
                <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                <li>Active: ${astronaut.active}</li>
                <li>Skills: ${astronaut.skills}</li>
            </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}"></img>
        </div>
         
        `
    }
    container.innerHTML = astros

    let a = document.getElementsByClassName('active');
    

})
})


        
            
