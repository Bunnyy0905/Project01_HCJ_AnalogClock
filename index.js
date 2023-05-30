// Using document to acess and making changes in html elements
/* It is the most common way to access an HTML element is to use the id of the element.
Here, the getElementById method is used to find the element*/

// document.getElementById(id)-->Find an element by element id  
let hr = document.getElementById('hour')
let min = document.getElementById('minute')
let sec = document.getElementById('second')



function displayTime(){
    let d = new Date(); //Getting hour, mins, secs from date
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    //Calculating the Rotation 
    let hrotation = 30*htime + mtime/2;
    let mrotation = 6*mtime;
    let srotation = 6*stime;

    // Setting CSS
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}

setInterval(displayTime,1000);
/*repeat it after every 1000 millisecond ie. 1 second*/
