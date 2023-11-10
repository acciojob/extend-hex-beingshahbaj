function extendHex(shortHex) {
 
 if (shortHex.charAt(0) === '#') {
    shortHex = shortHex.substring(1);
 }

 
 let hex = '';
 for (let i = 0; i < 3; i++) {
    let char = shortHex.charAt(i);
    hex += (char.length === 1) ? char + char : char;
 }


 return '#' + hex;
}

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
