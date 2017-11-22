
function generateHTML(customHtmlString) {
    let lines = customHtmlString.split("\n");
    let structure = [];
    for (let i = 0; i < lines.length; i++) {
        let rawRow = lines[i].split(" ");
        let nestLevel = Math.floor(rawRow.length / 4);
        let customElem = rawRow.join("").trim();
        if(customElem === "h"){
            let elem = "html";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "d"){
            let elem = "div";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "s"){
            let elem = "span";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "sc"){
            let elem = "script";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "l"){
            let elem = "link";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "s"){
            let elem = "span";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "bu"){
            let elem = "button";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "in"){
            let elem = "input";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "bo"){
            let elem = "body";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "la"){
            let elem = "label";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "ta"){
            let elem = "table";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "tby"){
            let elem = "tbody";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "thd"){
            let elem = "thead";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "tft"){
            let elem = "tfoot";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "leg"){
            let elem = "legend";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "s"){
            let elem = "span";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "sel"){
            let elem = "select";
            structure.push({elem, nestLevel, children: []});
        }else if(customElem === "op"){
            let elem = "option";
            structure.push({elem, nestLevel, children: []});
        }else{
            let elem = customElem;
            structure.push({elem, nestLevel, children: []});
        }
    }
    $("#outputArea").html(buildHierarchy(structure, 0, document.createElement("div")).children);
}

function buildHierarchy(structure, level, root) {
    if(structure[0].elem){
        root.appendChild(document.createElement(structure.shift().elem));
    }else{
        structure.shift();
    }
    if (structure.length && structure[0].nestLevel > level) {
        buildHierarchy(structure, structure[0].nestLevel, root.children[root.children.length - 1]);
    }
    if (structure.length && structure[0].nestLevel === level) {
        buildHierarchy(structure, structure[0].nestLevel, root);
    }
    return root;
}

$("#resetOutputArea").click(function () {
    $("#outputArea").html("");
});

$("#parseHtmlButton").click(function () {
    generateHTML(editor.getValue());
});
