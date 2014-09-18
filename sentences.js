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

function yourSentence() { //Initiates contact with the server when user creates a sentence

		input = encodeURIComponent(document.getElementById("userInput").value);
		//alert(input);
		xmlHttp.open("GET", "sentences.php?input="+input, true);
		xmlHttp.onreadystatechange = handleServerResponse;
		xmlHttp.send();
}

function handleServerResponse () {

	if ( xmlHttp.readyState==4 )
		if ( xmlHttp.status==200) {
		xmlResponse = xmlHttp.responseXML;
		xmlDocumentElement = xmlResponse.documentElement;
		message = xmlDocumentElement.firstChild.textContent;
		document.getElementById("underInput").innerHTML = '<span style="color:blue">' + message + '</span>';
		//Hack to get the user's sentence to read on the sentence output
		if ( message == 'Looks good to me, but I\'m really only capable of spotting punctuation.'){
			document.getElementById("sentenceOutput").innerHTML = input;
			}
	}
}

