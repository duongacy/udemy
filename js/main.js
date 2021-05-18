const searchFull = document.querySelector("#search-full");
document.querySelector("#close-search").addEventListener("click", function(){
    searchFull.style.display="none";
})
document.querySelector("#open-search").addEventListener("click", function(){
    searchFull.style.display="flex";
})