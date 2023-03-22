

$("#inputsContain").on("click","#submit",function(){
    let $entry = $('<p></p>').text(`${$("#movieTitle").val()} - ${$("#rating").val()}`).appendTo("#entry")
    $('<button class = "removeButton">Remove</button>').appendTo($entry)
    $("#movieTitle").val("")
    $("#rating").val("")
    $entry.on("click",".removeButton",function(){
        $entry.remove()
    })
    
})