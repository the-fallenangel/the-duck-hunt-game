
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.getElementById("startButton").addEventListener("click", () => {
    setTimeout(() => {
        for (let i = 1; i < 9; i++) {
            setTimeout(function () {
                var ran_x_1 = getRandomNumber(1, 25);
                var ran_x_2 = getRandomNumber(1, 90);
                var ran_y_0 = getRandomNumber(1, 40);
                var ran_y_1 = getRandomNumber(1, 25);
                var ran_y_2 = getRandomNumber(1, 70);
                var ran_y_3 = getRandomNumber(1, 80);
                var ran_duration = getRandomNumber(5000, 8000);
                if (i < 5) {
                    document.getElementById("duck-" + i).animate(
                        [
                            { top: ran_y_0 + "%", left: "-10%" },
                            { top: ran_y_1 + "%", left: ran_x_1 + "%" },
                            { top: ran_y_2 + "%", left: ran_x_2 + "%" },
                            { top: ran_y_3 + "%", left: "100%" },
                        ],
                        {
                            duration: ran_duration,
                            iterations: 1,
                        }
                    );
                }
                else {
                    document.getElementById("duck-" + i).animate(
                        [
                            { top: ran_y_0 + "%", right: "-10%" },
                            { top: ran_y_1 + "%", right: ran_x_1 + "%" },
                            { top: ran_y_2 + "%", right: ran_x_2 + "%" },
                            { top: ran_y_3 + "%", right: "100%" },
                        ],
                        {
                            duration: ran_duration,
                            iterations: 1,
                        }
                    );
                }

            }, i * 2000);
        }
    }, 3000);

})
