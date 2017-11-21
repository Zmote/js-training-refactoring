function generateHTML(customHtmlString){
    //TODO: Write Parsing Code for Custom HTML Syntax

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
