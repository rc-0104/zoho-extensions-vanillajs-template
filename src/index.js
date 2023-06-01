// load css styles
import { getCurrentUser } from './service/crm.services';
import './styles/styles.css';

function initializeWidget() {
    ZOHO.embeddedApp.on("PageLoad", async function(data)
	{
		
		/*
	 	 * Verify if EntityInformation is Passed 
	 	 */
		if(data && data.Entity)
		{
			console.log("entity information :", data);
		}

		const currentUserInformation = await getCurrentUser();
        console.log("current user information : ", currentUserInformation);
		
	})
	/*
	 * initialize the widget.
	 */
	ZOHO.embeddedApp.init();
}


initializeWidget();