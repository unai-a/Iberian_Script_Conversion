
// j = i, c = ka,ke,ki,ko,ku g = ka,ke,ki,ko,ku, d OR t = ta,te,ti,to,tu
// v = ba,be,bi,bo,bu b = ba,be,bi,bo,bu p = ba,be,bi,bo,bu
document.getElementById("wordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var word = document.getElementById("wordInput").value;

    // Extend the mapping for the special letters
    var letterMapping = {
        'j': 'i',
        'c': ['ka', 'ke', 'ki', 'ko', 'ku'],
        'g': ['ka', 'ke', 'ki', 'ko', 'ku'],
        'd': ['ta', 'te', 'ti', 'to', 'tu'],
        't': ['ta', 'te', 'ti', 'to', 'tu'],
        'v': ['ba', 'be', 'bi', 'bo', 'bu'],
        'b': ['ba', 'be', 'bi', 'bo', 'bu'],
        'p': ['ba', 'be', 'bi', 'bo', 'bu']
    };

    // Split the word into individual letters
    var letters = word.split('');

    // Generate HTML for the images
    var imagesHTML = "";
    for (var i = 0; i < letters.length; i++) {
        var letter = letters[i].toLowerCase();

        // Check if the letter is 'k' and the next letter is 'a'
        if (letter === 'k' && letters[i + 1] === 'a') {
            imagesHTML += "<img src='/repo/images/ka.png' alt='Letter Image'>";
            i++; // Skip the next letter
        }
        // Check if the letter is in the mapping
        else if (letter in letterMapping) {
            // If the mapping is an array, generate an image for the element that matches the next letter in the input word
            if (Array.isArray(letterMapping[letter])) {
                for (var j = 0; j < letterMapping[letter].length; j++) {
                    if (letterMapping[letter][j].charAt(1) === letters[i + 1]) {
                        imagesHTML += "<img src='/repo/images/" + letterMapping[letter][j] + ".png' alt='Letter Image'>";
                        i++; // Skip the next letter
                        break;
                    }
                }
            } else {
                // Replace the letter with the corresponding value from the mapping
                letter = letterMapping[letter];
                imagesHTML += "<img src='/repo/images/" + letter + ".png' alt='Letter Image'>";
            }
        } else {
            // If the letter is 'i' and the previous letter was 'b', skip this letter
            if (letter === 'i' && letters[i - 1] === 'b') {
                continue;
            }
            // If the letter is 'e' and the previous letter was 'k' or 't', show the corresponding image
            else if (letter === 'e' && (letters[i - 1] === 'k' || letters[i - 1] === 't')) {
                imagesHTML += "<img src='/repo/images/ke.png' alt='Letter Image'>";
            }
            // If the current and previous letters are 'r', show the 'rr.png'
            else if (letter === 'r' && letters[i - 1] === 'r') {
                imagesHTML += "<img src='/repo/images/rr.png' alt='Letter Image'>";
            }
            // If the next and current letters are 'r', show the 'rr.png'
            else if (letter === 'r' && letters[i + 1] === 'r') {
                //Do nothing
            }

            // If the current and previous letters are 'm', show the 'mm.png' image
            else if (letter === 'm' && letters[i - 1] === 'm') {
                imagesHTML += "<img src='/repo/images/mm.png' alt='Letter Image'>";
            }
            else if ((letter === 'k' || letter === 't' || letter === 'b') && (letters[i + 1] === 'a' || letters[i + 1] === 'e' || letters[i + 1] === 'i' || letters[i + 1] === 'o' || letters[i + 1] === 'u')) {
                // Do nothing
            }
            else {
                imagesHTML += "<img src='/repo/images/" + letter + ".png' alt='Letter Image'>";
            }
        }
    }

    // Display the result on the page
    document.getElementById("result").innerHTML = imagesHTML;
});