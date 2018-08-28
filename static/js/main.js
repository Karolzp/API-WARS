function  init(){
    var first_page_link = "https://swapi.co/api/planets";
    ajax.get_planets_and_display_table(first_page_link);
    dom.create_modal();
}

init();