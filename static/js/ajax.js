let ajax = {
    take_planets_and_display_table : function(page_link) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", page_link, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json_dicts_of_planets = JSON.parse(this.responseText);
                dom.create_pagination(json_dicts_of_planets);
                dom.create_planets_table(json_dicts_of_planets);
                
            }
        };
        
    }
}