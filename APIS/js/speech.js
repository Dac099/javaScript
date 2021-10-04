const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechApi);

function ejecutarSpeechApi() { 
    const speechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognitionAlternativetion();

    recognition.start();

    recognition.onstart() = function() {
        salida.classList.add('mostrar');
        salida.textContent = 'Grabando ...';
    }

    recognition.onspeechend() = function(){
        salida.textContent = 'Terminado ...';
        recognition.stop();
    }

    recognition.onresult = function(e){
        console.log(e.results[0][0]);

        const {confidence, transcript} = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Grabacion: ${transcript}`;

        const confianza = document.createElement('p');
        confianza.innerHTML = `Seguridad ${parseInt(confidence * 100)} %`;

        salida.appendChild(speech);
        salida.appendChild(confianza);
    }
}