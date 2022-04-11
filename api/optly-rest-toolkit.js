import axios from "axios";
import { parseLinkHeader, deepCloneJson } from "./utils/http-tools.js";
import experiments from "./endpoints/experiments.js";
import features from "./endpoints/features.js";
import attributes from "./endpoints/attributes.js";
import audiences from "./endpoints/audiences.js";
import campaigns from "./endpoints/campaigns.js";
import changes from "./endpoints/change-history.js";
import environments from "./endpoints/environments.js";
import events from "./endpoints/events.js";
import credentials from "./endpoints/export-credentials.js";
import extensions from "./endpoints/extensions.js";
import groups from "./endpoints/groups.js";
import impressionusage from "./endpoints/impression-usage.js";
import list_attributes from "./endpoints/list-attributes.js";
import pages from "./endpoints/pages.js";
import plan from "./endpoints/plan.js";
import project from "./endpoints/project.js";
import recommendations from "./endpoints/recommendations.js";
import reports from "./endpoints/reports.js";
import sections from "./endpoints/sections.js";
import subjectAccessRequest from "./endpoints/subject-access-requests.js";
import flags from "./endpoints/flags.js";



export class OptlyRestToolkit {
  constructor(configOptions) {
    this.endpoints = {
      ...experiments,
      ...features,
      ...attributes,
      ...audiences,
      ...campaigns,
      ...changes,
      ...environments,
      ...events,
      ...credentials,
      ...extensions,
      ...groups,
      ...impressionusage,
      ...list_attributes,
      ...pages,
      ...plan,
      ...project,
      ...recommendations,
      ...reports,
      ...sections,
      ...subjectAccessRequest,
      ...flags
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

  async features(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.features[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async attributes(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.attributes[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async audiences(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.audiences[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async campaigns(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.campaigns[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async changes(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.changes[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async environments(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.environments[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async events(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.events[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async credentials(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.credentials[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async extensions(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.extensions[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async groups(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.groups[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async impressionusage(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.impressionusage[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async list_attributes(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.list_attributes[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async pages(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.pages[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async plan(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.plan[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async project(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.project[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async recommendations(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.recommendations[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async reports(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.reports[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async sections(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.sections[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async subjectAccessRequest(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.subjectAccessRequest[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }

  async flags(method = "", options = {}) {
    options.projectId = this.projectId;
    const existingEndpoint = this.endpoints.flags[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      let result = await this.request(endpoint);
      //console.log(result);
      return result;
    }
  }


}

//module.exports = {OptlyRestToolkit};
