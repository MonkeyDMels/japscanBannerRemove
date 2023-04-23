console.log("Starting Japscan Adblock...");

// window.addListener(
//     modifyCSS,
//     {urls: ["*://"]},
//     ["blocking"]
// );


document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
        let blurJap = document.getElementsByClassName('blur-background')[0]
        let popup = document.getElementsByClassName('notice-message')[0];
        console.log("DOM LOADED")
        blurJap.style.display = 'none'
        popup.style.display = 'none' 
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        let blurJap = document.getElementsByClassName('blur-background')[0]
        let popup = document.getElementsByClassName('notice-message')[0];
        console.log("DOM LOADED")

        setTimeout(()=>{
            blurJap.style.display = 'none'
            popup.style.display = 'none' 
            blurJap = document.getElementsByClassName('blur-background')[0]
            console.log(blurJap)
        }, 1000)
       
    }
})



// document.addEventListener('DOMContentLoaded', function() {
//     let blurJap = document.getElementsByClassName('blur-background')[0]
//     let popup = document.getElementsByClassName('notice-message')[0];
//     console.log("DOM LOADED")
//     blurJap.style.display = 'none'
//     popup.style.display = 'none' },
// false);


// window.onload = function modifyCSS(){
//     let blurJap = document.getElementsByClassName('blur-background')[0]
//     let popup = document.getElementsByClassName('notice-message')[0];
//     blurJap.style.display = 'none'
//     popup.style.display = 'none'
// }

