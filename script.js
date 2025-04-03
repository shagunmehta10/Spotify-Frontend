console.log("welcome to spotify");
//initialize variables
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');

let songs = [
  { songsName: "idol", filePath: "WhatsApp Audio 2024-09-07 at 15.06.41_17e7bfd7.mp3" }
  

]

// audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        )
    }
}
//listen to events
myProgressBar.addEventListener('timeupdate',()=>){
    console.log('timeupdate');
    //update seekbar
}