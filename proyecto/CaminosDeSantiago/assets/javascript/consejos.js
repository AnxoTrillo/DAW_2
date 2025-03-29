


const mult=document.querySelectorAll(".consejos figure:not(article figure)");
const tabs=document.getElementsByClassName("consejos-container");

mult.forEach((multicol,index) => {

    multicol.firstElementChild.addEventListener("mouseenter",function () {
        multicol.firstElementChild.style.filter='brightness(0.7)';
    })
    multicol.firstElementChild.addEventListener("mouseleave",function () {
        multicol.firstElementChild.style.filter='brightness(1)';
    })

    multicol.addEventListener('click', function () {

        const tab=tabs[index/2];
        const elm =multicol.nextElementSibling.nextElementSibling;
        multicol.firstElementChild.style.transition=" transform 0.2s"
        if(elm.style.display==="none"){
            elm.style.display="";
            tab.style.background="lightgray";
            multicol.firstElementChild.style.transform='rotate(0)';
        }else{
            elm.style.display="none";
            tab.style.background="var(--moss)";
            multicol.firstElementChild.style.transform='rotate(-90deg)';
        }
    });
});

