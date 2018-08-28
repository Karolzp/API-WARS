let dom = {
    next : null,
    previous : null,

    create_pagination : function(json_dicts_of_planets){
        this.next = json_dicts_of_planets.next;
        this.previous = json_dicts_of_planets.previous;

        var pagination = document.getElementsByClassName("pagination")[0];
        pagination.innerHTML = "";

        // create previos page button
        var previous_page = document.createElement("li");
        previous_page.setAttribute("class", "page-item");
        var previous_button = document.createElement("button");
        previous_button.setAttribute("type", "button");
        previous_button.setAttribute("class", "previos");
        previous_button.setAttribute("onclick", "ajax.take_planets_and_display_table(dom.previous)");
        var text_to_display = document.createTextNode("Previous")
        previous_button.appendChild(text_to_display);
        previous_page.appendChild(previous_button); 
        pagination.appendChild(previous_page)

        // create next page button
        var next_page = document.createElement("li");
        next_page.setAttribute("class", "page-item");
        var next_buttton = document.createElement("button");
        next_buttton.setAttribute("type", "button");
        next_buttton.setAttribute("class", "next");
        next_buttton.setAttribute("onclick", "ajax.take_planets_and_display_table(dom.next)");
        var text_to_display = document.createTextNode("Next")
        next_buttton.appendChild(text_to_display);
        next_page.appendChild(next_buttton); 
        pagination.appendChild(next_page)
    },


    create_planets_table : function(json_dicts_of_planets){
        var planets = json_dicts_of_planets.results;
        var table = document.getElementsByClassName("table table-bordered")[0];
        table.innerHTML = "";
        
        
        
        
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


