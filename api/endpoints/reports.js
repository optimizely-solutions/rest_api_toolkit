import config from "../utils/config.js";

//Flags First Rest API
//https://library.optimizely.com/docs/api/flags/v1/index.html#tag/Flags

const reports_api = {
  reports: {
    list: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to list all reports.");
      }

      if (!options.environmentKey) {
        throw new Error("A environment key is required to list all reports.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_FlagsV1}/projects/${options?.projectId ? options.projectId : 0}/environments/${options?.environmentKey ? options.environmentKey : 0}`,
        params: {},
        body: null,
      };
    },
    fetch: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to fetch a single report.");
      }

      if (!options.environmentKey) {
        throw new Error(
          "A environment key is required to fetch a single report."
        );
      }

      if (!options.reportKey) {
        throw new Error("A report key is required to fetch a single report.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_FlagsV1}/projects/${options?.projectId ? options.projectId : 0}/environments/${options?.environmentKey ? options.environmentKey : 0}/reports/${options?.reportKey ? options.reportKey : 0}`,
        params: {},
        body: null,
      };
    },
    delete: (options = {}) => {
      if (!options.audienceId) {
        throw new Error("An audience ID is required to read an audience.");
      }

      return {
        method: "DEL",
        // prettier-ignore
        resource: `${config.apiURL_V2}/audiences/${options?.audienceId ? options.audienceId : 0}`,
        params: {},
        body: null,
      };
    },
    update: (options = {}) => {
      if (!options.audienceId) {
        throw new Error("An audience ID is required to read an audience.");
      }

      if (!options.body) {
        throw new Error(
          "A JSON payload representing the properties to update the audience is required."
        );
      }

      return {
        method: "PATCH",
        // prettier-ignore
        resource: `${config.apiURL_V2}/audiences/${options?.audienceId ? options.audienceId : 0}`,
        params: {},
        body: {
          ...options.body,
        },
      };
    },
  },
};

export default reports_api;
