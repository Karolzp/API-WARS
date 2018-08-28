let dom = {
    create_planets_table : function(json_dicts_of_planets){
        var planets = json_dicts_of_planets.results;
        var table = document.getElementsByClassName("table table-bordered")[0];
        
        
        
        
        // create thead
        var thead = document.createElement("thead");
        var tr_head = document.createElement("tr");
        var names = {0:"Name",1:"Diameter", 2:"Climate",3: "Terrain", 4:"Surface Water Percentage",5: "Population", 6:"Residents"};

        for (var elem in names){
            var th_head = document.createElement("th");
            var text_to_display = document.createTextNode(names[elem])
            th_head.appendChild(text_to_display)
            tr_head.appendChild(th_head)
        }
        thead.appendChild(tr_head)
        table.appendChild(thead)

        //create tbody
        var tbody = document.createElement("tbody");
        var headers_for_planets = {0:"name",1:"diameter", 2:"climate",3: "terrain", 4:"surface_water",5: "population", 6:"residents"}
                  
        planets.forEach(element => {
            var tr_body = document.createElement("tr")
            for (var head in headers_for_planets){
                var th_body = document.createElement("td");
                if (headers_for_planets[head] == "residents"){
                    if (element["residents"].length > 0){
                        var btn = document.createElement("button");
                        let text = element["residents"].length
                        var text_to_display = document.createTextNode(text.toString() + " resident(s)")
                        btn.appendChild(text_to_display)
                        th_body.appendChild(btn)
                        
                    }
                    else{
                        var text_to_display = document.createTextNode("No known residents")
                        th_body.appendChild(text_to_display)
                        
                    }
                }
                else{
                    var text_to_display = document.createTextNode(element[headers_for_planets[head]])
                    th_body.appendChild(text_to_display)
                }

                
                tr_body.appendChild(th_body)
            }
        tbody.appendChild(tr_body)
        table.appendChild(tbody)
                
            });
            

        }

        
        // for (var i=0; i <10; i++) {
        //     var text = document.createTextNode()
        // }
    }


