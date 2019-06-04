$(document).ready(function(){
   
    assignDataToTable();

    function assignDataToTable() {
        $("tbody").empty();
        $.ajax({    
          type:"GET",
          contentType: "application/json",
          url:"http://localhost:8080/im-day",
          success: function(data) {
            var users = JSON.parse(JSON.stringify(data));
            for (var i in users) {
                $("tbody").
                append("<tr> \
                            <td>" + "</td> \
                            <td>" +  users[i].solved_day + "</td> \
                            <td>" +  users[i].name + "</td> \
                            <td> \ </td> \
                        </tr>");
            }
          },
          error: function(data) { 
            console.log(data);
            }
        });
       
    }

});