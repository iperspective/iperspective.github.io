document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("internetSelect").addEventListener("change", updateIframe);
    updateIframe();
});

function updateIframe() {
    
    const internetSelect = document.getElementById("internetSelect");
    const selectedOption = internetSelect.options[internetSelect.selectedIndex].value;

    const baseURL = "https://datos.bancomundial.org/share/widget";

    const internetUserURL = `${baseURL}?indicators=IT.NET.USER.ZS`;
    const internetMapURL = `${baseURL}?indicators=IT.NET.USER.ZS&view=map&year=2022`;
    const broadbandSubscriptionURL = `${baseURL}?end=2022&indicators=IT.NET.BBND&start=1998&type=shaded&view=chart`;
    const secureInternetServersURL = `${baseURL}?indicators=IT.NET.SECR.P6`;

    let iframeURL;
    switch (selectedOption) {
        case "InternetUsers":
            iframeURL = internetUserURL;
            break;
        case "InternetMap":
            iframeURL = internetMapURL;
            break;
        case "BroadbandSubscription":
            iframeURL = broadbandSubscriptionURL;
            break;
        case "SecureInternetServers":
            iframeURL = secureInternetServersURL;
            break;
        default:
            iframeURL = "https://www.ejemplo.com";
    }

    document.getElementById("internetIframe").src = iframeURL;
}
