async function checkApiConnection() {
    try {
        const response = await fetch('https://3fwtbm1v-5004.euw.devtunnels.ms/api/healthcheck');

        if (response && response.ok) {
            console.log("API is connected.");
            return true;
        } else {
            console.error("API connection failed.");
            return false;
        }
    } catch (error) {
        console.error("Error checking API connection:", error);
        return false;
    }
}

function performApiCheck() {
    (async () => {
        const status = await checkApiConnection();
        if (status) {
            console.log("yep");
        } else {
            console.log("nope");
        }
    })();
}

// Call this function when you want to check the API connection
performApiCheck();