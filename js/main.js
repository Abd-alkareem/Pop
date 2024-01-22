//formath openning the page
document.querySelectorAll(".home .links .li").forEach((e,ind)=>{
    e.addEventListener("click",()=>{
        document.querySelectorAll(".page")[ind].classList.add("active");
        document.querySelector(".home").classList.add("op-0");
        document.querySelector("footer").classList.add("op-0");
        document.body.style.paddingBlock = "30px";
    })
})

// format the exit btn in the page
document.querySelectorAll(".page .exit-btn").forEach((e)=>{
    e.addEventListener("click",()=>{
        e.parentElement.classList.remove("active");
        document.querySelector(".home").classList.remove("op-0");
        document.querySelector("footer").classList.remove("op-0");
        document.body.style.paddingBlock = "0px";

    })
})

// format the slider in work page
let slider = document.querySelector(".work .wepper .img-carousel ");
let firstImgWigth = 0;
let scrollWidth = 0;
document.querySelectorAll(".links .li")[2].addEventListener("click",()=>{
     scrollWidth = slider.scrollWidth - slider.clientWidth;
     firstImgWigth = document.querySelector(".work .wepper .img-carousel .image").clientWidth + 16;
})

document.querySelectorAll(".wepper i ").forEach((e)=>{
    e.addEventListener("click",()=>{
        e.classList.contains("i-right") ? slider.scrollLeft+= firstImgWigth : slider.scrollLeft-= firstImgWigth;
        setTimeout(()=>{
        if(slider.scrollLeft >= scrollWidth - 10) {
            document.querySelectorAll(".wepper i ")[0].classList.add("full");
        
        }else{
         document.querySelectorAll(".wepper i ")[0].classList.remove("full");
        }
        if(slider.scrollLeft <= 10){
        document.querySelectorAll(".wepper i ")[1].classList.add("full");
        }else{
         document.querySelectorAll(".wepper i ")[1].classList.remove("full");
        }
        },500)
    })
})