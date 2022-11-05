import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { v4 as uuidv4 } from "uuid";
const axios = require("axios");

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const endpoint = "https://api.cognitive.microsofttranslator.com";
  const location = "centralindia";
  const API_KEY = process.env["TRANSLATOR_API_KEY"];

  const response = await axios({
    baseURL: endpoint,
    url: "/dictionary/lookup",
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
        text: req.query.word,
      },
    ],
    responseType: "json",
  });

  console.log(response);

  var responseMessage = "";

  if (response.status == 200) {
    responseMessage = JSON.stringify(response.data);
  } else {
    responseMessage = "";
  }

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};

export default httpTrigger;
