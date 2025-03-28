const botones_ul = document.querySelector('.extras-botones ul');

const botones_li = botones_ul.children;

for (const lielm of botones_li) {
    lielm.addEventListener("click",function (){
       switch (lielm.textContent) {
           case "Extra 1":
               document.querySelector('iframe').src="https://playpager.com/embed/checkers/index.html"
               break;
           case "Extra 2":
               document.querySelector('iframe').src="https://emulatoros.github.io/angrybirdschrome-source-html5/"
               break;
           case "Extra 3":
               document.querySelector('iframe').src="https://minecrafttopvaz.github.io/go/minecraft-1.5.2/"
               break;
           case "Extra 4":
               document.querySelector('iframe').src="http://slither.com/io"
               break;
           case "Extra 5":
               document.querySelector('iframe').src="https://www.agar.io/"
               break;
           default:
               document.querySelector('iframe').src="https://playpager.com/embed/checkers/index.html"
               break;

       }
    });
}


