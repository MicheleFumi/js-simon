/*  Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, 
nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri,
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri,
basta che ne indovini il più possibile.
BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri,
indica quali e quanti numeri ci sono in comune tra i due array" */


//creo 2 variabili linkate all html per il random dei numeri


let button = document.querySelector('button')

//creo l'evento al click del bottone
button.addEventListener("click", (e) => {

    // creo l'array per i numeri randomici
    cpu_array = [];




    // creo il ciclo dei 5 numeri randomici 
    for (let i = 0; i < 5; i++) {
        cpu_array.push(Math.floor(Math.random() * 100));
    }
    // li loggo
    number_cpu = document.getElementById('number_cpu').innerHTML = `${cpu_array}`;

    let second = 29;
    // creo un timer per decrementare i secondi
    let timer = setInterval(() => {

        tempo.innerHTML = `${second}`;
        second--;
        if (second <= -1) {
            
            clearInterval(timer)
            tempo.innerHTML = "TIME IS OVER!";
            number_cpu = document.getElementById('number_cpu').classList.add('d-none');

            let number_user = document.getElementById('number_user')
            let row = document.getElementById('input_form')
            row.classList.remove("d-none")


        } else {
            // Altrimenti, aggiorna il timer visualizzato e decrementa i secondi
            tempo.innerHTML = `${second}`;
        }
        

    }, 10); //RIMETTERE I SECONDI GIUSTI

    let input_time = setTimeout(() => {


        
       
       
        
        
        
       



    }, 30); //RIMETTERE I SECONDI GIUSTI

    //creo una variabile dove andranno inseriti i valori dall'utente





})