import config from "../utils/config.js";


const section = "ruleset";

const ruleset_api = {
    ruleset: {
        fetch: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to fetch a ruleset.");
            }

            if (!options.flagKey) {
                throw new Error("A flag_key is required to fetch a ruleset.");
            }

            if (!options.environmentKey) {
                throw new Error("An environment_key is required to fetch a ruleset.");
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/flags/${options.flagKey}/environments/${options.environmentKey}/${section}`,
                params: {},
                body: null,
            };
        },
        update: (options = {}) => {
            if (!options.projectId) {
                throw new Error(
                    "A project ID is required to update a ruleset.");
            }

            if (!options.flagKey) {
                throw new Error(
                    "A flag_key is required to update a ruleset.");
            }

            if (!options.environmentKey) {
                throw new Error(
                    "An environment_key is required to update a ruleset.");
            }

            if (!options.body) {
                throw new Error(
                    "A JSON payload representing the ruleset that should be updated is required.");
            }

            return {
                method: "PATCH",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/flags/${options.flagKey}/environments/${options.environmentKey}/${section}`,
                params: {},
                body: {
                    ...options.body,
                },
            };

        },
        enable: (options = {}) => {
            if (!options.projectId) {
                throw new Error(
                    "A project ID is required to enable a ruleset.");
            }

            if (!options.flagKey) {
                throw new Error(
                    "A flag_key is required to enable a ruleset.");
            }

            if (!options.environmentKey) {
                throw new Error(
                    "An environment_key is required to enable a ruleset.");
            }

            return {
                method: "POST",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/flags/${options.flagKey}/environments/${options.environmentKey}/${section}/enabled`,
                params: {},
                body: {
                    ...options.body,
                },
            };
        },
        disable: (options = {}) => {
            if (!options.projectId) {
                throw new Error(
                    "A project ID is required to disable a ruleset.");
            }

            if (!options.flagKey) {
                throw new Error(
                    "A flag_key is required to disable a ruleset.");
            }

            if (!options.environmentKey) {
                throw new Error(
                    "An environment_key is required to disable a ruleset.");
            }

            return {
                method: "POST",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/flags/${options.flagKey}/environments/${options.environmentKey}/${section}/disabled`,
                params: {},
                body: {
                    ...options.body,
                },
            };
        }
    }
};

export default ruleset_api;