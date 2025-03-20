document.querySelector(".arrow").addEventListener("click", () => {
    const prod = document.querySelector(".prod");
    prod.scrollTo({
        left: prod.scrollWidth, 
        behavior: "smooth", 
    });
});
