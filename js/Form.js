class Form
{
    constructor()
    {}

    display()
    {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(400,0);

        var input = createInput("Name");
        var button = createButton("Play");

        var greeting  = createElement('h3');

        input.position(450,160);
        button.position(450,200);

        button.mousePressed(function (){
            input.hide();
            button.hide();

            var name = input.value();

            //count player
            playerCount+=1;

            //update name and player count in database
            player.update(name);
            player.updateCount(playerCount);

            //greetings 
            greeting.html("Hello "+name);
            greeting.position(450,160);

        })
    }
}