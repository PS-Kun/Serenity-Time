
let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

let vid1 = document.querySelector('.vid1');
let vid2 = document.querySelector('.vid2');
let vid3 = document.querySelector('.vid3');
let vid4 = document.querySelector('.vid4');

let log1 = document.querySelector('.log1');
let log2 = document.querySelector('.log2');
let log3 = document.querySelector('.log3');
let log4 = document.querySelector('.log4');

let audioIcon = document.querySelector('.audio-icon');
let selectAudio = document.querySelector('.audio-select');
let log0 = document.querySelector('.log0');
let thumbnail = document.querySelector('.thumbnail');

let audio = document.querySelector('.audio');
let audio1 = document.querySelector('.audio1');
let audio2 = document.querySelector('.audio2');
let audio3 = document.querySelector('.audio3');
let audio4 = document.querySelector('.audio4');
let audio5 = document.querySelector('.audio5');

audio1.addEventListener("click", () => {
  if(audio.src !== "./audio/light-drizzle.mp3" ){
  audio.src = "./audio/light-drizzle.mp3";
  audio.muted = false;}
  
})

audio2.addEventListener("click", () => {
  if(audio.src !== "./audio/rain-and-birds.mp3" ){
  audio.src = "./audio/rain-and-birds.mp3";
  audio.muted = false;}
  
})

audio3.addEventListener("click", () => {
  if(audio.src !== "./audio/rain.mp3" ){
  audio.src = "./audio/rain.mp3";
  audio.muted = false;}
  
})

audio4.addEventListener("click", () => {
  if(audio.src !== "./audio/soft-rain.mp3" ){
  audio.src = "./audio/soft-rain.mp3";
  audio.muted = false;}
  
})

audio5.addEventListener("click", () => {
  audio.muted = true;
  
})


if (window.matchMedia("(max-width: 870px)").matches){

log0.addEventListener("click", () => {
  if( thumbnail.style.display !== "none"){
    thumbnail.style.display = "none";
     gsap.to(log0, {
      x: 50,
  })
  }else{
    thumbnail.style.display = "block";
     gsap.to(log0, {
      x: 0
  })
  }

})

}else{

  log0.addEventListener("click", () => {
  if( thumbnail.style.display !== "none"){
    thumbnail.style.display = "none";
     gsap.to(log0, {
      x: 185,
  })
  }else{
    thumbnail.style.display = "block";
     gsap.to(log0, {
      x: 0
  })
  }

})
}


if (window.matchMedia("(max-width: 870px)").matches){

audioIcon.addEventListener("click", () => {
  
  if( selectAudio.style.display !== "none"){
    selectAudio.style.display = "none";
    gsap.to(audioIcon, {
      x: -50,
  })
  }else{
    selectAudio.style.display = "block";
    gsap.to(audioIcon, {
      x: 0
  })
  }

});

}else{

  audioIcon.addEventListener("click", () => {
  
  if( selectAudio.style.display !== "none"){
    selectAudio.style.display = "none";
    gsap.to(audioIcon, {
      x: -189,
  })
  }else{
    selectAudio.style.display = "block";
    gsap.to(audioIcon, {
      x: 0
  })
  }

});

}


setInterval(()=>{
  let currentTime= new Date();  
hrs.innerHTML = currentTime.getHours();
mins.innerHTML = currentTime.getMinutes();
secs.innerHTML = currentTime.getSeconds();
}, 1000); 


log1.addEventListener("click", () => {
  gsap.to(".vid1", {
    zIndex: 1,
    // opacity: 1,
    duration: 0.5
  })

  gsap.from(".vid1", {
    scale: 0,
    duration: 0.8,
    onComplete: () => {
      // reset back to normal size
      gsap.to(".vid1", { scale: 1, duration: 0.3 });
    }

  })

  

  
  vid2.style = "z-index: 0";
  vid3.style = "z-index: 0";
  vid4.style = "z-index: 0";

})

log2.addEventListener("click", () => {
  gsap.to(".vid2", {
    zIndex: 1,
    // opacity: 1,
  })

  gsap.from(".vid2", {
    scale: 0,
    duration: 0.8,
    onComplete: () => {
      // reset back to normal size
      gsap.to(".vid2", { scale: 1, duration: 0.3 });
    }

  })



  vid1.style = "z-index: 0";
  vid3.style = "z-index: 0";
  vid4.style = "z-index: 0";
})

log3.addEventListener("click", () => {
  gsap.to(".vid3", {
    zIndex: 1,
    // opacity: 1,
  })

  gsap.from(".vid3", {
    scale: 0,
    duration: 0.8,
    onComplete: () => {
      // reset back to normal size
      gsap.to(".vid3", { scale: 1, duration: 0.3 });
    }

  })

  vid2.style = "z-index: 0";
  vid1.style = "z-index: 0";
  vid4.style = "z-index: 0";

})

log4.addEventListener("click", () => {
  gsap.to(".vid4", {
    zIndex: 1,
    // opacity: 1,
  })

  gsap.from(".vid4", {
    scale: 0,
    duration: 0.8,
    onComplete: () => {
      // reset back to normal size
      gsap.to(".vid4", { scale: 1, duration: 0.3 });
    }

  })

  vid2.style = "z-index: 0";
  vid3.style = "z-index: 0";
  vid1.style = "z-index: 0";

})
