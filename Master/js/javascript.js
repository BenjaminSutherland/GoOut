var curPage = 0;
var nextPage = 1;
var globalPressed = '';
var arrowHidden='previous';
function newDiv(eventName, groupNum, eventLoc, theDate, topValue) {
				//Adding new div and it's class
				var divElement = document.createElement("Div");
				divElement.id = "divID";
				divElement.className = "event";
				
				//Styling Div
				divElement.style.top = topValue;
								
				// Creating the bottom bar list
				var list = document.createElement("ul");
				list.className = "info";
								
				//Creating title
				var title = document.createElement("h1")
				title.className = "title";
				divElement.appendChild(title);
				var text = document.createTextNode(eventName);
				title.appendChild(text);

				//Creating Status Image
				var status = document.createElement("a")
				status.className = "maybe";
				divElement.appendChild(status);
				
				
				//CREATING LIST ELEMENTS
				
				//Creating groupicon
				var groupicon = document.createElement("li")
				groupicon.className = "groupicon";
				list.appendChild(groupicon);
				divElement.appendChild(list);
				
				//Creating locationicon
				var locationicon = document.createElement("li")
				locationicon.className = "locationicon";
				list.appendChild(locationicon);
				divElement.appendChild(list);
				
				//Creating calendaricon
				var calendaricon = document.createElement("li")
				calendaricon.className = "calendaricon";
				list.appendChild(calendaricon);
				divElement.appendChild(list);
				
				//Creating groupnum text
				var groupnum = document.createElement("li")
				groupnum.className = "groupnum";
				list.appendChild(groupnum);
				var text = document.createTextNode(groupNum);
				groupnum.appendChild(text);
				divElement.appendChild(list);
				
				//Creating location text
				var location = document.createElement("li")
				location.className = "location";
				list.appendChild(location);
				var text = document.createTextNode(eventLoc);
				location.appendChild(text);
				divElement.appendChild(list);
				
				//Creating date text
				var date = document.createElement("li")
				date.className = "date";
				list.appendChild(date);
				var text = document.createTextNode(theDate);
				date.appendChild(text);
				divElement.appendChild(list);



				// Appending the div element to body
				document.getElementsByTagName("body")[0].appendChild(divElement);
				}
				



var pageContents = [
  ['#eventname', '#category', '#description', '#requirements', '#cost'],
  ['#location', '#startdate', '#starttime', '#enddate', '#endtime'],
  ['#invites', '#radio1', '#radio2', '#radio3', '#radio4', '#maxpeople', '#photogallery', '#photogallery2', '#notify2', '#notify']
];

function classAssigner(item, classNameParam) {
  //finds the element and assigns it the proper class, or an empty string
  var curElement = document.querySelector(item);
  curElement.className = classNameParam;
}

//this function gets called dueto the onclick attribute in the html on the button
function pageChanger(pressed ,pageContentArray) {
  globalPressed = pressed;
  if (pressed=='next'){
  nextPage = curPage + 1;
  }
  else {
  nextPage = curPage - 1
  }
  //calls classAssigner for each item in the curPage index of the pageContent array
  pageContentArray[curPage].forEach(function(item) {
    if (document.querySelector(item).className == 'radioLabel' ){
        classAssigner(item, 'radioLabelHidden');
    }
    else {
        classAssigner(item, 'formfieldhidden') }
  });
  
  //calls classAssigner for each item in the nextPage index of the pageContent array
  pageContentArray[nextPage].forEach(function(item) {
    if (document.querySelector(item).className == 'radioLabelHidden' ){
        classAssigner(item, 'radioLabel');
    }
    else {
        classAssigner(item, 'formfield') }
  });
  if (globalPressed=='next'){
  curPage = curPage + 1;
  }
  else {
  curPage = curPage - 1
  }
  if (pageContents.length===(curPage+1)) {
  	classAssigner('.nextpage','nextPageHidden')
  	arrowHidden='next';
    	classAssigner('.neweventHidden','newevent');
  	}
  else if (arrowHidden=='next') {
  	classAssigner('.nextPageHidden','nextpage');
	classAssigner('.newevent','neweventHidden');
  	arrowHidden='';
  	}
  if (curPage==0) {
  	classAssigner('.previouspage','previousPageHidden')
  	arrowHidden='previous';
  	}
  else if (arrowHidden=='previous') {
  	classAssigner('.previousPageHidden','previouspage');
  	arrowHidden='';
  	}
}




function openNav() {
    			document.getElementById("mySidenav").style.width = "80%";
                document.getElementById("sidenavEffect").style.width = "101%";
                
    			//document.getElementById("ac").style.opacity = 0.5;
    			//document.getElementById("beach").style.opacity = 0.5;    			
				}
function closeNav() {
    			document.getElementById("mySidenav").style.width = "0";
                document.getElementById("sidenavEffect").style.width = "0%";
    			//document.getElementById("ac").style.opacity = 1.0;
    			//document.getElementById("beach").style.opacity = 1.0;					
    			}	


