function generateHTML(customHtmlString){
    console.log(customHtmlString);
    writeParsedHtml(customHtmlString);
}

function writeParsedHtml(parsedHtml){
    $("#outputArea").html(parsedHtml);
}

$("#resetOutputArea").click(function(){
   $("#outputArea").html("");
});

$("#parseHtmlButton").click(function(){
    generateHTML(editor.getValue());
});
