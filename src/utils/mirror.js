module.exports = function mirrorImage (orgImage) {  
    let imageWidth = orgImage.width;  
    let imageHeight = orgImage.height;  
  
    let tempCanvas = document.createElement('canvas');  
    tempCanvas.width = imageWidth;  
    tempCanvas.height = imageHeight;  
  
    let context = tempCanvas.getContext("2d");  
    context.scale(1, -1);  
    context.translate(0, -imageHeight);  
    context.drawImage(orgImage, 0, 0);  
    let flipImage = context.getImageData(0, 0, imageWidth, imageHeight);  
  
    return {
        canvas: context,
        img: flipImage
    };
};
