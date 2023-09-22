

let elem = document.getElementById('titre')
console.log();

let onClick = () => {
    if(getComputedStyle(elem).color === 'rgb(127, 255, 0)'){
        elem.style.color = 'purple'
    }
    else{
        elem.style.color = 'chartreuse'
    }
        
}