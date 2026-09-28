//Not very important
enum Direction1 {
    Up,          //0 //if u assign this 1, rest of keys also follow sequence as ,2,3,4
    Down,        //1
    Left,        //2
    Right        //3
}

console.log(Direction1.Right);

enum Direction2 {
    up = "sky",     //u can also assign custom string values to keys
    down = "earth"
}

console.log(Direction2.down);


//But in modern TS, pure string unions are more preferred over enums, ofc we can have object literal like syntax type/interface
type Theme = "light" | "dark";

function setTheme(theme: Theme) {
    console.log(`Setting theme to: ${theme}`);
}

setTheme("light"); // Valid
// setTheme("blue"); // Error: Type '"blue"' is not assignable to type 'Theme'