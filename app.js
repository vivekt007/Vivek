function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "100vh";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.height = "100vh";
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
});

const blurElements = document.querySelectorAll('.blur');
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements1 = document.querySelectorAll('.hidden1');
const hiddenElements2 = document.querySelectorAll('.hidden2');

blurElements.forEach((el) => observer.observe(el));
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements1.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));

var character = document.getElementById("character");
var block = document.getElementById("block");
var start = document.getElementById("overhigh");
function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 300);
}

var checkDead = setInterval(
    function () {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

        if (blockLeft < 50 && blockLeft > 0 && characterTop >= 130) {
            block.classList.remove("block-run");
            // block.style.animation = "none";s
            start.style.display = "block";
        }
    }
);

function jumpStart() {
    if (block.classList != "block-run") {
        block.classList.add("block-run");
        start.style.display = "none";
    }
}

