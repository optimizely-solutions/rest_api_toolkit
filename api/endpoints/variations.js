import config from "../utils/config.js";

const section = "variations";

const variations_api = {
    variations: {
        list: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to get a list of variations.");
            }

            if (!options.flagKey) {
                throw new Error("A flag_key is required to get a list of variations.");
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/flags/${options.flagKey}/${section}?per_page=${options?.perPage ? options.perPage : 100}&query=${options?.query ? options.query : ""}`,
                params: {},
                body: null,
            };
        },
        create: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to create a variation.");
            }

            if (!options.flagKey) {
                throw new Error("A flag_key is required to create a variation.");
            }

            if (!options.body) {
                throw new Error("A JSON payload representing the new variation that should be created is required.");
            }

            if (!options.body.key) {
                throw new Error("A key is required in the JSON payload to create a variation.");
            }

            if (!options.body.name) {
                throw new Error("A name is required in the JSON payload to create a variation.");
            }

            return {
                method: "POST",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/flags/${options.flagKey}/${section}`,
                params: {},
                body: {
                    ...options.body,
                },
            };
        },
        update: (options = {}) => {
            if (!options.projectId) {
                throw new Error(
                    "A project ID is required to update a variation."
                )
            }

            if (!options.flagKey) {
                throw new Error(
                    "A flag_key is required to update a variation."
                )
            }

            if (!options.body) {
                throw new Error(
                    "A JSON payload representing the ruleset that should be updated is required."
                );
            }

            if (!options.body.op) {
                throw new Error("An operation is required in the JSON payload to update a variation.");
            }

            if (!options.body.path) {
                throw new Error("A path is required in the JSON payload to update a variation.");
            }

            return {
                method: "PATCH",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/flags/${options.flagKey}/${section}`,
                params: {},
                body: {
                    ...options.body,
                },
            };

        },
        fetch: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to get a variation.");
            }

            if (!options.flagKey) {
                throw new Error("A flag_key is required to get a variation.");
            }

            if (!options.variationKey) {
                throw new Error("A variation key is required to get a variation.")
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/flags/${options.flagKey}/${section}/${options.variationKey}`,
                params: {},
                body: null,
            };
        },
        delete: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to delete a variation.");
            }

            if (!options.flagKey) {
                throw new Error("A flag_key is required to delete a variation.");
            }

            if (!options.variationKey) {
                throw new Error("A variation key is required to delete a variation.")
            }

            return {
                method: "DELETE",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/flags/${options.flagKey}/${section}/${options.variationKey}`,
                params: {},
                body: null,
            };
        },
        archive: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to archive a variation.");
            }

            if (!options.flagKey) {
                throw new Error("A flag_key is required to archive a variation.");
            }

            return {
                method: "POST",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/flags/${options.flagKey}/${section}/archived`,
                params: {},
                body: null,
            };
        },
        unarchive: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to unarchive a variation.");
            }

            if (!options.flagKey) {
                throw new Error("A flag_key is required to unarchive a variation.");
            }

            return {
                method: "POST",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/flags/${options.flagKey}/${section}/unarchived`,
                params: {},
                body: null,
            };
        }
    }
};

export default variations_api;