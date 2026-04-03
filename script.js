fetch("https://xcdl52kcn7.execute-api.ap-south-1.amazonaws.com/count")
.then(response => response.json())
.then(data => {
    document.getElementById("count").innerText = data.count;
})
.catch(error => console.error("Error:", error));