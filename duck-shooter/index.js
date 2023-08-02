var id_num = 1;
var count = 0;
var elements = document.getElementsByClassName("duck-hitpoint");
var ducks = document.getElementsByClassName("duck");
console.log(elements);

for (let i = 1; i < 10; i++) {
    var hitID = "hit-" + i;
    console.log(document.getElementById(hitID));
    document.getElementById(hitID).addEventListener("click", () => {

        if (id_num <= 5) {
            var id = "case-" + id_num;
            document.getElementById(id).classList.remove("bg-black");
            document.getElementById(id).classList.add("bg-red-700");
            id_num++;
            var duckID = "duck-" + i;
            document.getElementById(duckID).animate(
                {
                    opacity: [1, 0],
                    transform: ["rotate(0deg)", "rotate(360deg)"]
                },
                {
                    duration: 500,
                    iterations: 1,
                    fill: "forwards",
                }
            )
        }
    });
}


document.getElementById("restart-btn").addEventListener("click", () => {
    location.reload();
})