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
                console.log("Are you hungry?",newBurgerState);
                //Reload
                location.reload();
            }
        );
    });
})