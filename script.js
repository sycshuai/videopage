document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('videoPlayer');
    const TARGET_URL = 'https://minecraft.easyplay.dpdns.org';
    const VIDEO_FOLDER = 'videos/';
    
    const videoExtensions = ['.mp4', '.webm', '.ogg'];
    
    let videoIndex = 0;
    
    function findVideo() {
        const videoFiles = videoExtensions.map(ext => VIDEO_FOLDER + 'video' + ext);
        tryLoadVideo(videoFiles, 0);
    }
    
    function tryLoadVideo(videoFiles, index) {
        if (index >= videoFiles.length) {
            setTimeout(redirectToTarget, 1000);
            return;
        }
        
        const testVideo = document.createElement('video');
        testVideo.src = videoFiles[index];
        
        testVideo.onloadedmetadata = function() {
            video.src = videoFiles[index];
            video.play();
        };
        
        testVideo.onerror = function() {
            tryLoadVideo(videoFiles, index + 1);
        };
    }
    
    function redirectToTarget() {
        window.location.href = TARGET_URL;
    }
    
    video.addEventListener('ended', redirectToTarget);
    
    video.addEventListener('error', function(e) {
        redirectToTarget();
    });
    
    findVideo();
});
