
function calculateCelcius(temp) {
    return Math.round(temp - 273);
}

function setCity() {

    $('select').ready(function () {
        let city = $(this).find(':selected').attr('value');
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e9039525bc64c3586abbf657e0a0ae25`;
        fetch(url).then(
            res => {
                res.json().then(
                    data => {
                        console.log(data);

                        var temp = "";

                        temp += "<tr>";
                        temp += "<td>" + data.name + "</td>";
                        temp += "<td>" + calculateCelcius(data.main.temp) + "</td>";
                        temp += "<td>" + data.main.pressure + "</td>";
                        temp += "<td>" + data.main.humidity + "</td>";
                        temp += "<td>" + data.wind.speed + "</td>";


                        document.getElementById('data1').innerHTML = temp;

                    }
                )
            }
        )
    });

}





