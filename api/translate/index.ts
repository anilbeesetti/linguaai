import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { v4 as uuidv4 } from "uuid";
const axios = require("axios"); // import has issue with axios

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const endpoint = "https://api.cognitive.microsofttranslator.com";
  const location = "centralindia";
  const API_KEY = process.env["TRANSLATOR_API_KEY"];

  const response = await axios({
    baseURL: endpoint,
    url: "/translate",
    method: "post",
    headers: {
      "Ocp-Apim-Subscription-Key": API_KEY,
      "Ocp-Apim-Subscription-Region": location,
      "Content-type": "application/json",
      "X-ClientTraceId": uuidv4(),
    },
    params: {
      "api-version": "3.0",
      from: req.query.from,
      to: [req.query.to],
    },
    data: [
      {
        text: req.body.text,
      },
    ],
    responseType: "json",
  });

  var responseMessage = "";

  if (response.status == 200) {
    responseMessage = JSON.stringify(response.data);
  } else {
    responseMessage = response.statusText;
  }

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};

export default httpTrigger;
