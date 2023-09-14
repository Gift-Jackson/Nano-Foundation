const header = document.querySelector("header");
const toggle = document.querySelector(".toggle-box");
const toggleBar = document.querySelector(".toggle");
const ul = document.querySelector("ul");
const btn = document.querySelector(".hero-btn");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const link = document.querySelectorAll(".link");
const input = document.querySelector("#address");
const copyBtn = document.querySelector(".copy-btn");

let lastScroll = 0;

window.addEventListener("scroll", () => {
    if (scrollY > lastScroll) {
        header.style.top = "-100px";
    }
    else {
        header.style.top = "0";
    }

    lastScroll = window.scrollY;
});

toggle.addEventListener("click", () => {
    toggleBar.classList.toggle("active");

    if (toggleBar.classList.contains("active")) {
        ul.classList.add("active");
    }
    else {
        ul.classList.remove("active");
    }
});

btn.addEventListener("click", () => {
    overlay.style.display = "flex";
});
close.addEventListener("click", () => {
    overlay.style.display = "none";
});
overlay.addEventListener("click", (e) => {
    overlay.style.display = "none";

    if (e.target !== overlay && e.target !== close) {
        overlay.style.display = "flex";
    }
});

link.forEach((e) => {
    e.addEventListener("click", () => {
        ul.classList.remove("active");
        toggleBar.classList.remove("active");
    });
});

copyBtn.addEventListener("click", () => {
    copyBtn.textContent = "Copied!";

    input.select();

    document.execCommand("copy");

    setTimeout(function () {
        copyBtn.textContent = "Copy";
    }, 2500);
})
