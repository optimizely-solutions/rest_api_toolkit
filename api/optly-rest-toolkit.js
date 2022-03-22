import axios from "axios";
import { parseLinkHeader, deepCloneJson } from "./utils/http-tools.js";
import experiments from "./endpoints/experiments.js";

//Personal Token:  2:K0omYPe8MUA1jnB05LbNhwYrPu7RfOmYWVUuAidd4eqhElqJn_Ls

export class OptlyRestToolkit {
  constructor(configOptions) {
    this.endpoints = {
      ...experiments,
    };

    if (!configOptions.token) {
      throw new Error("An API Token is required to perform any Rest API operation.");
    }

    if (!configOptions.projectId) {
      throw new Error("A project ID is required to perform any Rest API operation.");
    }

    this.token = configOptions.token;
    this.bearerToken = `Bearer ${this.token}`;
    this.projectId = configOptions.projectId;
  }


  async request(endpoint = {}) {

    const axiosConfig = {
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };
    
    let URL;
    let headerLink;
    let result = [];
    URL = endpoint.resource;
    do {
      await axios({
        method: endpoint.method,
        url: URL,
        headers: axiosConfig,
        data: endpoint?.body ? endpoint?.body : null,
      })
        .then((res) => {
          headerLink = parseLinkHeader(res.headers["link"]);
          result = result.concat(res.data);
          if (headerLink && headerLink.next !== undefined) {
            URL = headerLink.next.href;
          }
        })
        .catch((error) => {
          if (
            error.response.status !== 404
          ) {
            console.log(error);
            resolve({ error_message: error });
          }
        });
    } while (headerLink && headerLink.next !== undefined);

    // result = deepCloneJson(result.filter((item) => item.archived === false));

    return result;    
  }

  async experiments(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.experiments[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }
}

//module.exports = {OptlyRestToolkit};
