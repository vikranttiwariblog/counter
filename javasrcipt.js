let textbox = document.getElementById("textbox");

textbox.addEventListener("input",function(){
    let text = this.value;

    document.getElementById("char").innerHTML = text.length;

    text = text.trim();
    let word = text.split(" ");

    let cleanList = word.filter(function(element){return element != ""})

    document.getElementById("word").innerHTML = cleanList.length;
});