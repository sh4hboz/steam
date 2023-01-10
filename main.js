$(document).ready(function(){
    $('.payment form ul li').on('click', function(e){
        $('form .amount').val($(this).text())
        console.log($(this).text())
    })
    
    $('.payment form .login_input').on('input', function(e){
        $('.check_login').css('display', 'block')
    })

    $('.payment form .login_input').on('input', function(e){
        $('.check_login').css('display', 'block')
    })
})