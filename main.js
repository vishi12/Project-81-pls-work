function get_paragraph_1() {
    var input=[];
    for (var i = 1 ; i<=6 ; i++){
        input.push(document.getElementById("p1_input_box_" + i).value);
        input.join(". ");
        document.getElementById("display_p1").innerHTML = input.join(". ");
   }
}