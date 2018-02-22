window.onload = function() {
    setImageSrc();
}
window.onresize = function() {
    setImageSrc();
}
    
function setImageSrc() {
        let image = document.getElementById('story-image');
            
            image.src = (window.innerWidth <= 680) 
                ? 'images/content-story_short.png' 
                : 'images/content-story.png';
    }