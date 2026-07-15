document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('videoPlayer');
    const TARGET_URL = 'https://minecraft.easyplay.dpdns.org';
    const VIDEO_URL = 'https://videotourl.com/videos/1784096126923-25d64259-e871-4a35-81a2-bf961fa8cd73.mp4';
    
    function redirectToTarget() {
        window.location.href = TARGET_URL;
    }
    
    video.addEventListener('ended', redirectToTarget);
    
    video.addEventListener('error', function(e) {
        redirectToTarget();
    });
    
    video.src = VIDEO_URL;
    video.play().catch(function(e) {
        redirectToTarget();
    });
});
