    $(document).ready(function () {	
		var jsonArray = {
					"Result": "OK",
					"Records": [
						{ "IdPratica": 123456, "Prodotto": "Certificato DV", "StatoAttivazione": "IN LAVORAZIONE", "DataRichiesta": "01/01/2016", "DataUltimaModifica": "02/01/2016", "Durata": "30"},
						{ "IdPratica": 123457, "Prodotto": "Certificato DV", "StatoAttivazione": "RIFIUTATO","DataRichiesta": "01/06/2016", "DataUltimaModifica": "02/06/2016", "Durata": "25"},
						{ "IdPratica": 123458, "Prodotto": "Certificato DV", "StatoAttivazione": "ATTIVO", "DataRichiesta": "01/01/2016", "DataUltimaModifica": "02/01/2016", "Durata": "365"},
						{ "IdPratica": 123459, "Prodotto": "Certificato OV", "StatoAttivazione": "ATTIVO","DataRichiesta": "01/06/2016", "DataUltimaModifica": "02/06/2016", "Durata": "730"},
						{ "IdPratica": 123460, "Prodotto": "Certificato OV", "StatoAttivazione": "ATTIVO", "DataRichiesta": "01/01/2016", "DataUltimaModifica": "02/01/2016", "Durata": "10"},
						{ "IdPratica": 123461, "Prodotto": "Certificato OV", "StatoAttivazione": "ATTIVO","DataRichiesta": "01/06/2016", "DataUltimaModifica": "02/06/2016", "Durata": "1"},						
						{ "IdPratica": 123462, "Prodotto": "Certificato EV", "StatoAttivazione": "SCADUTO","DataRichiesta": "01/06/2016", "DataUltimaModifica": "02/06/2016", "Durata": "0"},
						{ "IdPratica": 123463, "Prodotto": "Certificato EV", "StatoAttivazione": "ATTIVO", "DataRichiesta": "01/01/2016", "DataUltimaModifica": "02/01/2016", "Durata": "365"},
						{ "IdPratica": 123464, "Prodotto": "Certificato EV", "StatoAttivazione": "ATTIVO","DataRichiesta": "01/06/2016", "DataUltimaModifica": "02/06/2016", "Durata": "365"},						
						],
						"TotalRecordCount": 9};
				
				

			
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
	                title: 'Numero Pratica',
					width: '20%',
                    key: true,
                    create: false,
                    edit: false,
					sorting: true
                },
                Prodotto: {
                    title: 'Prodotto',
                    width: '15%',
					sorting: true
                },
                StatoAttivazione: {
                    title: 'Stato Attivazione',
                    width: '15%',
					sorting: true
                },
                DataRichiesta: {
                    title: 'Data Richiesta',
                    width: '15%',
					sorting: true
                },
				DataUltimaModifica: {
                    title: 'Data Ultima Modifica',
                    width: '15%',
					sorting: true
                },
				Durata: {
                    title: 'Durata (gg)',
                    width: '10%',
					sorting: true
                }
				
            }
        });
		
		$( "#accordion-ricerca" ).accordion();
		
		$('#studentTableContainer').jtable('load');

	    });
