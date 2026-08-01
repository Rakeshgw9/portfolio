/* ==========================================
   RAKESH PORTFOLIO 2026
   Premium JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /*==================================
      Cursor Glow
    ==================================*/

    const cursor = document.querySelector(".cursor-glow");

    document.addEventListener("mousemove", (e) => {

        if (cursor) {

            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

        }

    });

    /*==================================
      Smooth Scroll
    ==================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /*==================================
      Active Navigation
    ==================================*/

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll(".sidebar a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-150;

            if(pageYOffset>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

    /*==================================
      Reveal Animation
    ==================================*/

    const revealElements=document.querySelectorAll(

        ".glass-box,.project-card,.counter-box,.timeline-item"

    );

    const reveal=()=>{

        revealElements.forEach(el=>{

            const top=el.getBoundingClientRect().top;

            const visible=window.innerHeight-100;

            if(top<visible){

                el.classList.add("show");

                el.classList.add("active");

            }

        });

    };

    reveal();

    window.addEventListener("scroll",reveal);

    /*==================================
      Counter Animation
    ==================================*/

    const counters=document.querySelectorAll(".counter");

    const runCounter=()=>{

        counters.forEach(counter=>{

            const target=+counter.dataset.target;

            const speed=80;

            const update=()=>{

                const current=+counter.innerText;

                const increment=Math.ceil(target/speed);

                if(current<target){

                    counter.innerText=current+increment;

                    setTimeout(update,25);

                }else{

                    counter.innerText=target+"+";

                }

            };

            update();

        });

    };

    const counterSection=document.querySelector(".counter-section");

    if(counterSection){

        const observer=new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    runCounter();

                    observer.disconnect();

                }

            });

        });

        observer.observe(counterSection);

    }

    /*==================================
      Project Filter
    ==================================*/

    const filterButtons=document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            filterButtons.forEach(btn=>btn.classList.remove("active"));

            button.classList.add("active");

        });

    });

    /*==================================
      Floating Cards
    ==================================*/

    document.querySelectorAll(".project-card").forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            card.style.transform=

            `perspective(900px)
             rotateY(${(x-rect.width/2)/20}deg)
             rotateX(${-(y-rect.height/2)/20}deg)
             translateY(-8px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

    /*==================================
      Typing Effect
    ==================================*/

    const title=document.querySelector(".hero h2");

    if(title){

        const words=[

            "Senior UX/UI Designer",

            "Product Designer",

            "Web Designer",

            "Creative Thinker"

        ];

        let word=0;

        let char=0;

        let deleting=false;

        function type(){

            const current=words[word];

            title.textContent=current.substring(0,char);

            if(!deleting){

                char++;

                if(char>current.length){

                    deleting=true;

                    setTimeout(type,1500);

                    return;

                }

            }else{

                char--;

                if(char===0){

                    deleting=false;

                    word=(word+1)%words.length;

                }

            }

            setTimeout(type,deleting?50:120);

        }

        type();

    }

    /*==================================
      Navbar Blur
    ==================================*/

    window.addEventListener("scroll",()=>{

        const sidebar=document.querySelector(".sidebar");

        if(!sidebar) return;

        if(window.scrollY>60){

            sidebar.style.background="rgba(15,23,42,.92)";

        }else{

            sidebar.style.background="rgba(255,255,255,.05)";

        }

    });

    /*==================================
      Scroll Progress
    ==================================*/

    const progress=document.createElement("div");

    progress.style.position="fixed";

    progress.style.left="0";

    progress.style.top="0";

    progress.style.height="4px";

    progress.style.background="linear-gradient(90deg,#3b82f6,#8b5cf6)";

    progress.style.zIndex="9999";

    document.body.appendChild(progress);

    window.addEventListener("scroll",()=>{

        const total=document.documentElement.scrollHeight-window.innerHeight;

        const percent=(window.scrollY/total)*100;

        progress.style.width=percent+"%";

    });

    /*==================================
      Console Message
    ==================================*/

    console.log(

        "%cDesigned by Rakesh Kumar Nayak",

        "color:#4f8cff;font-size:18px;font-weight:bold;"

    );

});



const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("menuOverlay");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

    menuToggle.innerHTML = sidebar.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".sidebar a").forEach(link=>{
    link.addEventListener("click", closeMenu);
});

function closeMenu(){
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    menuToggle.innerHTML='<i class="fas fa-bars"></i>';
}