var extUrl = baseUrl+ "GetTld.asp?ShowNewExtension=1&ShowOldExtension=1&IncludeTransfer=1&IncludeOnlyNewExtension=1";
  var IsIE = function() { 
    var rv = -1; 
    if (navigator && navigator.appName=='Microsoft Internet Explorer'){
      var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(navigator.userAgent)!= null) rv = parseFloat( RegExp.$1 ); 
    }
    return rv!=-1;
  }
  var IsIE11 = function (){
    return !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
  }
  var SetExt = function (response){
    if(response==null || response==undefined)
      return;
    var all = response.split('--');
    $(document).ready(function () {
      var selReg = $(".tld");
      var respTld = all[0];
      var resp = respTld.split('|');
      for(var i=0; i<resp.length; i++){
        var ext = $.trim(resp[i]);
        if(ext != "") {
			selReg.each(function() {
              this.add(new Option("."+ext,ext));
            });
		}          
      }
      $(".tld").chosen({no_results_text:noResultsText,width:"100%",search_contains:true}).on("chosen:hiding_dropdown", function(){
        var instance = "#" + $(this).closest(".arubaSearchBar").parent().attr("id");
		$(instance+" .domain").focus();
      });
      var selTrasf = $(".tldt");                                                         
      var trasf = all[1].split('|');
      for(var i=0; i<trasf.length; i++){
        var ext = $.trim(trasf[i]);
        if(ext != "") {
			selTrasf.each(function() {
				this.add(new Option("."+ext,ext));
			});
		}
      }
      $(".tldt").chosen({no_results_text:noResultsText,width:"100%",search_contains:true}).on("chosen:hiding_dropdown", function(){
        var instance = "#" + $(this).closest(".arubaSearchBar").parent().attr("id");
        $(instance+" .domainTransf .domain").focus();
      });
      var selGtld = $(".gtld");
      var gtld = all[2].split('|');
      selGtld.each(function() { this.add(new Option("","")); });
      for(var i=0; i<gtld.length; i++){
        var ext = $.trim(gtld[i]);
        if(ext != "") {
			selGtld.each(function() {
				this.add(new Option("."+ext,ext));
			});
		}
      }
      $(".gtld").chosen({no_results_text:noResultsText,width:"100%",search_contains:true}).on("chosen:hiding_dropdown", function(){
        var instance = "#" + $(this).closest(".arubaSearchBar").parent().attr("id");
        $(instance+" .gdomain").focus();
      });      
    });
  }
  if ((IsIE() || IsIE11()) && window.XDomainRequest) {
    var xdr = new XDomainRequest();
    xdr.open("GET", extUrl);
    xdr.onload = function(){SetExt(xdr.responseText)};
    xdr.send();
  } else {
    $.ajax({
      type: "GET",
      crossDomain: true,
      dataType: "json",
      url: extUrl,
      complete: function(data){
        SetExt(data.responseText);
      }
    });
  }
  $(document).ready(function () {
    SetRegionalExtension();
    SetRegionalExtensionTrasf();
    SetTabs();
    SetEnterEvent();
    SetPlaceholder();
	ControlsBinding();
  });
  var SetRegionalExtension = function (){
    $(".tldReg").chosen({no_results_text:noResultsText,width:"100%",search_contains:true,placeholder_text_single:txtRegion}).change(function(e){setTimeout(function(){
	  var instance = "#" + $(e.target).closest(".arubaSearchBar").parent().attr("id");
	  $(instance+" .domainGeo .domainReg").focus();},1);});
    $(".tldReg_chosen .chosen-default span").css("font-size", "14px");
  }
  var SetRegionalExtensionTrasf = function (){
    $(".tldRegTrasf").chosen({no_results_text:noResultsText,width:"100%",search_contains:true,placeholder_text_single:txtRegion}).change(function(e){setTimeout(function(){
	  var instance = "#" + $(e.target).closest(".arubaSearchBar").parent().attr("id");
      $(instance+" .domainTransf .domain").focus();},1);});
    $(".tldRegTrasf_chosen .chosen-default span").css("font-size", "14px");
  }
  var SetTabs = function (){
    $(".searchdomain li a.tabLink").click(function(e){
		var instance = "#" + $(this).closest(".arubaSearchBar").parent().attr("id");
      $(instance+" .tab-pane").each(function(index, curr){
        $(curr).removeClass("active");});
      var toggleId=$(e.target).attr("data-tabToggle");
      $(instance+" ."+toggleId).addClass("active");
      $(instance+" .searchdomain li").each(function(index, curr){
        $(curr).removeClass("active");});
      $(e.target).parent().addClass("active");
    });
  }
  var SetEnterEvent = function (){
    $(document).keydown(function(e){
      if(e.which==13){
        e.preventDefault();
        var instance = "#" + $(e.target).closest(".arubaSearchBar").parent().attr("id");
        $(instance+" .tab-content .active").each(function(){
          var $this = $(this);
          var $thisTab = $this.get(0);
          var dom = $this.find("input[type='text']").eq(0);
          var domVal = dom.val();
          if (typeof domVal === "undefined") {
            domVal= "";
          }
          var ext = $this.find("select").eq(0).get(0);
          if(dom.val() != "" && dom.val() != dom.attr("placeholder") && domVal.length > 2 && $(ext).val().length > 0){
            if($thisTab === $(instance+' .domainGeo').eq(0).get(0)){
              $(instance+' .domainReg .domain').attr('name', 'nodomain');
              $(instance+' .domainReg .tld').attr('name', 'notld');
              $(instance+' .domainGtld .gdomain').attr('name', 'nodomain');
              $(instance+' .domainGtld .gtld').attr('name', 'notld'); 
              $(instance+' .domainTransf .domain').attr('name', 'nodomain');
              $(instance+' .domainTransf .tldt').attr('name', 'notld');
              $(instance+' .domainTransf .tldRegTrasf').attr('name', 'notld');
              $(instance+' .domainGeo .domainReg').attr('name', 'domainReg');
              $(instance+' .domainGeo .tldReg').attr('name', 'tldReg');
			  $(instance).closest('form').attr('action', baseUrl+'forward.asp?Lang=' + lang);
			  $(instance).closest('form').submit();
            }
            else if ($thisTab === $(instance+' .domainGtld').eq(0).get(0)){
              $(instance+' .domainReg .domain').attr('name', 'nodomain');
              $(instance+' .domainReg .tld').attr('name', 'notld');
              $(instance+' .domainGtld .gdomain').attr('name', 'domain');
              $(instance+' .domainGtld .gtld').attr('name', 'tld'); 
              $(instance+' .domainTransf .domain').attr('name', 'nodomain');
              $(instance+' .domainTransf .tldt').attr('name', 'notld');
              $(instance+' .domainTransf .tldRegTrasf').attr('name', 'notld');
              $(instance+' .domainGeo .domainReg').attr('name', 'nodomain');
              $(instance+' .domainGeo .tldReg').attr('name', 'notld');
			  $(instance).closest('form').attr('action', baseUrl+'forward.asp?Lang=' + lang);
			  $(instance).closest('form').submit();
            }
            else if ($thisTab === $(instance+' .domainReg').eq(0).get(0)){
              var inputExt = $(instance+' .domainReg .tld');
              var v = inputExt.val();
              if(v==="org"||v==="biz"||v==="info"||v==="cc"||v==="us"||v==="co.uk" ||v==="org.uk"||v==="es"||v==="name"||v==="tv"||v==="tv"||v==="de"||v==="gov.it"){
                $(instance+' .domainReg .domain').attr('name', 'domainAltreEst');
                inputExt.attr('name', 'tldAltreEst');
              }
              else{
                $(instance+' .domainReg .domain').attr('name', 'domain');
                $(instance+' .domainReg .tld').attr('name', 'tld');
              }
              $(instance+' .domainGtld .gdomain').attr('name', 'nodomain');
              $(instance+' .domainGtld .gtld').attr('name', 'notld'); 
              $(instance+' .domainTransf .domain').attr('name', 'nodomain');
              $(instance+' .domainTransf .tldt').attr('name', 'notld');
              $(instance+' .domainTransf .tldRegTrasf').attr('name', 'notld');
              $(instance+' .domainGeo .domainReg').attr('name', 'nodomain');
              $(instance+' .domainGeo .tldReg').attr('name', 'notld');
              $(instance).closest('form').attr('action', baseUrl+'forward.asp?Lang=' + lang);
              $(instance).closest('form').submit();
            }
            else if ($thisTab === $(instance+' .domainTransf').eq(0).get(0)){
			  var canSubmit = true;
              $(instance+' .domainReg .domain').attr('name', 'nodomain');
              $(instance+' .domainReg .tld').attr('name', 'notld');
              $(instance+' .domainGtld .gdomain').attr('name', 'nodomain');
              $(instance+' .domainGtld .gtld').attr('name', 'notld'); 
              if ($(instance+" .selDomainTrasf").is(":visible")){
                $(instance+' .domainTransf .domain').attr('name', 'domain');
                $(instance+' .domainTransf .tldt').attr('name', 'tld');
                $(instance+' .domainTransf .tldRegTrasf').attr('name', 'notldRegTrasf');
              }
              if ($(instance+" .selDomainTrasf").is(":hidden")){
				/* aggiorno controllo l'estensione */
				ext = $this.find("select.tldRegTrasf").eq(0).get(0);
				canSubmit = $(ext).val().length > 0;
                $(instance+' .domainTransf .domain').attr('name', 'domainRegTrasf');
                $(instance+' .domainTransf .tldt').attr('name', 'notld');
                $(instance+' .domainTransf .tldRegTrasf').attr('name', 'tldRegTrasf');
              }
              $(instance+' .domainGeo .domainReg').attr('name', 'nodomain');
              $(instance+' .domainGeo .tldReg').attr('name', 'notld');
			  if(canSubmit){
				  $(instance).closest('form').attr('action', baseUrl+'FullOrder/SelezioneDomini.asp?Lang=' + lang);
				  $(instance).closest('form').submit();
			  }
            }
          };
		  if (domVal != "" && domVal.length < 3 ) {
            $(instance+' .noinput').show().delay(3000).fadeOut(500);
          };
		  if ($(ext).val().length == 0) {
			  $(instance+' .noTldChosen').show().delay(3000).fadeOut(500);
		  }
		  e.stopPropagation();
		  return false;
        });
      }
    });
  }
  var SetPlaceholder = function (){
    if (window.jQuery && !('placeholder'in document.createElement("input"))) {
      $('[placeholder]').each(function() {
        var $this = $(this),v = $this.attr('placeholder');
        if ($this.val()==''){
          $this.val(v);
          $this.removeAttr('data-input');
          $this.addClass('hasPlaceholderText');
        }
        $this.focus(function() {
          if ($this.val()==v) {
            $this.val('');
            $this.attr('data-input','true');
            $this.removeClass('hasPlaceholderText');
          }
        }).blur(function() {
          if ($this.val()==''||$this.val()==v) {
            $this.val(v);
            $this.removeAttr('data-input');
            $this.addClass('hasPlaceholderText');
          }
        });
        $this.closest('form').submit(function() {
          if ($this.val()==$this.attr('placeholder')) {
            $this.removeAttr('data-input');
            $this.val('');
          }
        });
      });
    }
  }
  var ControlsBinding = function(){
	  $('.domainRegSubmit').click(function(event){
		var instance = "#" + $(this).closest(".arubaSearchBar").parent().attr("id");
		event.preventDefault();
		var inputdomain = $(instance+' .domainReg .domain').val();
		var inputExt = $(instance+' .domainReg .tld');
		var v = inputExt.val();
		if(v==="org"||v==="biz"||v==="info"||v==="cc"||v==="us"||v==="co.uk" ||v==="org.uk"||v==="es"||v==="name"||v==="tv"||v==="tv"||v==="de"||v==="gov.it") {
		  $(instance+' .domainReg .domain').attr('name', 'domainAltreEst');
		  inputExt.attr('name', 'tldAltreEst');
		}
		else {
		  $(instance+' .domainReg .domain').attr('name', 'domain');
		  $(instance+' .domainReg .tld').attr('name', 'tld');
		};
		$(instance+' .domainGtld .gdomain').attr('name', 'nodomain');
		$(instance+' .domainGtld .gtld').attr('name', 'notld');                                                                                                                                                                                
		$(instance+' .domainTransf .domain').attr('name', 'nodomain');
		$(instance+' .domainTransf .tldt').attr('name', 'notld');
		$(instance+' .domainTransf .tldRegTrasf').attr('name', 'notld');
		$(instance+' .domainGeo .domainReg').attr('name', 'nodomain');
		$(instance+' .domainGeo .tldReg').attr('name', 'notld');
		if (inputdomain.length < 3){      
		  $(instance+' .noinput').show().delay(3000).fadeOut(500);
		}
		else if (v.length == 0){      
		  $(instance+' .noTldChosen').show().delay(3000).fadeOut(500);
		}
		else {
		  $(instance).closest('form').attr('action', baseUrl+'forward.asp?Lang=' + lang);
		  $(instance).closest('form').submit();  
		}    
	  });
	  $('.domainGtldSubmit').click(function(event){
		  var instance = "#" + $(this).closest(".arubaSearchBar").parent().attr("id");
		event.preventDefault();
		var inputdomain = $(instance+' .domainGtld .gdomain').val();
		var inputExt = $(instance+' .domainGtld select.gtld').val();

		$(instance+' .domainGtld .gdomain').attr('name', 'domain');
		$(instance+' .domainGtld .gtld').attr('name', 'tld');
		$(instance+' .domainReg .domain').attr('name', 'nodomain');
		$(instance+' .domainReg .tld').attr('name', 'notld');
		$(instance+' .domainTransf .domain').attr('name', 'nodomain');
		$(instance+' .domainTransf .tldt').attr('name', 'notld');
		$(instance+' .domainTransf .tldRegTrasf').attr('name', 'notld');
		$(instance+' .domainGeo .domainReg').attr('name', 'nodomain');
		$(instance+' .domainGeo .tldReg').attr('name', 'notld'); 
		if (inputdomain.length < 3){      
		  $(instance+' .noinput').show().delay(3000).fadeOut(500);
		}
		else if (inputExt.length == 0){      
		  $(instance+' .noTldChosen').show().delay(3000).fadeOut(500);
		}
		else {
		  $(instance).closest('form').attr('action', baseUrl+'forward.asp?Lang=' + lang);
		  $(instance).closest('form').submit();  
		}    
	  });                                                                                                                                                                     
	  $('.domainTransferSubmit').click(function(event){
		  var instance = "#" + $(this).closest(".arubaSearchBar").parent().attr("id");
		event.preventDefault();
		var inputdomain = $(instance+' .domainTransf .domain').val();
		var inputExt = $(instance+' .domainTransf .tldt').val();		
		var canSubmit = true;
		if ($(instance+' .selDomainTrasf').is(":visible")){
		  $(instance+' .domainTransf .domain').attr('name', 'domain');
		  $(instance+' .domainTransf .tldt').attr('name', 'tld');
		  $(instance+' .domainTransf .tldRegTrasf').attr('name', 'notldRegTrasf');
		}
		if ($(instance+" .selDomainTrasf").is(":hidden")){
			inputExt = $(instance+' .domainTransf .tldRegTrasf').val();
			canSubmit = inputExt.length > 0;			
		  $(instance+' .domainTransf .domain').attr('name', 'domainRegTrasf');
		  $(instance+' .domainTransf .tldt').attr('name', 'notld');
		  $(instance+' .domainTransf .tldRegTrasf').attr('name', 'tldRegTrasf');
		}
		$(instance+' .domainReg .domain').attr('name', 'nodomain');
		$(instance+' .domainReg .tld').attr('name', 'notld');
		$(instance+' .domainGtld .gdomain').attr('name', 'nodomain');
		$(instance+' .domainGtld .gtld').attr('name', 'notld'); 
		$(instance+' .domainGeo .domainReg').attr('name', 'nodomain');
		$(instance+' .domainGeo .tldReg').attr('name', 'notld');
		if (inputdomain.length < 3){      
		  $(instance+' .noinput').show().delay(3000).fadeOut(500);
		}
		else if (inputExt.length == 0){      
		  $(instance+' .noTldChosen').show().delay(3000).fadeOut(500);
		}		
		else {
		  $(instance).closest('form').attr('action', baseUrl+'FullOrder/SelezioneDomini.asp?Lang=' + lang);
		  $(instance).closest('form').submit();
		}
	  });
	  $('.btnSearchRegional').click(function(event){
		  var instance = "#" + $(this).closest(".arubaSearchBar").parent().attr("id");
		event.preventDefault();
		var inputdomain = $(instance+' .domainGeo .domainReg').val();
		var inputExt = $(instance+' .domainGeo select.tldReg').val();
		$(instance+' .domainTransf .domain').attr('name', 'nodomain');
		$(instance+' .domainTransf .tldt').attr('name', 'notld');
		$(instance+' .domainTransf .tldRegTrasf').attr('name', 'notld');
		$(instance+' .domainReg .domain').attr('name', 'nodomain');
		$(instance+' .domainReg .tld').attr('name', 'notld');
		$(instance+' .domainGtld .gdomain').attr('name', 'nodomain');
		$(instance+' .domainGtld .gtld').attr('name', 'notld'); 
		$(instance+' .domainGeo .domainReg').attr('name', 'domainReg');
		$(instance+' .domainGeo .tldReg').attr('name', 'tldReg'); 
		if (inputdomain.length < 3){      
		  $(instance+' .noinput').show().delay(3000).fadeOut(500);
		}
		else if (inputExt.length == 0){      
		  $(instance+' .noTldChosen').show().delay(3000).fadeOut(500);
		}
		else {
		  $(instance).closest('form').attr('action', baseUrl+'forward.asp?Lang=' + lang);
		  $(instance).closest('form').submit();  
		}    
	  });	  
	  $('.switchDomainTrasf .swGeo').click(function(event){
		var instance = "#" + $(this).closest(".arubaSearchBar").parent().attr("id");
		event.preventDefault();
		$(this).hide();
		$(instance+' .switchDomainTrasf .swDom').show();
		$(instance+' .inputDomainTrasf').removeClass('col-sm-8 col-md-9 col-lg-10');
		$(instance+' .inputDomainTrasf').addClass('col-sm-6 col-md-5 col-lg-6');    
		$(instance+' .selDomainTrasf').hide();
		$(instance+' .selGeoDomainTrasf').show();
	  });	  
	  $('.switchDomainTrasf .swDom').click(function(event){
		  var instance = "#" + $(this).closest(".arubaSearchBar").parent().attr("id");
		event.preventDefault();
		$(this).hide();
		$(instance+' .switchDomainTrasf .swGeo').show();
		$(instance+' .inputDomainTrasf').addClass('col-sm-8 col-md-9 col-lg-10');
		$(instance+' .inputDomainTrasf').removeClass('col-sm-6 col-md-5 col-lg-6');   
		$(instance+' .selDomainTrasf').show();
		$(instance+' .selGeoDomainTrasf').hide();
	  });
};