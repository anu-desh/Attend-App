var e=document.getElementById('id1');
var p=document.getElementById('id2');

console.log(e);
console.log(p);
		
document.getElementById('button').addEventListener('click',
function ()
{
	
	sessionStorage.setItem("ok","false");
	if(document.getElementById('id1').value == "" || p.value == ""||e.value==null||p.value==null)
	{	
		event.preventDefault();
		console.log(e);
		console.log(p);
		document.querySelector('.popup2').style.display = 'block';
		document.getElementById('error').innerText="Enter your credentials!";
		
	}
	else if(document.getElementById('id2').value.length<4)
	{
		event.preventDefault();
		console.log(e);
		console.log(p);
		document.querySelector('.popup2').style.display = 'block';
		document.getElementById('error').innerText="Incorrect email or password";
	
	}
	
	else
	{
		var email="anu@gmail.com";
		var pass="12345";
	
		if(e.value.match(email)&&p.value.match(pass))
		{
		event.preventDefault();
		document.querySelector('.popup2').style.display = 'block';
		document.getElementById('error').innerText="Hello!\n"+e.value;
		sessionStorage.setItem("ok","true");
		
			setTimeout(function(){
				location.href="./home.html";
			},1000);
		}
		else
		{
			event.preventDefault();
			document.querySelector('.popup2').style.display = 'block';
			document.getElementById('error').innerText="Incorrect email or password";
		}
		
	}
	

});


document.querySelector('.close2').addEventListener('click',
    function(){
        document.querySelector('.popup2').style.display = 'none';
		
	});
	



	

