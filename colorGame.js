var NumSquares=6;
var colors=randomColorGenerator(NumSquares);
var picked=RandomColor();
var m=document.querySelector("#message");
var squares= document.querySelectorAll(".square");
var h=document.querySelector("h1");
var b=document.querySelector("button span");
var rgb=document.querySelector("h1 span")
b.textContent = "New Colors";
b.addEventListener("click",function()
{
    // generate again all random colors
    colors = randomColorGenerator(6);
    //picked random color
    picked = RandomColor();
    //change text also to picked color
    rgb.textContent=picked;
    //change background color of h1
    h.style.background="steelblue";
    //message goes empty()
    m.textContent="";
    //change play again to new colors
    b.textContent="New Colors";
    //color all the squares again when clicked
    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.background=colors[i];
    }
})
var bh=document.querySelector("#hard");
var be=document.querySelector("#easy");
bh.addEventListener("click",function()
{
    bh.classList.add("selected");
    be.classList.remove("selected");
    NumSquares=6;
    colors = randomColorGenerator(NumSquares);
    picked = RandomColor();
    console.log(colors+ " " +picked);
    for(var i=0;i<squares.length;i++)
    {
            squares[i].style.background=colors[i];
            squares[i].style.display="block";        
        
    }    
})
be.addEventListener("click",function()
{
    be.classList.add("selected");
    bh.classList.remove("selected");
    //Random color generator
    NumSquares=3;
    colors = randomColorGenerator(NumSquares);
    picked = RandomColor();
    console.log(colors+ " " +picked);
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.background=colors[i];
        }
        else {
            squares[i].style.display="none";        
        }
    }    
});
for(var i=0;i<squares.length;i++)
{
    squares[i].style.background=colors[i];

    squares[i].addEventListener("click",function()
    {
        var check=this.style.background;
        // console.log(check +" "+ picked);
        if(check===picked)
        {
            m.textContent="Correct";
            colorChanged();
            h.style.background=check;
            b.textContent="Play Again";
        }
        else{
                m.textContent="Wrong";
                this.style.background="#232323";
                 
            }
    })
}
rgb.textContent=picked;
function colorChanged()
{
    for(var j=0; j<squares.length; j++)
    {
        squares[j].style.background=picked;
    }
}
function RandomColor()
{
    var x = Math.floor(Math.random()*(NumSquares));
    console.log(x);
    return colors[x];
}
function randomColorGenerator(num)
{
    var a = [];
    for(var i=0;i<num;i++)
    {
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);

        a.push("rgb("+ r + ", " + g + ", " + b + ")");
    }
    return a;
}