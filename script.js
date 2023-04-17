let divs=document.createElement("div")
divs.classList.add("divs");
document.body.appendChild(divs);
let left = document.createElement("button")
left.classList.add("left")
document.body.append(left)
left.innerText="-"

let right = document.createElement("button")
right.classList.add("right")
document.body.append(right)
right.innerText="+"

divs.append(left,right)

let person = document.createElement("img");
person.setAttribute("src",`download.png`)
person.setAttribute("width","499")
document.body.append(person)

let ball = document.createElement("div");
ball.style.border="3px solid black";
ball.style.width="30px";
ball.style.height="30px";
ball.style.borderRadius="50%"
ball.style.backgroundColor="aqua"
ball.style.position="absolute";
ball.style.top="680px"
ball.style.left="75px"
// 380l 
document.body.append(ball)
let left1=75
right.addEventListener("click",()=>{
    while (ball.style.left!="380px") {
        left1+=1;
        ball.style.left=`${left1}px`;
        ball.style.transitionDuration="1s"
    }
})
left.addEventListener("click",()=>{
    while (ball.style.left!="75px") {
        left1-=1;
        ball.style.left=`${left1}px`;
        ball.style.transitionDuration="1s"
    }
})

