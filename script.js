
const professionText = "ior front-end developer";

let profession = document.querySelector(".profession p")

window.addEventListener("load", showProfession)

function showProfession() {
    document.querySelector(".waiting").style.display = "none";
    document.querySelector(".fishPosition").classList.add("fishMove")
    let i=0;
        let myInterval = setInterval(()=> {
            profession.textContent += professionText[i];
            i++;
            if (i===professionText.length) {
                clearInterval(myInterval)
            }
        }, 140);
    }


document.querySelector(".fishPosition").onanimationend = () => {
    let mySize = window.matchMedia('(max-width: 500px)');
    if ((Object.values(document.querySelector(".fishPosition").classList).indexOf("fishMove") != -1)) {
        if (mySize.matches) {
            document.querySelector(".fishPosition").style.right = "-150px";
        }

        else {
            document.querySelector(".fishPosition").style.right = "-300px";
        }
        document.querySelector(".fishPosition").classList.remove("fishMove");
        fishing() 
    }
};

function fishing() {
    document.querySelector(".circleForFishThing").classList.add("fishing");
    let myTimeout = setTimeout(() => {
        document.querySelector(".fishPosition").classList.add("caughtFish");
        document.querySelector(".myFish").classList.add("scaryFish");
        document.querySelector(".fishPosition").style.top = "-500px";
    }, 800)
    
}

document.querySelector(".circleForFishThing").onanimationend = () => {
    document.querySelector(".circleForFishThing").classList.remove("fishing");
    document.querySelector(".fishPosition").classList.remove("caughtFish");
    document.querySelector(".myFish").classList.remove("scaryFish");
};





let portfolio = document.querySelector(".portfolio")
function showPortfolio() {
    portfolio.style.marginTop = "20px";
    }
    


let observer = new IntersectionObserver(function (e) {
    if (e[0].isIntersecting === true) {
        showPortfolio();
        observer.disconnect();
    }
}, { threshold: [1] });

observer.observe(document.querySelector(".portfolioHeader"));