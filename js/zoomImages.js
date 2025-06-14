function loadZoomInFunction() {
    var images = document.querySelectorAll(".img-hover-container");
    images.forEach(function(img) {
        img.tabIndex = 0;
        img.addEventListener('click', function(event) {
            zoomIn(this);
        });
        img.addEventListener('keydown', function(event) {
            if (event.key === "Enter" || event.key === " ") {
                zoomIn(this);
            }
        });
        img.setAttribute('onblur', 'removeZoomIn()')
    });
}

function zoomIn(element) {
    const isZoomed = element.classList.contains('zoomed');

    document.querySelectorAll('.img-hover-container.zoomed').forEach(item => {
        item.classList.remove('zoomed');
    });
    
    if (!isZoomed) {
        element.classList.add('zoomed');
        document.body.classList.add('has-zoomed-image');
    } else {
        element.classList.remove('zoomed');
        document.body.classList.remove('has-zoomed-image');
    }
}

function removeZoomIn(event) {
    // Don't run if the click was on or inside an image container
    if (event && (event.target.closest('.img-hover-container') || 
                 event.target.classList.contains('img-hover-container'))) {
        return;
    }
    
    // Remove overlay and zoom classes
    document.body.classList.remove('has-zoomed-image');
    
    // Remove zoom from all images
    document.querySelectorAll('.img-hover-container.zoomed').forEach(item => {
        item.classList.remove('zoomed');
    });
}

// Add event listener when document is loaded
document.addEventListener('DOMContentLoaded', 
    function() {
        // Add click handler to body
        document.body.addEventListener('click', removeZoomIn);
    }
);