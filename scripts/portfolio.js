window.onload = function() {
    if(window.innerWidth < 1072) {
        resizeMarginsInGallery();
    }
}
window.onresize = function() {
        resizeMarginsInGallery();
}
    
function resizeMarginsInGallery() {
        const images = document.getElementsByClassName('gallery-image');
        const emptyContainers = document.getElementsByClassName('fillingEmptySpace');
        let diffMax = images[2].firstChild.offsetHeight - images[0].firstChild.offsetHeight;
        let diffMin = images[2].firstChild.offsetHeight - images[1].firstChild.offsetHeight;
        let imageWidth = images[0].offsetWidth;
        let button = document.getElementById('button');
        let imageMarginBottom = images[0].firstChild.offsetHeight * 0.1;
        
        images[3].style.marginTop = -diffMax + 'px';
        images[6].style.marginTop = -diffMax + 'px';
        images[7].style.marginTop = -diffMax + 'px';
        images[4].style.marginTop = -diffMin + 'px';
        images[9].style.marginTop = -diffMin + 'px';
        
        for(var i = 0; i < emptyContainers.length; i++) {
            emptyContainers[i].style.width = imageWidth + 'px';
        }
        
        for(var i = 0; i < images.length - 1; i++) {
            images[i].style.marginBottom = imageMarginBottom + 'px';
        }
        
        images[9].style.marginBottom = images[0].firstChild.offsetHeight * 0.63 + 'px';
        button.style.bottom = images[0].firstChild.offsetHeight * 0.63  - imageMarginBottom - button.offsetHeight + 'px';
    }
