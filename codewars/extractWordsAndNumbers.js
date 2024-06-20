// const input = ["Hello123", "World456", "49", "Another789"];
// const output = extractWordsAndNumbers(input);

// // console.log(output);
// output: [  "Hello",123, "World", 456, 49, "Another", 789] // Expected output

function extractWordsAndNumbers(arr) {
    let newArr = [];
    for (let value of arr) {
        let string = [];
        let num = [];
        if (value.match(/\d+/g)) {
            num = value.match(/\d+/g);
        }
        if (value.match(/[a-zA-Z]/g)) {
            string = value.match(/[a-zA-Z]/g);
        }
        if (string.length > 0 || num.length > 0) {
            newArr.push(string.join(''), num.join(''));
        }
    }
    console.log(newArr.filter(Boolean));
}

extractWordsAndNumbers(["Hello123", "World456", "49", "Another789", 'hub']);

