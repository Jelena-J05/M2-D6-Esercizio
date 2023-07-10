//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
        const Changeh1 = function () {
            document.querySelector('h1').innerHTML = 'Modern Smarthphone Shop'
            }
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
        const ChangeBackground = function () {
            document.querySelector ('body').style.backgroundColor.innerHTML ='yellow'
            }

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio.
        const ChangeAddress= function () {
            document.querySelector ('#Address').innerHTML = 'Viale Unione, Milano (MI)'
            }
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

        const AddClassLink = function () {
        let aLink = document.querySelectorAll ('a')
        for (let link of aLink) {
        link.classList.add ("new-Link")
        }
        }
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
//Per aggiungere la classe:

        const AddImageClass = function () {
        let Images = document.querySelectorAll ('img')
        for (let image of Images) {
        image.classList.toggle ("class-image")
        }
        }

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

        const getRandomColor = function () {
        const red = Math.round(Math.random() * 255)
        const green = Math.round(Math.random() * 255)
        const blue = Math.round(Math.random() * 255)
        return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
        }
    
        const setRandomColor = function () {
        const randomColor = getRandomColor()
        let prices = document.querySelectorAll('.price')
        for (let price of prices) {
        price.style.color = randomColor
        }
        }
