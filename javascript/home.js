
var x;
function setup()
{
	weatherCall();
	time();
}

function action(event)
{
	if(event.button == 0)
	{
		
	}
}



function slideBar()
{
	var slideBar = document.getElementById("slide");
	
	if(slideBar.style.display == '' || slideBar.style.display == "none")
	{
		slideBar.style.display = "block";
	}
	else
	{
		slideBar.style.display = "none";
	}
}

function slideBarBlock()
{
	var slideBar = document.getElementById("slide");
	
	slideBar.style.display = "none";
}

function searchIcon()
{
	var searchBar = document.getElementById("search");
	var searchIcon = document.getElementById("searchIcon");
	
	if(searchBar.style.display == "" || searchBar.style.display == "none")
	{
		searchBar.style.display = "block";
		
	}
	else
	{
		searchBar.style.display = "none";
		
	}
}
function searchIconBlock()
{
	var searchBar = document.getElementById("search");
	var searchIcon = document.getElementById("searchIcon");
	
		searchBar.style.display = "none";
}
function visibility(event, value)
{
    if(event.target.tagName == "IMG")
    {
        
		if(value ==  1)
		{
			slideBar();
			searchIconBlock();
		}
		else if(value == 2)
		{
			searchIcon();
			slideBarBlock();
		}
		else
		{
			searchIconBlock();
			slideBarBlock();
		}
    }
    else
    {
        alert("This is ELSE portion");
    }
}


function weatherCall()
{
	var apiCall;
    apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&APPID=58dbadc09a2eb83225b7d177ba78ab0a';
    $.getJSON(apiCall, weatherCallback);
}
function weatherCallback(weatherData)
{
    console.log(weatherData.main.temp);
    document.getElementById("temprature").innerHTML = weatherData.main.temp+"&#176;";
}
function weatherIcon(x)
{
    var image = document.getElementById("weatherIcon");
    if(x <= 6 || x >=19)
    {
        image.src = "images/icons/weather/017-night.png";
    }
}
function time()
{
	var date = new Date();
	 var hr = date.getHours();
	 var mn = date.getMinutes();
	 var sc = date.getSeconds();
         var ampm = "am";
         
         weatherIcon(hr);
         if(mn < 10)
         {
             mn = "0" + mn;
         }
         if(sc < 10)
         {
             sc = "0" + sc;
         }
         if(hr > 12)
         {
             hr -= 12;
             ampm = "pm";
         }
	 document.getElementById("time").innerHTML = hr + " : " + mn + " : " + sc + "    " + ampm;
	 setTimeout('time()', 1000);
}
