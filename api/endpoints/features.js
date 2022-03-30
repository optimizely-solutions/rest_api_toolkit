import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html

const section = "features";

const features_api = {
  features: {
    list: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to list features.");
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
        throw new Error("A JSON payload representing the new feature that should be created is required.");
      }

      if (!options.body.project_id) {
        throw new Error("project_id is required in the JSON payload.");
      }

      if (!options.body.key) {
        throw new Error("name is required in the JSON payload.");
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
      if (!options.featureId) {
        throw new Error("A feature ID is required to delete a feature.");
      }

      return {
        method: "DEL",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.featureId ? options.featureId : 0}`,
        params: {},
        body: null,
      };    
    },
    read: (options = {}) => {
      if (!options.featureId) {
        throw new Error("A feature ID is required to read a feature.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.featureId ? options.featureId : 0}`,
        params: {},
        body: null,
      };
    },
    update: (options = {}) => {
      if (!options.featureId) {
        throw new Error("A feature ID is required to update a feature.");
      }
      
      if (!options.body) {
        throw new Error("A JSON payload representing the properties to update a feature is required.");
      }

      return {
        method: "PATCH",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.featureId ? options.featureId : 0}`,
        params: {},
        body: {
          ...options.body,
        },
      };     
    },
  },
};

export default features_api;
