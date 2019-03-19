$(document).ready(function(){

	$('.login').hide();

	$('.bxslider').bxSlider({
		pager:false,
		mode:'fade',
		speed:1000,
		randomStart:true,
		auto:true,
		pause:3000
	});

	$('#btnLogin').click(function(){
		$('.login').show();
	});
	$('#btnClose').click(function(){
		$('.login').hide();
	});

	$('.parol').click(function(){
		alert("Login: admin \nPassword: 12345");
	});

	$('.check').click(function(){
		if($('#lgn').val()=="admin" && $('#psw').val()=="12345"){
			alert("Вы вошли в аккаунт!");
			$('.login').hide();
		}else{
			alert("Неправильный логин или пароль!");
		}
				
	});

	$('#head').click(function(){
		$('.goods-bar').hide();
		$('.final_table').show();
	});

	$('#tvr').click(function(){
		$('.goods-bar').show();
		$('.final_table').hide();
	});

	
	$('.check').click(function(){
		if($('#lgn').val()=="admin" && $('#psw').val()=="12345")
		{
			$('#btnLogin').html("admin");
		}
	});



}); 
