function roll() {
    const randamNumber = Math.floor(Math.random() * (7 - 1) + 1)
    const rollImg = document.getElementById("imgdice")
    switch (randamNumber) {
        case 1 :
            rollImg.src = "img/1.png"
        break;
        case 2 :
            rollImg.src = "img/2.png"
        break;
        case 3 :
            rollImg.src = "img/3.png"
        break;
        case 4 :
            rollImg.src = "img/4.png"
        break;
        case 5 :
            rollImg.src = "img/5.png"
        break;
        case 6 :
            rollImg.src = "img/6.png"
        break;

    }

}