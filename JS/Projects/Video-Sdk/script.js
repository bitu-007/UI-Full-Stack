const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const toggleVideoButton = document.getElementById('toggleVideoButton');
const muteButton = document.getElementById('muteButton');

let localStream;
let peerConnection;

const servers = {
    iceServers: [
        {
            urls: 'stun:stun.l.google.com:19302'
        }
    ]
};

startButton.addEventListener('click', startLocalStream);
stopButton.addEventListener('click', stopLocalStream);
toggleVideoButton.addEventListener('click', toggleVideo);
muteButton.addEventListener('click', toggleAudio);

async function startLocalStream() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
        startButton.disabled = true;
        stopButton.disabled = false;
        toggleVideoButton.disabled = false;
        muteButton.disabled = false;
    } catch (error) {
        console.error('Error accessing media devices.', error);
    }
}

function stopLocalStream() {
    localStream.getTracks().forEach(track => track.stop());
    localVideo.srcObject = null;
    startButton.disabled = false;
    stopButton.disabled = true;
    toggleVideoButton.disabled = true;
    muteButton.disabled = true;
}

function toggleVideo() {
    const videoTrack = localStream.getVideoTracks()[0];
    videoTrack.enabled = !videoTrack.enabled;
    toggleVideoButton.textContent = videoTrack.enabled ? 'Turn Video Off' : 'Turn Video On';
}

function toggleAudio() {
    const audioTrack = localStream.getAudioTracks()[0];
    audioTrack.enabled = !audioTrack.enabled;
    muteButton.textContent = audioTrack.enabled ? 'Mute Audio' : 'Unmute Audio';
}

function startCall() {
    peerConnection = new RTCPeerConnection(servers);
    peerConnection.onicecandidate = event => {
        if (event.candidate) {
            // Send the candidate to the remote peer
        }
    };

    peerConnection.ontrack = event => {
        remoteVideo.srcObject = event.streams[0];
    };

    localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

    peerConnection.createOffer().then(offer => {
        peerConnection.setLocalDescription(offer);
        // Send the offer to the remote peer
    });
}

function receiveCall(offer) {
    peerConnection = new RTCPeerConnection(servers);
    peerConnection.onicecandidate = event => {
        if (event.candidate) {
            // Send the candidate to the remote peer
        }
    };

    peerConnection.ontrack = event => {
        remoteVideo.srcObject = event.streams[0];
    };

    peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
    localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

    peerConnection.createAnswer().then(answer => {
        peerConnection.setLocalDescription(answer);
        // Send the answer to the remote peer
    });
}
