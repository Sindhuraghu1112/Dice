var number=Math.floor(Math.random()*6)+1;
var number1=Math.floor(Math.random()*6)+1;
var image1="./images/dice" + number+".png";
var image2="./images/dice" + number1+".png";

if(number===number1)
{
    document.querySelector("h1").innerHTML="Roll up again";
}
else if (number > number1)
{
    document.querySelector("h1").innerHTML=" Player 1 is the winner";

}
else
{
    document.querySelector("h1").innerHTML="Player 2 is the winner";
}


    document.querySelector(".img1").setAttribute("src",image1);
    document.querySelector(".img2").setAttribute("src",image2);

