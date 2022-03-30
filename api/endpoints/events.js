import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html

const section = "events";

const events_api = {
  events: {
    list: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to list all events.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}
          ?project_id=${options?.projectId ? options.projectId : 0}
          ${options?.includeClassic ? 'include_classic=' + options.includeClassic : ''}
          &page=${options?.linkPageIndex ? options.linkPageIndex : 1}
          &per_page=${options?.perPage ? options.perPage : 100}`,
        params: {},
        body: null,
      };
    },
    read: (options = {}) => {
      if (!options.eventId) {
        throw new Error("An event ID is required to read an event.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}
          ?event_id=${options?.projectId ? options.projectId : 0}
          ${options?.includeClassic ? 'include_classic=' + options.includeClassic : ''}`,
        params: {},
        body: null,
      };
    },
    createCustom: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to create a custom event.");
      }

      if (!options.body) {
        throw new Error("A JSON payload representing the custom event to create is required.");
      }

      if (!options.body.key) {
        throw new Error("key is required in the JSON payload.");
      }

      return {
        method: "POST",
        // prettier-ignore
        resource: `${config.apiURL_V2}/projects/
          ?project_id=${options?.projectId ? options.projectId : 0}
          /custom_events`,
        params: {},
        body: {
          ...options.body,
        },
      };
    },
    deleteCustom: (options = {}) => {
    },
    updateCustom: (options = {}) => {
    },
    createInPage: (options = {}) => {
      if (!options.pageId) {
        throw new Error("A page ID is required to create an in page event.");
      }

      if (!options.body) {
        throw new Error("A JSON payload representing the in page event to create is required.");
      }

      if (!options.body.event_type) {
        throw new Error("event_type is required in the JSON payload.");
      }

      if (!options.body.name) {
        throw new Error("name is required in the JSON payload.");
      }

      return {
        method: "POST",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}
          ?page_id=${options?.pageId ? options.pageId : 0}
          /events`,
        params: {},
        body: {
          ...options.body,
        },
      };
    },
    deleteInPage: (options = {}) => {
    },
    updateInPage: (options = {}) => {
    },
  },
};

export default events_api;
