var toDos = ["gym", "tan", "laundry"];

var chore = prompt("What would you like to do?");



while (chore != "quit") {
    if (chore == "new") {
        var add = prompt("Add new to do?");
        toDos.push(add);
        console.log("Added new todo");
    } else if (chore === "list") {
        toDos.forEach(function (chore, i) {
            console.log(i + ": " + chore);
        });
    } else if (chore === "delete") {
        var deleted = prompt("Which index would would you like to delete?");
        toDos.splice(deleted, 1);
        console.log("Deleted todo");
    }
    var chore = prompt("What would you like to do?");
}




console.log("You have quit the app");