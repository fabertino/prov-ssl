
function redirect() {
	$('#login').submit();
	if(validate()){
		var user = $('#email').val();
		var userEmail = 'user@aruba.it';
		if(user == userEmail){
			$(location).attr('href', 'index.html');
		} else {
			$(location).attr('href', 'dashboard.html');
		}
	} else {
		alert("Controlla i dati immessi per effettuare l'accesso: tutti i campi sono obbligatori!");
	}
}

function validate() {
	var user = $('#email').val();
	var pwd = $('#pwd').val();
	if (user === undefined || user == null) {
		return false;
	} else if ($.trim(user) == '' || !isEmail(pwd)) {
		return false;
	}
	
	if (pwd === undefined || pwd == null) {
		return false;
	} else if ($.trim(pwd) == '') {
		return false;
	}
	
	return true;
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function throwError(target, msg) {
	var _target = '#' + target;
	$(_target).html(msg);
	$(_target).css('display', 'block');
}