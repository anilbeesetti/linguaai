import { AzureFunction, Context, HttpRequest } from "@azure/functions";
const axios = require("axios");

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const endpoint = process.env["LANGUAGE_SERVICE_LOCATION"];
  const API_KEY = process.env["LANGUAGE_SERVICE_API_KEY"];

  const response = await axios({
    baseURL: endpoint,
    url: "/language/analyze-text/jobs",
    method: "post",
    headers: {
      "Ocp-Apim-Subscription-Key": API_KEY,
      "Content-type": "application/json",
    },
    params: {
      "api-version": "2022-10-01-preview",
    },
    data: {
      displayName: "Document Summarization Task",
      analysisInput: {
        documents: [
          {
            id: "1",
            language: "en",
            text: req.body.text,
          },
        ],
      },
      tasks: [
        {
          kind: "ExtractiveSummarization",
          taskName: "Document Extractive Summarization Task",
          parameters: {
            sentenceCount: req.query.maxSentenceCount,
          },
        },
      ],
    },
    responseType: "json",
  });

  const operationLocation = response.headers["operation-location"];

  var responseMessage = "";

  while (true) {
    const response = await axios({
      url: operationLocation,
      method: "get",
      headers: {
        "Ocp-Apim-Subscription-Key": API_KEY,
        "Content-type": "application/json",
      },
      responseType: "json",
    });
    if (response.status == 200) {
      if (response.data.status !== "running") {
        if (response.data.status === "succeeded") {
          responseMessage = JSON.stringify(response.data.tasks.items);
        } else {
          responseMessage = response.data.status;
        }
        break;
      }
    } else {
      responseMessage = response.statusText;
    }
  }

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};

export default httpTrigger;
