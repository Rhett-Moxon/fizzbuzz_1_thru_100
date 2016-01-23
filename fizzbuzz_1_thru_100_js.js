window.addEventListener("load", function(event) {

    document.getElementById("submitButton").onclick = function() {


        var para = document.getElementById("para");


        for (var i = 1; i <= 100; i++) {

            if (i % 3 === 0 && i % 5 !== 0) {

                para.innerHTML += "FIZZ!<br>";
                console.log("FIZZ");

            } else if (i % 3 !== 0 && i % 5 === 0) {

                para.innerHTML += "BUZZ!<br>";
                console.log("BUZZ!");

            } else if (i % 3 === 0 && i % 5 === 0) {

                para.innerHTML += "FIZZ BUZZ!<br>";
                console.log("FIZZ BUZZ!");

            } else {

                para.innerHTML += i + "<br>";
                console.log(i);

            }

        }

    };

});
