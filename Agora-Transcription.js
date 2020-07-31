var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var Content = '';

recognition.continuous = true;

recognition.onresult = function (event) {

    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;

    Content += transcript;
    document.getElementById("chatbox").innerHTML = "<ul><li>" + Content + "<li></ul><br>";

};

recognition.onstart = function () {
    console.log('Voice recognition is on.');
}

recognition.onspeechend = function () {
    console.log('No activity found.');
}

recognition.onerror = function (event) {
    if (event.error == 'no-speech') {
        console.log('Could you please repeat? I didn\'t get what you\'re saying.');
    }
}

$(function () {
    if (Content.length) {
        Content += ' ';
    }
    recognition.start();
});