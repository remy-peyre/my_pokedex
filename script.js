window.onload = function() {

    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if(req.readyState == 4 && req.status == 200){
            pokemon = JSON.parse(req.responseText);
        } else {}
    };
    req.open("get", "pokemons.json", true);
    req.send();

    document.querySelector('#form').onclick = function(){

        var name = document.querySelector('#showName');
        var type = document.querySelector('#showType');
        var image = document.querySelector('#img_zone');
        var errorBlock = document.querySelector('#errorBlock');
        var pokedexValid = false;

        var infoPokemon = document.querySelector('#name').value;

        for( var i in pokemon){
            console.log(i);
            if (pokemon[i].name == infoPokemon ){
                pokedexValid = true;
                errorBlock.innerHTML='';
                name.innerHTML = pokemon[i].name;
                type.innerHTML = pokemon[i].type;
                image.innerHTML = '<img class="picture_size" src="http://img.pokemondb.net/artwork/'+pokemon[i].name.toLowerCase()+'.jpg">';
            }
            if ( infoPokemon == i){
                pokedexValid = true;
                errorBlock.innerHTML='';
                console.log(pokemon);
                name.innerHTML = pokemon[i].name;
                type.innerHTML = pokemon[i].type;
                image.innerHTML = '<img class="picture_size" src="http://img.pokemondb.net/artwork/'+pokemon[i].name.toLowerCase()+'.jpg">';
            }

        }
        return false ;

    }




};
