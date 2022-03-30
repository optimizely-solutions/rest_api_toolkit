import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html

const section = "environments";

const environments_api = {
  environments: {
    list: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to list environments.");
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
        throw new Error("A JSON payload representing the new environment that should be created is required.");
      }

      if (!options.body.projectId) {
        throw new Error("A project ID is required in the JSON payload.");
      }

      if (!options.body.key) {
        throw new Error("An key is required in the JSON payload.");
      }
      
      if (!options.body.name) {
        throw new Error("An name is required in the JSON payload.");
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
    delete: (options = {}) => {
      if (!options.environmentId) {
        throw new Error("An environment ID is required to delete an environment.");
      }

      return {
        method: "DEL",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.environmentId ? options.environmentId : 0}`,
        params: {},
        body: null,
      };
    },
    read: (options = {}) => {
      if (!options.environmentId) {
        throw new Error("An environment ID is required to read an environment.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.environmentId ? options.environmentId : 0}`,
        params: {},
        body: null,
      };
    },
    update: (options = {}) => {
      if (!options.body) {
        throw new Error("A JSON payload representing the environment that should be updated is required.");
      }
      
      if (!options.environmentId) {
        throw new Error("An environment ID is required to update an environment.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.environmentId ? options.environmentId : 0}`,
        params: {},
        body: null,
      };
    }
  },
};

export default environments_api;
