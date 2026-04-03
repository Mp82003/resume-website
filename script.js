<<<<<<< HEAD
fetch("https://xcdl52kcn7.execute-api.ap-south-1.amazonaws.com/count")
.then(response => response.json())
.then(data => {
    document.getElementById("count").innerText = data.count;
})
.catch(error => console.error("Error:", error));
=======
document.getElementById("counter").innerText = "1";
>>>>>>> bd403df33f71c2a44b905bb2e3ba498e0d2030b5
