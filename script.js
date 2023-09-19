var select = document.getElementById("select").addEventListener("click", ()=>{
    list.classList.toggle("open");
})
var list = document.getElementById("list");
var select_text = document.getElementById("select_text");
var options = document.getElementsByClassName("options")
var input_field = document.getElementById("input_field");

for(option of options){
    option.onclick = function(){
        select_text.innerHTML = this.innerHTML;
        input_field.placeholder = "Search In " + select_text.innerHTML;
    }
}