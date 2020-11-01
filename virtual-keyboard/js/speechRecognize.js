 setTimeout(function (){ window.SpeechRecognition = window.SpeechRecognition 
    || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'ru-RU';
    //recognition.lang = 'en-US';
    recognition.addEventListener('result', e =>{  
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')+ '. ';

         if (e.results[0].isFinal) document.querySelector('.output').value += transcript;
    })

   

 const microphone = document.querySelector('[data-code="Voice"]');
 
  microphone.addEventListener('click', () => {
    if (!this.speech) {
        document.querySelector('[data-language="ru"]') ? recognition.lang = 'ru-RU' : recognition.lang = 'en-US';
        this.speech = true;
        console.log('start rec');
        microphone.innerHTML = '<div class="sub"></div><div class="letter"><i class="fas fa-microphone"></i></div>';
        microphone.classList.add('active');
        recognition.addEventListener('end', recognition.start);
         recognition.start();
} else {
        microphone.innerHTML = '<div class="sub"></div><div class="letter"><i class="fas fa-microphone-slash"></i></div>';
        microphone.classList.remove('active');
        this.speech = false;
        recognition.abort();
        recognition.stop();
        recognition.removeEventListener('end', recognition.start);
        recognition.removeEventListener('result', recognition.start);
}
})
}, 530);
