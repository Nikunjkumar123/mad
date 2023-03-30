console.log("Welcome to mad-music");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Sagar Jaisi Aankhon Wali ", filePath: "songs/1.mp3", coverPath: "covers/11.jpg"},
    {songName: "Tune O Rangeele Kaisa Jadu Kiya", filePath: "songs/11.mp3", coverPath: "covers/1.jpg"},
    {songName: "Chand Sifarish", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Kya Khoob Lagti Ho", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Hai Apna Dil To Awara", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Chura Liya Hai Tumne Jo Dil Ko ", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Mere Sapno Ki Rani Kab ", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Mehbooba Mehbooba", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Dhoop Mein Nikla Na Karo", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Maine Poocha Chand Se", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: " mera mehboob aya hh ", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "do ghoot", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "an evening in paris", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "badan pe sitare", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Hai Apna Dil To Awara", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "yeh galiya yeh chubara ", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "yeh mera prem patra ", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "bheegi bheegi", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "Dhoop Mein Nikla Na Karo", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {songName: "ho gayi shaam", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},

]
// console.log(songItems)
// console.log(songs);
songItems.forEach((element, i)=>{
// console.log(songs[i]);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;

    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
