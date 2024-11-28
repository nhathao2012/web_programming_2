function calcCuboidArea(aWidth, aHeight, aLength) {
    const area = aWidth * aHeight * aLength;
    return area;
  }
  
function calcRectangleArea(aWidth, aHeight) {
    const area = aWidth * aHeight;
    return area;
}
  
function doCalc() {
    document.getElementById("areaCalc").innerHTML = "";
  
    const newWidth = parseFloat(document.getElementById("width").value);
    const newHeight = parseFloat(document.getElementById("height").value);
    const newLength = parseFloat(document.getElementById("length").value);
    
    if (typeof newLength !== 'undefined' && newLength !== null) {
      const newArea = calcCuboidArea(newWidth, newHeight, newLength);
      document.getElementById("areaCalc").innerHTML += "The area of the cuboid " + newWidth + " x " + newHeight + " x " + newLength + " is " + newArea + "</br>";
    } else {
      const newArea = calcRectangleArea(newWidth, newHeight);
      document.getElementById("areaCalc").innerHTML += "The area of the rectangle " + newWidth + " by " + newHeight + " is " + newArea + "</br>";
    }
}