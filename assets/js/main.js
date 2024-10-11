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
let number_user = document.getElementById('number_user')
let col = document.getElementById('input_form')
let button2 =document.getElementById('submit2')






//creo l'evento al click del bottone
 button.addEventListener("click", (e) => {
    e.preventDefault()
    // creo l'array per i numeri randomici
   




    // creo il ciclo dei 5 numeri randomici 
   
    let second = 31;
    // creo un timer per decrementare i secondi
    let timer = setInterval(() => {

        tempo.innerHTML = `${second}`;
        second--;
        if (second <= -1) {

            clearInterval(timer)
            tempo.innerHTML = "INSERT THE NUMBERS!";
            number_cpu = document.getElementById('number_cpu').classList.add('d-none');
            col.classList.remove("d-none")


        } else {
            // Altrimenti, aggiorna il timer visualizzato e decrementa i secondi
            tempo.innerHTML = `${second}`;
        }
       

        
    }, 1000); //RIMETTERE I SECONDI GIUSTI

   
    cpu_array = []; 
    for (let i = 0; i < 5; i++) {
        cpu_array.push(Math.floor(Math.random() * 100));
    }
    // li loggo
    number_cpu = document.getElementById('number_cpu').innerHTML = `${cpu_array}`;
    
    
    

 



 }) 


 const formEL = document.querySelector('form')


let button_form = document.getElementById('button_form')

button2.addEventListener('click', (event)=>{
    
    event.preventDefault()

    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const value3 = document.getElementById('value3').value;
    const value4 = document.getElementById('value4').value;
    const value5 = document.getElementById('value5').value;
    console.log("Value 1: ", value1);
    console.log("Value 2: ", value2);
    console.log("Value 3: ", value3);
    console.log("Value 4: ", value4);
    console.log("Value 5: ", value5);

     let array_of_value = [value1, value2, value3, value4, value5]
    console.log(array_of_value);
    console.log(cpu_array);
    
    for (let i = 0; i < cpu_array.length; i++) {
        let includes = array_of_value[i].includes(cpu_array[i])

        if (includes ==true) {
            alert("you win")
        }else{
            alert("you lose!")
        }
        break;
    }
    
    

})





