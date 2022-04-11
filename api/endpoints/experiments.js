import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html

const section = "experiments";

const experiments_api = {
  experiments: {
    list: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to list all experiments.");
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
        throw new Error("A JSON payload representing the new experiment that should be created is required.");
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
      if (!options.experimentId) {
        throw new Error("An experiment ID is required to delete an experiment.");
      }

      return {
        method: "DEL",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.experimentId ? options.experimentId : 0}`,
        params: {},
        body: null,
      };
    },
    read: (options = {}) => {
      if (!options.experimentId) {
        throw new Error("An experiment ID is required to read an experiment.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.experimentId ? options.experimentId : 0}`,
        params: {},
        body: null,
      };
    },
    update: (options = {}) => {
      if (!options.experimentId) {
        throw new Error("An experiment ID is required to read an experiment.");
      }

      if (!options.body) {
        throw new Error("A JSON payload representing the properties to update an experiment is required.");
      }

      return {
        method: "PATCH",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.experimentId ? options.experimentId : 0}`,
        params: {},
        body: {
          ...options.body,
        },
      };
    },
    results: (options = {}) => {
      if (!options.experimentId) {
        throw new Error("An experiment ID is required to get the results for an experiment.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.experimentId ? options.experimentId : 0}/results`,
        params: {},
        body: null,
      };
    },
    resultsTimeSeries: (options = {}) => {
      if (!options.experimentId) {
        throw new Error("An experiment ID is required to get the results time series for an experiment.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.experimentId ? options.experimentId : 0}/timeseries`,
        params: {},
        body: null,
      };
    },
    resultsCSV: (options = {}) => {
      if (!options.experimentId) {
        throw new Error("An experiment ID is required to get the results as a CSV file for an experiment.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}/${options?.experimentId ? options.experimentId : 0}/results/csv`,
        params: {},
        body: null,
      };
    },
  },
};

export default experiments_api;
