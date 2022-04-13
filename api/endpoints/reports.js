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
      if (!options.projectId) {
        throw new Error("A project ID is required to delete a report.");
      }

      if (!options.environmentKey) {
        throw new Error("An environment key is required to delete a report.");
      }

      if (!options.reportKey) {
        throw new Error("A report key is required to delete a report.");

      }
      return {
        method: "DELETE",
        // prettier-ignore
        resource: `${config.apiURL_FlagsV1}/projects/${options?.projectId ? options.projectId : 0}/environments/${options?.environmentKey ? options.environmentKey : 0}/reports/${options?.reportKey ? options.reportKey : 0}`,
        params: {},
        body: null,
      };
    },
    reset: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to reset report results.");
      }

      if (!options.environmentKey) {
        throw new Error("An environment key is required reset report results.");
      }

      if (!options.reportKey) {
        throw new Error("A report key is required reset report results.");

      }
      return {
        method: "POST",
        // prettier-ignore
        resource: `${config.apiURL_FlagsV1}/projects/${options?.projectId ? options.projectId : 0}/environments/${options?.environmentKey ? options.environmentKey : 0}/reports/${options?.reportKey ? options.reportKey : 0}/reset-results`,
        params: {},
        body: null,
      };
    },
    archive: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to archive a report.");
      }

      if (!options.environmentKey) {
        throw new Error("An environment key is required to archive a report.");
      }

      return {
        method: "POST",
        // prettier-ignore
        resource: `${config.apiURL_FlagsV1}/projects/${options?.projectId ? options.projectId : 0}/environments/${options?.environmentKey ? options.environmentKey : 0}/reports/archive`,
        params: {},
        body: {
          ...options.body,
        },
      };
    },
    unarchive: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to unarchive a report.");
      }

      if (!options.environmentKey) {
        throw new Error("An environment key is required to unarchive a report.");
      }

      return {
        method: "POST",
        // prettier-ignore
        resource: `${config.apiURL_FlagsV1}/projects/${options?.projectId ? options.projectId : 0}/environments/${options?.environmentKey ? options.environmentKey : 0}/reports/unarchive`,
        params: {},
        body: {
          ...options.body,
        },
      };
    }
  }
};

export default reports_api;
