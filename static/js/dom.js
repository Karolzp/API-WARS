let dom = {
    next : null,
    previous : null,

    create_navbar : function(){
        let navbar = document.createElement('nav');
        navbar.setAttribute('class', 'navbar navbar-expand-sm bg-dark navbar-dark fixed-top')
        navbar.setAttribute('id', 'navbar')
        document.body.appendChild(navbar);
        document.getElementById('navbar').innerHTML =
                '<ul class="navbar-nav">'
                    +'<li class="nav-item">'
                        +'<a class="nav-link" href="#">Planet list</a>'
                    +'</li>'
                    +'<li class="nav-item">'
                        +'<a class="nav-link" href="#">Voting statistics</a>'
                    +'</li>'
                    +'<li class="nav-item">'
                        +'<a class="nav-link" href="#">Registration</a>'
                    +'</li>'
                    +'<li class="nav-item">'
                        +'<a class="nav-link" href="#">Login</a>'
                    +'</li>'
                    +'<li class="nav-item">'
                        +'<a class="nav-link" href="#">Logout</a>'
                    +'</li>'
                +'</ul>'
                +'<span class="navbar-text"></span>'
    },


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
        previous_button.setAttribute("class", "btn btn-primary");
        previous_button.setAttribute("onclick", "ajax.get_planets_and_display_table(dom.previous)");
        var text_to_display = document.createTextNode("Previous");
        previous_button.appendChild(text_to_display);
        previous_page.appendChild(previous_button); 
        pagination.appendChild(previous_page);

        // create next page button
        var next_page = document.createElement("li");
        next_page.setAttribute("class", "page-item");
        var next_buttton = document.createElement("button");
        next_buttton.setAttribute("type", "button");
        next_buttton.setAttribute("class", "btn btn-primary");
        next_buttton.setAttribute("onclick", "ajax.get_planets_and_display_table(dom.next)");
        var text_to_display = document.createTextNode("Next");
        next_buttton.appendChild(text_to_display);
        next_page.appendChild(next_buttton); 
        pagination.appendChild(next_page);
    },


    create_planets_table : function(json_dicts_of_planets){
        var planets = json_dicts_of_planets.results;
        var table = document.getElementsByClassName("table table-bordered")[0];
        table.innerHTML = "";
            
        // create thead
        var thead = document.createElement("thead");
        thead.setAttribute("class", "thead-dark");
        var tr_head = document.createElement("tr");
        var names = {0:"Name",1:"Diameter", 2:"Climate",3: "Terrain", 4:"Surface Water Percentage",5: "Population", 6:"Residents"};

        for (var elem in names){
            var th_head = document.createElement("th");
            var text_to_display = document.createTextNode(names[elem]);
            th_head.appendChild(text_to_display);
            tr_head.appendChild(th_head);
        }
        thead.appendChild(tr_head);
        table.appendChild(thead);

        //create tbody
        var tbody = document.createElement("tbody");
        var headers_for_planets = {0:"name",1:"diameter", 2:"climate",3: "terrain", 4:"surface_water",5: "population", 6:"residents"};
                  
        planets.forEach(element => {
            var tr_body = document.createElement("tr");
            for (var head in headers_for_planets){
                var td_body = document.createElement("td");
                if (headers_for_planets[head] == "residents"){
                    if (element["residents"].length > 0){
                        var btn = document.createElement("button");
                        btn.setAttribute("type", "button");
                        btn.setAttribute("class","btn");
                        btn.setAttribute("data-toggle","modal");
                        btn.setAttribute("data-target","#myModal");
                        btn.onclick = function() { ajax.get_residents_and_display_modal(element["residents"],element["name"]) };
                        let number_of_residents = element["residents"].length;
                        var text_to_display = document.createTextNode(number_of_residents.toString() + " resident(s)");
                        btn.appendChild(text_to_display);
                        td_body.appendChild(btn);                        
                    }
                    else {
                        var text_to_display = document.createTextNode("No known residents");
                        td_body.appendChild(text_to_display);   
                    }
                }
                else if (headers_for_planets[head] == 'diameter'){
                    var text_to_display = document.createTextNode(parseInt(element[headers_for_planets[head]]).toLocaleString() + " km")
                    td_body.appendChild(text_to_display)
                }
                else if (headers_for_planets[head] == 'surface_water' && element[headers_for_planets[head]] != "unknown"){
                    var text_to_display = document.createTextNode(element[headers_for_planets[head]] + "%")
                    td_body.appendChild(text_to_display)
                }
                else if (headers_for_planets[head] == 'population' && element[headers_for_planets[head]] != "unknown"){
                    var text_to_display = document.createTextNode(parseInt(element[headers_for_planets[head]]).toLocaleString() + " people")
                    td_body.appendChild(text_to_display)
                }
                else {
                    var text_to_display = document.createTextNode(element[headers_for_planets[head]])
                    td_body.appendChild(text_to_display)
                }               
                tr_body.appendChild(td_body)
            }

            tbody.appendChild(tr_body)
            table.appendChild(tbody)        
            });
        },


        create_modal : function() {
            let modal = document.createElement('div');
            modal.setAttribute('class', 'modal fade');
            modal.setAttribute('id', "myModal");
            document.getElementsByClassName('container')[0].appendChild(modal);
            document.getElementById("myModal").innerHTML = 
                    '<div class="modal-dialog modal-lg">'
                        +'<div class="modal-content">'
                            +'<div class="modal-header">'
                                +'<h4 class="modal-title"></h4>'
                                +'<button type="button" class="close" data-dismiss="modal">&times;</button>'
                            +'</div>'                         
                            +'<div class="modal-body">'
                                +'<table class="table table-bordered">'
                                    +'<thead class="thead-dark">'
                                        +'<tr>'
                                            +'<th>Name</th>'
                                            +'<th>Height</th>'
                                            +'<th>Mass</th>'
                                            +'<th>Skin</th>'
                                            +'<th>Hair</th>'
                                            +'<th>Eyes</th>'
                                            +'<th>Birth</th>'
                                            +'<th>Gender</th>'
                                        +' </tr>'
                                    +'</thead>'
                                    +'<tbody id="modalTableBody">'
                                    +'</tbody>'
                                +'</table>'
                            +'</div>'
                            +'<div class="modal-footer">'
                                +'<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                +'</div>'
        },


        fill_up_residents_modal : function(list_of_residents_dict){
            var tbody = document.getElementById("modalTableBody");
            var headers_for_resident = {0:"name",1:"height", 2:"mass",3: "skin_color", 4:"hair_color",5: "eye_color", 6: "birth_year", 7: "gender"}
            
            list_of_residents_dict.forEach(resident => {
                var tr_body = document.createElement("tr");
                for (var head in headers_for_resident){
                    var td_body = document.createElement("td");
                    var text_to_display = document.createTextNode(resident[headers_for_resident[head]]);
                    td_body.appendChild(text_to_display);
                    tr_body.appendChild(td_body);
                }
                tbody.appendChild(tr_body);
            });
        }
      
    }


