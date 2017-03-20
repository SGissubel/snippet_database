//TODO CHANGE URL
var url_id = $("#userID").data("user_id");
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
editor.$blockScrolling = Infinity;
// $("#editor").css("display","none");
console.log("hi");
$.ajax({
    url: "http://localhost:3000/log_in/"+url_id,
    method: "GET"
}).done(function (response) {

    console.log(response);
    for (var i in response.snippet){

        $("#snippet_disp_div").append($("<div class='snip'>")
            .append(response.snippet[i].title+"<br>"+response.snippet[i].tag+"<br>"+response.snippet[i].updated_at)
            .data("snip",atob(response.snippet[i].snippet))
            .on("click",function(){
                $("#editor").fadeIn(1500);
                $("#snippet_disp_div").css("width", "40%").css("float", "left").css("margin-top", 0);
                $("#code_ed").css("margin-left", "50em").css("margin-top", "4em");
                if (editor.getValue() != "") {
                    editor.remove();
                }
                // console.log($(this).data("snip"));
                editor.setValue($(this).data("snip"));
            }
        ));
    }
    });
$('.create_snip').on('click', function(){
    editor.remove();
    $("#editor").fadeIn(1500).css('left', '8%').css('right', '8%');
    $("#snippet_disp_div").css("width", "40%").css("float", "left").css("margin-top", 0);
    $("#code_ed").css("margin-left", "50em").css("margin-top", "4em");
    $("#snippet_disp_div").hide();
    $(".cancel").css('display', "block");
})
$(document).on('click', '.cancel', function(){
    editor.remove();
    $('.form_snip').val('');
    $("#editor").css("display", "none");
    $("#snippet_disp_div").css("width", '').show();
    $(".cancel").css('display', "none");
    $(".cancel_tag").prop('checked', false); 
})
$(".cancel_tag").on('click', function(){
    $(this).prop('checked', true); 
    if(this.checked == false){
            $(".cancel_tag").on('click', function(){
                $(this).prop('checked', false); 
            })
        }else if(this.checked == true){
        $(".cancel_tag").on('click', function(){
            $(this).prop('checked', false); 
        })
    } 
});
$(document).on('click', '.snip', function(){
    $("#snippet_disp_div").css("width", "40%").css("float", "left").css("margin-top", 0);
});
$("#form_sub").on("click",function(){
    $("#snippet_disp_div").show();
    $("#form_snippet").val(btoa(editor.getValue()));
    $("#form").submit();
    $("#form").submit(function (e) {
        e.preventDefault()
    });
    return false;
})
$(".refresh").on("click", function(){
    $("#editor").css("display", "none");
    $("#snippet_disp_div").css("width", '').show();    
});
$(".delete_snip").on("click", function(){
    $(".snip").prepend("<div class='delete_x'>" + "&#10006 Delete This Snippet" + "</div");
})

$("#html_nav").on("click",function(){
    var url_id = $(this).html().trim().toLowerCase();
    console.log(url_id);
    $.ajax({
        url: "http://localhost:3000/log_in/nav/"+url_id,
        method: "GET"
    }).done(function (response) {
        $("#snippet_disp_div").empty();
        console.log(response);
        for (var i in response.snippet){

            $("#snippet_disp_div").append($("<div class='snip'>")
                .append(response.snippet[i].title+"<br>"+response.snippet[i].tag+"<br>"+response.snippet[i].updated_at)
                .data("snip",atob(response.snippet[i].snippet))
                .on("click",function(){
                        $("#editor").fadeIn(1500)
                        if (editor.getValue() != "") {
                            editor.remove();
                        }
                        console.log($(this).data("snip"));
                        editor.setValue($(this).data("snip"));
                    }
                ));
        }
    });

});
$("#css_nav").on("click",function(){
    var url_id = $(this).html().trim().toLowerCase();
    console.log(url_id);
    $.ajax({
        url: "http://localhost:3000/log_in/nav/"+url_id,
        method: "GET"
    }).done(function (response) {
        $("#snippet_disp_div").empty();
        console.log(response);
        for (var i in response.snippet){

            $("#snippet_disp_div").append($("<div class='snip'>")
                .append(response.snippet[i].title+"<br>"+response.snippet[i].tag+"<br>"+response.snippet[i].updated_at)
                .data("snip",atob(response.snippet[i].snippet))
                .on("click",function(){
                        $("#editor").fadeIn(1500)
                        if (editor.getValue() != "") {
                            editor.remove();
                        }
                        console.log($(this).data("snip"));
                        editor.setValue($(this).data("snip"));
                    }
                ));
        }
    });

});
$("#javascript_nav").on("click",function(){
    var url_id = $(this).html().trim().toLowerCase();
    console.log(url_id);
    $.ajax({
        url: "http://localhost:3000/log_in/nav/"+url_id,
        method: "GET"
    }).done(function (response) {
        $("#snippet_disp_div").empty();
        console.log(response);
        for (var i in response.snippet){

            $("#snippet_disp_div").prepend($("<div class='snip'>")
                .append(response.snippet[i].title+"<br>"+response.snippet[i].tag+"<br>"+response.snippet[i].updated_at)
                .data("snip",atob(response.snippet[i].snippet))
                .on("click",function(){
                        $("#editor").fadeIn(1500)
                        if (editor.getValue() != "") {
                            editor.remove();
                        }
                        console.log($(this).data("snip"));
                        editor.setValue($(this).data("snip"));
                    }
                ));
        }
    });

})
$("#sql_nav").on("click",function(){
    var url_id = $(this).html().trim().toLowerCase();
    console.log(url_id);
    $.ajax({
        url: "http://localhost:3000/log_in/nav/"+url_id,
        method: "GET"
    }).done(function (response) {
        $("#snippet_disp_div").empty();
        console.log(response);
        for (var i in response.snippet){

            $("#snippet_disp_div").append($("<div class='snip'>")
                .append(response.snippet[i].title+"<br>"+response.snippet[i].tag+"<br>"+response.snippet[i].updated_at)
                .data("snip",atob(response.snippet[i].snippet))
                .on("click",function(){
                        $("#editor").fadeIn(1500)
                        if (editor.getValue() != "") {
                            editor.remove();
                        }
                        console.log($(this).data("snip"));
                        editor.setValue($(this).data("snip"));
                    }
                ));
        }
    });

})



