const searchEmoji = (e) => {
    let value = e.target.value;
    //console.log(value);
    displayResults(value);
}

    const displayResults = (searchQuery = " ") => {
        const filteredResult = emojiList.filter(e=>{
            if(e.description.indexOf(searchQuery) != -1){
                return true;
            }
            if(e.aliases.some(elem=>elem.startsWith(searchQuery))){
                return true;
            }
        });
        //console.log(filteredResult);

        const parent = document.getElementById("search_result_container");


        parent.innerHTML = "";

        filteredResult.forEach((e) => {
         let new_row = document.createElement("tr");
         let new_emoji = document.createElement("td");
         let new_alisas = document.createElement("td");
         let new_description = document.createElement("td");

         new_emoji.innerHTML = e.emoji;
         new_alisas.innerHTML = e.aliases.join(" ");
         new_description.innerHTML = e.description;
         //console.log(new_alisas);

         new_emoji.classList.add("emoji")
         new_alisas.classList.add("alisas")
         new_description.classList.add("desc")

         new_row.appendChild(new_emoji);
         new_row.appendChild(new_alisas);
         new_row.appendChild(new_description);

         parent.appendChild(new_row);

    

    });
};

document.getElementById("search_field").addEventListener("keyup", searchEmoji);
window.onload =() => displayResults();






