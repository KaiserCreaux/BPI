var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {

	var xmlHttp;

	if (window.ActiveXObject){
		try{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			xmlHttp = false;
		}
	} else{
		try{
			xmlHttp = new XMLHttpRequest();
		} catch (e) {
			xmlHttp = false;
		}
	} if (!xmlHttp) {
		alert("Could not create XML Object");
	} else {
		return xmlHttp;
	}
}
//First, the user's manual sentence checker and poster.
function yourSentence() { //Initiates contact with the server when user creates a sentence

		input = encodeURIComponent(document.getElementById("userInput").value);
		xmlHttp.open("GET", "entry.php?input="+input, true);
		xmlHttp.onreadystatechange = handleServerResponse;
		xmlHttp.send();
}

function handleServerResponse () { //retrieves the XML and displays it

	if ( xmlHttp.readyState==4 )
		if ( xmlHttp.status==200) {
		xmlResponse = xmlHttp.responseXML;
		xmlDocumentElement = xmlResponse.documentElement;
		message = xmlDocumentElement.firstChild.textContent;
		document.getElementById("underInput").innerHTML = '<span style="color:blue">' + message + '</span>';
		//Hack to get the user's sentence to read on the sentence output
		if ( message == 'Looks good to me, but I\'m really only capable of spotting punctuation.'){
			input = decodeURIComponent(input);
			document.getElementById("sentenceOutput").innerHTML = input; //We're using input so interacting with the page again auto-clears old inputs.
		} else if ( message == 'I\'m doing this with Ajax.' || message == 'Of course, I\'m also using Google Fonts to make the page prettier.' || message == 'Responsive (via Bootstrap) if you\'d like to bust out the smart phone.' || message == 'Try out your own sentence:'){
			document.getElementById("sentenceOutput").innerHTML = message; 
		}
	}
}

//For the clickable sentences
function click(i) { //Initiates contact with the server when user clicks a sentence
		input = i;
		xmlHttp.open("GET", "sentences.php", true);
		xmlHttp.onreadystatechange = handleServerResponse;
		xmlHttp.send();
}

function click1() {
	click(1);
	document.getElementById("sentenceOutput").innerHTML = input;
	}

function click2() {
	click(2);
	document.getElementById("sentenceOutput").innerHTML = input;
	}
	
function click3() {
	click(3);
	document.getElementById("sentenceOutput").innerHTML = input;
	}

	function click4() {
	click(4);
	document.getElementById("sentenceOutput").innerHTML = input;
	}
