var getLi = $("li");
var getSpan = $("span");
var getUl = $("ul");


console.log(typeof $('li'))
console.log($('li'))
		
getUl.on("click", "li", function(){
	


	if(($("li").index(this) + 1) %2 === 0){

		$(this).toggleClass("crossOut1");
		console.log( $("li").index(this) );
		

	}else
	{

		$(this).toggleClass("crossOut2");
		console.log( $("li").index(this) );
	
	}


 });

getUl.on("click", "span", function(e){

		$(this).parent().fadeOut(300, function(){
			$(this).remove();
		});
		e.stopPropagation();


});

	$("input").keypress(function(e){

	 var input = $(this).val();
	 

	if(e.which === 13 )
	{
		$("ul").append("<li><span> <i class='fa fa-trash' aria-hidden='true'> </i> </span>" + input +"</li>");
		$(this).val("");

	}

	});

	$(".fa-plus-circle").on("click", function(){

		$("input").fadeToggle(300);
	});

