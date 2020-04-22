'use strict';


//Setting up different video constraints for testing
const mediaStreamConstraints = {
    video : true,
    audio : true
}

//Output stream will be placed here. This is from the Local Camera
const localVideo = document.querySelector("video");

//Variable for getting local stream
let localStream;

//Function to handle success of getUserMedia
//Applies it to localVideo and localStream
function gettingLocalMediaStream(mediastream){
    localStream = mediastream;
    localVideo.srcObject = mediastream;
    localVideo.srcObject.getAudioTracks()[0].enabled=false;
}

//Function to handle error of getUserMedia
function gettingLocalMediaStreamError(error){
    console.log("navigator.mediaDevices.getUserMedia Error : ", error );
}

//Getting the actual Video from Camera.
//If success call the success function, which saves it to 
//localStream  > For sending out later 
//and LocalVideo > To show self view
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
    .then(gettingLocalMediaStream).catch(gettingLocalMediaStreamError)

//Mute buttons test

var vidtrackstate = true;
var audtracktate = false;
var videoMuteBtn = document.querySelector("#vidmute");
var audioMuteBtn = document.querySelector("#audmute");
videoMuteBtn.addEventListener("click",function(){
    if(vidtrackstate){
        localVideo.srcObject.getVideoTracks()[0].enabled=false;
        videoMuteBtn.textContent="Unmute Video";
        videoMuteBtn.className="ui inverted green button";

    }else {
        localVideo.srcObject.getVideoTracks()[0].enabled=true;
        videoMuteBtn.textContent="Mute Video";
        videoMuteBtn.className="ui inverted red button";
    }
    vidtrackstate=!vidtrackstate;
})

audioMuteBtn.addEventListener("click",function(){
    if(audtracktate){
        localVideo.srcObject.getAudioTracks()[0].enabled=false;
        audioMuteBtn.textContent="Unmute Audio";
        audioMuteBtn.className="ui inverted green button";
    }else {
        localVideo.srcObject.getAudioTracks()[0].enabled=true;
        audioMuteBtn.textContent="Mute Audio";
        audioMuteBtn.className="ui inverted red button";
    }
    audtracktate=!audtracktate;
})
