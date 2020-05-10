const startBtn = document.querySelector("#start-btn");
const recognition = new webkitSpeechRecognition() ;
recognition.continuous = true;
recognition.lang ="en-US";
//recognition.lang ="id-ID";
recognition.interimResults = false;
recognition.maxAlternative = 5;

const synth = window.speechSynthesis;

startBtn.addEventListener("click", ()=>{
    recognition.start();
});

let utter = new SpeechSynthesisUtterance("Hi, how are you");
utter.onend = ()=> {
    recognition.start();
};

recognition.onresult = (e) =>{
    //console.log(e.results[e.results.length -1][0].transcript);
    const transcript = e.results[e.results.length -1][0].transcript.trim();
    if(transcript === "first"){
        //console.log("How are you");
        recognition.stop();
        //const utter = new SpeechSynthesisUtterance("Hi, how are you");
        utter.text ="Okay, we will check your shipping";
        synth.speak(utter);
    }
    else if(transcript === "goodbye"){
        recognition.stop();
        //const utter = new SpeechSynthesisUtterance("Hi, how are you");
        utter.text ="Hope to see you soon";
        synth.speak(utter);
    }
}