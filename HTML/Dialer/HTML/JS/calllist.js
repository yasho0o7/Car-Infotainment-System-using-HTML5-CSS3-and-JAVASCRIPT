var num = 0;
var myWindow = null;
function callNumber(number)
{
num=number;
document.getElementById("myText").value = number;
document.getElementById("button1").style.backgroundColor = "#419c21";
document.getElementById("button2").style.backgroundColor = "#bd0404";
}
function clearNumber()
{
num = 0;
document.getElementById("myText").value = "";
document.getElementById("button1").style.backgroundColor = "#A9A9A9";
document.getElementById("button2").style.backgroundColor = "#A9A9A9";
if(myWindow != null)
		{
			myWindow.close();
		}
}
function OpenPopup() {
	if(num !=0)
	{
		if(myWindow != null)
		{
			myWindow.close();
		}
        myWindow=window.open('','','width=200,height=100');
		myWindow.document.write("Calling ... "+num);
		myWindows.right='100px';
		myWindow.focus();
    }
}