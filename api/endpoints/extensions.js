import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html

const section = "extensions";

const extensions_api = {
  extensions: {
    list: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to list extensions.");
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
        throw new Error("A JSON payload representing the new extension that should be created is required.");
      }

      if (!options.body.project_id) {
        throw new Error("project_id is required in the JSON payload.");
      }

      if (!options.body.name) {
        throw new Error("name is required in the JSON payload.");
      }

      if (!options.body.implementation) {
        throw new Error("implementation is required in the JSON payload.");
      }

      if (!options.body.edit_url) {
        throw new Error("edit_url is required in the JSON payload.");
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
      if (!options.extensionId) {
        throw new Error("An extension ID is required to delete an extension.");
      }

      return {
        method: "DEL",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.extensionId ? options.extensionId : 0}`,
        params: {},
        body: null,
      };   
    },
    read: (options = {}) => {
      if (!options.extensionId) {
        throw new Error("An extension ID is required to read an extension.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.extensionId ? options.extensionId : 0}`,
        params: {},
        body: null,
      };
    },
    update: (options = {}) => {     
      if (!options.extensionId) {
        throw new Error("An extension ID is required to update an extension.");
      }
      
      if (!options.body) {
        throw new Error("A JSON payload representing the properties to update an extension is required.");
      }

      return {
        method: "PATCH",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.extensionId ? options.extensionId : 0}`,
        params: {},
        body: {
          ...options.body,
        },
      };  
    },
  },
};

export default extensions_api;
