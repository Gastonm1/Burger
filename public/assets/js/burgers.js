$(function() {
    $(".change-status").on("click", function(event){
        var id = $(this).data("newburger");

        var newBurgerState = {
            burgers: newBurger
        };

        // Sent PUT request.
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
                console.log("Are you hungry?", newBurgerState);
                //Reload
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log($("#bName").val())
        var newBurger = {
            name: $("#bName").val().trim(),
            devoured: $("#radioBtn").val()
        };
        console.log(newBurger)

        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("created new burger");
                //Reload
                location.reload();
            }
        );
});
});