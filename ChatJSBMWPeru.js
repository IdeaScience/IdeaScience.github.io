		
		var style = document.createElement('style');
		var css = ".embeddedServiceHelpButton .helpButton .uiButton {"+
			"background-color: #005290;"+
			"font-family: \"Aria\", sans-serif;"+
		"}"+
		".embeddedServiceHelpButton .helpButton .uiButton:focus {" +
			"outline: 1px solid #005290;"+
		"}";
		
		style.type = 'text/css';
		if (style.styleSheet){
		  // This is required for IE8 and below.
		  style.styleSheet.cssText = css;
		} else {
		  style.appendChild(document.createTextNode(css));
		}
		
		document.body.appendChild(style);
		

	var initESW = function(gslbBaseURL) {
		embedded_svc.settings.displayHelpButton = true; //Or false
		embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

		embedded_svc.settings.extraPrechatFormDetails = 
		[{
			"label":"Original Source",
			"value":window.location.href,
			"transcriptFields":["OriginalSource__c"],
			"displayToAgent":false
		},
		{
			"label":"Business ID",
			"value":"PE003",
			"transcriptFields":["BusinessId__c"],
			"displayToAgent":false
		}];
		//embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
		//embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

		//embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
		//embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

		// Settings for Chat
		//embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
			// Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
			// Returns a valid button ID.
		//};
		//embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
		//embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
		//embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

		embedded_svc.settings.enabledFeatures = ['LiveAgent'];
		embedded_svc.settings.entryFeature = 'LiveAgent';

		embedded_svc.init(
			'https://inchcape--SUBAUSTG03.my.salesforce.com',
			'https://subaustg03-fl1jaguarestonia.cs173.force.com/internalretail',
			gslbBaseURL,
			'00D3E0000000YeG',
			'BMW_Peru',
			{
				baseLiveAgentContentURL: 'https://c.la3-c1cs-cdg.salesforceliveagent.com/content',
				deploymentId: '5723E000000Cadw',
				buttonId: '5733E000000Cafe',
				baseLiveAgentURL: 'https://d.la3-c1cs-cdg.salesforceliveagent.com/chat',
				eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I3E000000CaflUAC_175fd6eb5be',
				isOfflineSupportEnabled: false
			}
		);
	};

	if (!window.embedded_svc) {
		var s = document.createElement('script');
		s.setAttribute('src', 'https://inchcape--SUBAUSTG03.my.salesforce.com/embeddedservice/5.0/esw.min.js');
		s.onload = function() {
			initESW(null);
		};
		document.body.appendChild(s);
	} else {
		initESW('https://service.force.com');
	}