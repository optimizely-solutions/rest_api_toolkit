import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html

const section = "audiences";

const audiences_api = {
  audiences: {
    list: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to list all audiences.");
      }
      
      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}
          ?project_id=${options?.projectId ? options.projectId : 0}
          &page=${options?.linkPageIndex ? options.linkPageIndex : 1}
          &per_page=${options?.perPage ? options.perPage : 100}`,
        params: {},
        body: null,
      };
    },
    create: (options = {}) => {
      if (!options.body) {
        throw new Error("A JSON payload representing the new audience that should be created is required.");
      }
      
      if (!options.body.project_id) {
        throw new Error("A project_id in the JSON payload is required.");
      }

      return {
        method: "POST",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}`,
        params: {},
        body: {
          ...options.body,
        },
      };
    },
    read: (options = {}) => {
      if (!options.audienceId) {
        throw new Error("An audience ID is required to read an audience.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.audienceId ? options.audienceId : 0}`,
        params: {},
        body: null,
      };
    },
    update: (options = {}) => {
      if (!options.audienceId) {
        throw new Error("An audience ID is required to read an audience.");
      }

      if (!options.body) {
        throw new Error("A JSON payload representing the properties to update the audience is required.");
      }

      return {
        method: "PATCH",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.audienceId ? options.audienceId : 0}`,
        params: {},
        body: {
          ...options.body,
        },
      };
    },
  },
};

export default audiences_api;
