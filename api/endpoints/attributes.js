import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html

const section = "attributes";

const attributes_api = {
  attributes: {
    list: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to list attributes.");
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
        throw new Error("A JSON payload representing the new attribute that should be created is required.");
      }

      if (!options.body.project_id) {
        throw new Error("project_id is required in the JSON payload.");
      }

      if (!options.body.key) {
        throw new Error("key is required in the JSON payload.");
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
      if (!options.attributeId) {
        throw new Error("An attribute ID is required to delete an attribute.");
      }

      return {
        method: "DEL",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.attributeId ? options.attributeId : 0}`,
        params: {},
        body: null,
      };
    },
    read: (options = {}) => {
      if (!options.attributeId) {
        throw new Error("An attribute ID is required to read an attribute.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.attributeId ? options.attributeId : 0}`,
        params: {},
        body: null,
      };
    },
    update: (options = {}) => {
      if (!options.attributeId) {
        throw new Error("An attribute ID is required to read an attribute.");
      }

      if (!options.body) {
        throw new Error("A JSON payload representing the properties to update an attribute is required.");
      }

      return {
        method: "PATCH",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.attributeId ? options.attributeId : 0}`,
        params: {},
        body: {
          ...options.body,
        },
      };
    },
  },
};

export default attributes_api;
