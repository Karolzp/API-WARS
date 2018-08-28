let ajax = {
    take_planets : function() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://swapi.co/api/planets", true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json_dicts_of_planets = JSON.parse(this.responseText);
                dom.create_planets_table(json_dicts_of_planets);
            }
        };
        
    }
}