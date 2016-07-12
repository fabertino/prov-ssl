    $(document).ready(function () {	
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
                }, Remove: {
                    title: 'ab',
                    width: '5%',
                    sorting: false,
                    edit: false,
                    create: false,
                    display: function (studentData) {
                        var $img = $('<img src="/img/delete.png" title="Revoca" />');
                        return $img;
                    }
                }
				
            }
        });
		
		$( "#accordion-ricerca" ).accordion();
		
		$('#studentTableContainer').jtable('load');

	    });
