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
        var buttonOne = document.querySelector('.little_one');
        var buttonTwo = document.querySelector('.little_two');
        var pokedexValid = false;

        var infoPokemon = document.querySelector('#name').value.toLowerCase();

        for( var i in pokemon){
            if (pokemon[i].name.toLowerCase() == infoPokemon ){
                pokedexValid = true;
                errorBlock.innerHTML='';
                name.innerHTML = pokemon[i].name;
                type.innerHTML = pokemon[i].type;
                image.innerHTML = '<img src="http://img.pokemondb.net/artwork/'+pokemon[i].name.toLowerCase()+'.jpg">';
                buttonOne.style.background  = "-webkit-radial-gradient(#9ff9ac, #34c84a)";
                buttonTwo.style.background  = "-webkit-radial-gradient(#9ff9ac, #34c84a)";
            }
            if ( infoPokemon == i){
                pokedexValid = true;
                errorBlock.innerHTML='';
                name.innerHTML = pokemon[i].name;
                type.innerHTML = pokemon[i].type;
                image.innerHTML = '<img src="http://img.pokemondb.net/artwork/'+pokemon[i].name.toLowerCase()+'.jpg">';
                buttonOne.style.background  = "-webkit-radial-gradient(#9ff9ac, #34c84a)";
                buttonTwo.style.background  = "-webkit-radial-gradient(#9ff9ac, #34c84a)";
            }
        }
        if (pokedexValid === false){
            if(isNaN(infoPokemon)){
                errorBlock.innerHTML = infoPokemon + ' not found';
                buttonOne.style.background  = "-webkit-radial-gradient(#fb7b7b, #fb0506)";
                buttonTwo.style.background  = "-webkit-radial-gradient(#ecec6c, #fdbe41)";
                image.innerHTML = '';
                name.innerHTML = '';
                type.innerHTML = '';
            } else{
                errorBlock.innerHTML = 'pokemon n° ' + infoPokemon + ' not found';
                buttonOne.style.background  = "-webkit-radial-gradient(#fb7b7b, #fb0506)";
                buttonTwo.style.background  = "-webkit-radial-gradient(#ecec6c, #fdbe41)";
                image.innerHTML = '';
                name.innerHTML = '';
                type.innerHTML = '';
            }
        }
        return false ;
    };
};
