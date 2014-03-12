

$(document).ready(function() 
{
    $('#SearchBox').keypress(function(e){
        if(e.which == 13){
            var Box = $('#SearchBox').val();
		window.open("https://www.facebook.com/search/more/?q=" + Box);
        }
    });
	
	$('#SearchButton').click(function() 
	{
 
		var Box = $('#SearchBox').val();
		window.open("https://www.facebook.com/search/more/?q=" + Box);

	});
	
	    $('#post').click(function(){
 
        $('#wall').append('<button class="likeButton">Like</button>');
  
     
  
        
      $('.likeButton').click(function(){
        
         $(this).text("You liked this");

      });
    
    });  
 
		
			$('#FriendRequest').click(function() 
			{ 
			
				if($('#box').is(":hidden"))
				{ 
					$('#FriendRequest').attr('src','http://108.30.193.53/facebook/Friend-Request2.png');
					$('#box2').fadeOut(200);
					$('#box').fadeIn(200);
					$('#Message').attr('src','http://108.30.193.53/facebook/Message1.png');
					
					
				} 	
				else if ($('#box').is(":visible"))
				{ 
					$('#box').fadeOut(200);
					$('#FriendRequest').attr('src','http://108.30.193.53/facebook/Friend-Request1.png');
					
				}
							
			});	 
			
			$('#Message').click(function() 
			{ 
			
				if($('#box2').is(":hidden"))
				{ 
					$('#box').fadeOut(200);
					$('#Message').attr('src','http://108.30.193.53/facebook/Message2.png');
					$('#box2').fadeIn(200);
					$('#FriendRequest').attr('src','http://108.30.193.53/facebook/Friend-Request1.png');
					
					
				} 	
				else if ($('#box2').is(":visible"))
				{ 
					$('#box2').fadeOut(200);
					$('#Message').attr('src','http://108.30.193.53/facebook/Message1.png');
				}
							
			});	 
	
	});