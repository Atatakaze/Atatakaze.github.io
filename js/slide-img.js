index = 0;
show();

function currentShow(n){
    Show(index = n - 1);
}

function show(){
    shows = $('.myShow');
    dots = $('.dot');

    length = shows.length;

    dotLength = dots.length;

    for (i = 0; i < length; i++){
        shows[i].style.display = "none";
    }

    index++;

    if (index > length){
        index = 1;
    }

    for(i = 0; i < dotLength; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    shows[index - 1].style.display = "block";
    dots[index - 1].className += " active";

    setTimeout(show, 2000);
}