let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

excuseHtml = document.getElementById('excuse');
excuseBtn = document.getElementById('excuseBtn');

function random(){
    let whoRandom = who[(Math.floor(Math.random()*who.length))];
    console.log(whoRandom);
    
    let actionRandom = action[(Math.floor(Math.random()*who.length))];
    console.log(actionRandom);
    
    let whatRandom = what[(Math.floor(Math.random()*who.length))];
    console.log(whatRandom);
   
    let whenRandom = when[(Math.floor(Math.random()*who.length))];
    console.log(whenRandom);

    excuseHtml.textContent = whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom + "."

}


excuseBtn.addEventListener('click', random);