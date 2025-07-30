const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

const button = document.getElementById("ajax-btn");

const content = document.getElementById("content");

button.addEventListener("click", () =>{
    fetch(url)
    .then((response) =>{
        return response.json();
    })

    .then( (data) => {
        const weather = data[0].timeSeries[0].areas[0].weathers[0];

        content.innerHTML = "<br>" + weather + "<br>";
    })
}); 