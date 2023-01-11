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

    let indexThreeForm = $('.indexthree form');

    indexThreeForm.on('input','input',function(e){

        let form = indexThreeForm;
        let login = indexThreeForm.find('.login_input');
        let amount = form.find('.amount')
        let agreement = form.find('.form-check-input');
        
        if(login.val().length >= 3 && amount.val() >= 100 && agreement.prop('checked')){
            form.find('button').removeClass('disabled').attr('disabled',false);
        }else{
            form.find('button').addClass('disabled').attr('disabled',true);
        }

    })
})