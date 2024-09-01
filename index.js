console.log('hello world');
// alert("hello");
function myFunction(){
    // alert("ok")
    let myArray = ['blue','red','black'];
    let x = Math.floor(Math.random() * myArray.length);
    document.body.style.backgroundColor = myArray[x];
    document.body.style.textcol = myArray[x];
    
    document.querySelector('button').style.backgroundColor = 'white';
    document.getElementById('name').innerText = myArray[x];
    document.getElementById('name').style.color = myArray[x];

}


function generateTitrationCurve(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    const titrationData = {
        labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50'], // Volumes of titrant added
        datasets: [{
            label: 'pH vs Volume of Titrant',
            data: [2.5, 3.1, 3.5, 4.0, 4.8, 7.0, 9.1, 10.2, 11.0, 11.5, 12.0], // Example pH values
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
            pointRadius: 5,
            pointBackgroundColor: 'rgba(0, 0, 0, 0.7)'
        }]
    };

    const titrationOptions = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Volume of Titrant Added (mL)'
                }
            },
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'pH'
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'line',
        data: titrationData,
        options: titrationOptions
    });
}
