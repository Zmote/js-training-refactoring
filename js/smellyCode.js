function generateHTML(customHtmlString) {
    let lines = customHtmlString.split("\n");
    let structure = [];
    for (let i = 0; i < lines.length; i++) {
        let rawRow = lines[i].split(" ");
        let nestLevel = Math.floor(rawRow.length / 4);
        let customElem = rawRow.join("").trim();
        let customElemWithAttr = customElem.split("@");
        customElem = customElemWithAttr[0];
        if (customElem === "h") {
            let elem = "html";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "d") {
            let elem = "div";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "s") {
            let elem = "span";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "sc") {
            let elem = "script";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "l") {
            let elem = "link";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "s") {
            let elem = "span";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "bu") {
            let elem = "button";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "in") {
            let elem = "input";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "bo") {
            let elem = "body";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "la") {
            let elem = "label";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "ta") {
            let elem = "table";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "tby") {
            let elem = "tbody";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "thd") {
            let elem = "thead";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "tft") {
            let elem = "tfoot";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "leg") {
            let elem = "legend";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "s") {
            let elem = "span";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "sel") {
            let elem = "select";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else if (customElem === "op") {
            let elem = "option";
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        } else {
            let elem = customElem;
            let attributes = [];
            for (let i = 1; i < customElemWithAttr.length; i++) {
                let attrs = customElemWithAttr[i].split("=");
                if (attrs.length === 2) {
                    attributes.push({tag: attrs[0], value: attrs[1].split(",").join(" ")});
                }
            }
            structure.push({elem, nestLevel, attributes: attributes});
        }
    }
    $("#outputArea").html(buildHierarchy(structure, 0, document.createElement("div")).children);
}

function buildHierarchy(structure, level, root) {
    if (structure[0].elem) {
        let elem = structure.shift();
        let node = document.createElement(elem.elem);
        for (let i = 0; i < elem.attributes.length; i++) {
            if(elem.attributes[i].tag === "text"){
                let textNode = document.createTextNode(elem.attributes[i].value);
                node.appendChild(textNode);
            }else{
                node.setAttribute(elem.attributes[i].tag, elem.attributes[i].value);
            }
        }
        root.appendChild(node);
    } else {
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
