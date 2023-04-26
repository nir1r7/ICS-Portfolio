
let text = ["Developer", "Student", "Athlete", "Brother", ""];

let i = 0;

setInterval( () => {
    // document.getElementById("title").innerHTML = text[i%4];

    let chars = text[i%5].split('');

    displayWord(chars);

    i++;
    document.getElementById("title").innerHTML = '';

},800);

function displayWord(word){

    let str = '';
    word.forEach((letter, j) => (str += letter));
    console.log(str);

    word.forEach((letter, i) =>
        setTimeout(() => (document.getElementById("title").innerHTML += letter), 95 * i)
    );

    // for (let i = word.length; i > 0; i--){
    //     setTimeout(() => (document.getElementById("title").innerHTML = str.substring(0, i)), 95 * i);
    // }

}
