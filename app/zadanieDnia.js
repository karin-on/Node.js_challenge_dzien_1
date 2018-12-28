//Twój kod

let arr = process.argv;

for (let i = 2; i < arr.length; i++) {

    setTimeout(function () {

        console.log(arr[i]);

    }, Number(arr[i]) * 1000)

}