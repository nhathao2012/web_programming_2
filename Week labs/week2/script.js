function calcRectangleArea(aWidth, aHeight)
{
    const area = aWidth*aHeight;
    return area;
}
function doCalc()
{
    const newWidth = document.getElementById("width").value;
    const newHeight = document.getElementById("height").value;
    const newArea = calcRectangleArea(newWidth,newHeight);
    document.getElementById("areaCalc").innerHTML+="the are a of the rectangle "+ newWidth + " by " + newHeight 
    + " is "+ newArea
    + "</br>";

}