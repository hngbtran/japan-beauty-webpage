function zoomIn(element) {
    // Check if this element is already zoomed
    const isZoomed = element.classList.contains('zoomed');
    
    // Remove zoomed class from all containers
    document.querySelectorAll('.img-hover-container.zoomed').forEach(item => {
        item.classList.remove('zoomed');
    });
    
    // Toggle body class based on whether we're zooming in or out
    if (!isZoomed) {
        // Add zoomed class to clicked element
        element.classList.add('zoomed');
        // Add class to body to trigger overlay
        document.body.classList.add('has-zoomed-image');
    } else {
        // Remove class from body to remove overlay
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