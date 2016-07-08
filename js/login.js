
function redirect() {
	if(validate()){
		var user = $('#email').val();
		var userEmail = 'user@aruba.it';
		if(user == userEmail){
			$(location).attr('href', 'index.html');
		} else {
			$(location).attr('href', '..\dashboard\dashboard.html');
		}
	}
}

function validate() {
	var email = $('#email').val();
	var pwd = $('#pwd').val();
	var isValid = true;
	
	$('.aruba-error').slideUp('slow');
	
	if ($.trim(email) == '') {
		throwError('error-email', 'Inserire l\'indirizzo email utilizzato in fase di registrazione');
		isValid = false;
	} else if (!isEmail(email)) {
		throwError('error-email', 'Inserire un indirizzo email valido');
		isValid = false;
	}
	
	if (pwd === undefined || pwd == null || $.trim(pwd) == '') {
		throwError('error-pwd', 'Inserisci la password utilizzata in fase di registrazione');
		isValid = false;
	}
	
	return isValid;
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function throwError(target, msg) {
	var _target = '#' + target;
	$(_target).html(msg);
	$(_target).slideDown('slow');
	//$(_target).css('display', 'block');
}