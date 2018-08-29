let ajax = {
    get_planets_and_display_table : function(page_link) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", page_link, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json_dicts_of_planets = JSON.parse(this.responseText); 
                 
                dom.create_planets_table(json_dicts_of_planets);                
            }
        };  
    },


    get_residents_and_display_modal : function(residents_links_list,planet_name){
        document.getElementsByClassName("modal-title")[0].innerHTML = "Residents of " + planet_name;
        document.getElementById("modalTableBody").innerHTML = "";
        var list_of_residents_dict = [];
        residents_links_list.forEach(link => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", link, true);
            xhttp.send();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                list_of_residents_dict.push(JSON.parse(this.responseText));
                if (list_of_residents_dict.length == residents_links_list.length){
                    dom.fill_up_residents_modal(list_of_residents_dict, planet_name);
                }
            }
            }; 
        });           
    }

}