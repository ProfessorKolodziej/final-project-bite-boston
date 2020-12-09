// filter button
let dropdownBtn = document.querySelector('.menu-btn');
let menuContent = document.querySelector('.menu-content');
dropdownBtn.addEventListener('click', () => {
    if (menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "";
    }
});

console.log(dropdownBtn)