    $(document).ready(function () {
		
		var w = $(window).width();
		var h = $(window).height();
		$(".overlay").width(w);
		$(".overlay").height(h + 100);
		$("#dialog-modifica").width(w);
		$("#dialog-modifica").height(h);
		
		$("#dialog-modifica").dialog({
		  autoOpen: false,
		  height: $(window).height() - 50,
		  width: $(window).width() - 50,
		  buttons: [{
			  text: "Salva",
			  click: function() {
				$( this ).dialog( "close" );
				$(".overlay").hide();
			  }
			},
			{
			  text: "Annula",
			  click: function() {
				$( this ).dialog( "close" );
				$(".overlay").hide();
			  }
			}]
		});	

		$("#dialog-rinnova").dialog({
		  autoOpen: false,
		  title: "Rinnova certificato",
		  buttons: [{
			  text: "Salva",
			  click: function() {
				$( this ).dialog( "close" );
				$(".overlay").hide();
			  }
			},
			{
			  text: "Annula",
			  click: function() {
				$( this ).dialog( "close" );
				$(".overlay").hide();
			  }
			}]
		});	
		
		$("#dialog-revoca").dialog({
		  autoOpen: false,
		  buttons: [{
			  text: "Salva",
			  click: function() {
				$( this ).dialog( "close" );
				$(".overlay").hide();
			  }
			},
			{
			  text: "Annula",
			  click: function() {
				$( this ).dialog( "close" );
				$(".overlay").hide();
			  }
			}]
		});	
		
		$("#carousel").carousel({
			pause: true,
			interval: false
		});
	
		var jsonArray = {
					"Result": "OK",
					"Records": [
						{ "IdPratica": 123456, "TipoCertificato": "DV", "Cliente": 18, "Dominio": 55, "Attivazione": "Scadenza Garcia", "Scadenza": "agatha.garcia@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123457, "TipoCertificato": "DV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123458, "TipoCertificato": "DV", "Cliente": 18, "Dominio": 55, "Attivazione": "Scadenza Garcia", "Scadenza": "agatha.garcia@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123459, "TipoCertificato": "OV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123460, "TipoCertificato": "OV", "Cliente": 18, "Dominio": 55, "Attivazione": "Scadenza Garcia", "Scadenza": "agatha.garcia@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123461, "TipoCertificato": "OV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},						
						{ "IdPratica": 123462, "TipoCertificato": "EV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123463, "TipoCertificato": "EV", "Cliente": 18, "Dominio": 55, "Attivazione": "Scadenza Garcia", "Scadenza": "agatha.garcia@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123464, "TipoCertificato": "EV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},						
						],
						"TotalRecordCount": 9};

			$("#cert-dv-ball").on("click",function(){
				jsonArray = {
					"Result": "OK",
					"Records": [
						{ "IdPratica": 123456, "TipoCertificato": "DV", "Cliente": 18, "Dominio": 55, "Attivazione": "Scadenza Garcia", "Scadenza": "agatha.garcia@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123457, "TipoCertificato": "DV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123458, "TipoCertificato": "DV", "Cliente": 18, "Dominio": 55, "Attivazione": "Scadenza Garcia", "Scadenza": "agatha.garcia@jtable.org", "Durata": "123", "Stato": "F"},
						],
						"TotalRecordCount": 3};				
			$('#studentTableContainer').jtable('load');
				
				
			});

			$("#ball-filter-reset").on("click",function(){
				jsonArray = {
					"Result": "OK",
					"Records": [
						{ "IdPratica": 123456, "TipoCertificato": "DV", "Cliente": 18, "Dominio": 55, "Attivazione": "Scadenza Garcia", "Scadenza": "agatha.garcia@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123457, "TipoCertificato": "DV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123458, "TipoCertificato": "DV", "Cliente": 18, "Dominio": 55, "Attivazione": "Scadenza Garcia", "Scadenza": "agatha.garcia@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123459, "TipoCertificato": "OV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123460, "TipoCertificato": "OV", "Cliente": 18, "Dominio": 55, "Attivazione": "Scadenza Garcia", "Scadenza": "agatha.garcia@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123461, "TipoCertificato": "OV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},						
						{ "IdPratica": 123462, "TipoCertificato": "EV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123463, "TipoCertificato": "EV", "Cliente": 18, "Dominio": 55, "Attivazione": "Scadenza Garcia", "Scadenza": "agatha.garcia@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123464, "TipoCertificato": "EV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},						
						],
						"TotalRecordCount": 9};				
			$('#studentTableContainer').jtable('load');
			});

			$("#cert-ov-ball").on("click",function(){
				jsonArray = {
					"Result": "OK",
					"Records": [
						{ "IdPratica": 123459, "TipoCertificato": "OV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123460, "TipoCertificato": "OV", "Cliente": 18, "Dominio": 55, "Attivazione": "Scadenza Garcia", "Scadenza": "agatha.garcia@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123461, "TipoCertificato": "OV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},						
						],
						"TotalRecordCount": 3};				
			$('#studentTableContainer').jtable('load');
			});
			
			$("#cert-ev-ball").on("click",function(){
				jsonArray = {
					"Result": "OK",
					"Records": [
						{ "IdPratica": 123462, "TipoCertificato": "EV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123463, "TipoCertificato": "EV", "Cliente": 18, "Dominio": 55, "Attivazione": "Scadenza Garcia", "Scadenza": "agatha.garcia@jtable.org", "Durata": "123", "Stato": "F"},
						{ "IdPratica": 123464, "TipoCertificato": "EV", "Cliente": 1, "Dominio": 1, "Attivazione": "Scadenza Lafore", "Scadenza": "agatha.lafore@jtable.org", "Durata": "123", "Stato": "F"},						
						],
						"TotalRecordCount": 3};				
			$('#studentTableContainer').jtable('load');
				
				
			});			
			
			$("#studentTableContainer").jtable({
				paging: true, //Enable paging
				pageSize: 10, //Set page size (default: 10)
				sorting: true, //Enable sorting
				defaultSorting: 'IdPratica ASC', //Set default sorting
            actions: {
				listAction: function (postData, jtParams) {
				return jsonArray;
				},
				
			}, fields: {
                IdPratica: {
	                title: 'IdPratica',
                    key: true,
                    create: false,
                    edit: false,
					sorting: true
                },
                TipoCertificato: {
                    title: 'TipoCertificato',
                    width: '15%',
					sorting: true
                },
                Cliente: {
                    title: 'Cliente',
                    width: '15%',
					sorting: true
                },
                Dominio: {
                    title: 'Dominio',
                    width: '15%',
					sorting: true
                },
                Attivazione: {
                    title: 'Attivazione',
                    width: '15%',
					sorting: true
                },
				Scadenza: {
                    title: 'Scadenza',
                    width: '15%',
					sorting: true
                },
				Durata: {
                    title: 'Durata',
                    width: '15%',
					sorting: true
                },Stato: {
                    title: 'Stato',
                    width: '15%',
					sorting: true
                }, Renew: {
                    title: '',
                    width: '5%',
                    sorting: false,
                    edit: false,
                    create: false,
                    display: function (studentData) {
                        var $img = $('<img src="img/new.png" class="cmd-image" title="Rinnova" />');
						$img.click(function(){
							$(".overlay").show();
							$( "#dialog-rinnova" ).dialog( "open" );
						});
                        return $img;
                    }
                }, Edit: {
                    title: '',
                    width: '5%',
                    sorting: false,
                    edit: false,
                    create: false,
                    display: function (studentData) {
                        var $img = $('<img src="img/modifica.png" class="cmd-image" title="Modifica" />');
						$img.click(function(){
							$(".overlay").show();
							$( "#dialog-modifica" ).dialog( "open" );
						});
                        return $img;
                    }
                }, Remove: {
                    title: '',
                    width: '5%',
                    sorting: false,
                    edit: false,
                    create: false,
                    display: function (studentData) {
                        var $img = $('<img src="img/delete.png" class="cmd-image" title="Revoca" />');
						$img.click(function(){
							$(".overlay").show();
							$( "#dialog-revoca" ).dialog( "open" );
						});
                        return $img;
                    }
                }
				
            }
        });
		
		$( "#accordion-ricerca" ).accordion();
		
		$('#studentTableContainer').jtable('load');

	    });
