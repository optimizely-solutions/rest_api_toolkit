import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html

const section = "campaigns";

const campaigns_api = {
  campaigns: {
    list: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to list campaigns.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}?project_id=${options?.projectId ? options.projectId : 0}&page=${options?.linkPageIndex ? options.linkPageIndex : 1}&per_page=${options?.perPage ? options.perPage : 100}`,
        params: {},
        body: null,
      };
    },
    create: (options = {}) => {
      if (!options.body) {
        throw new Error("A JSON payload representing the new campaign that should be created is required.");
      }

      if (!options.body.project_id) {
        throw new Error("project_id is required in the JSON payload.");
      }

      return {
        method: "POST",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}?action=${options?.action ? options.action : "pause"}`,
        params: {},
        body: {
          ...options.body,
        },
      };
    },
    delete: (options = {}) => {
      if (!options.campaignId) {
        throw new Error("A campaign ID is required to delete a campaign.");
      }

      return {
        method: "DEL",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.campaignId ? options.campaignId : 0}`,
        params: {},
        body: null,
      };
    },
    read: (options = {}) => {
      if (!options.campaignId) {
        throw new Error("An campaign ID is required to read a campaign.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.campaignId ? options.campaignId : 0}`,
        params: {},
        body: null,
      };
    },
    update: (options = {}) => {
      if (!options.campaignId) {
        throw new Error("An campaign ID is required to update a campaign.");
      }

      if (!options.body) {
        throw new Error("A JSON payload representing the properties to update a campaign is required.");
      }

      return {
        method: "PATCH",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.attributeId ? options.attributeId : 0}&action=${options?.action ? options.action : "pause"}`,
        params: {},
        body: {
          ...options.body,
        },
      };
    },
  },
};

export default campaigns_api;