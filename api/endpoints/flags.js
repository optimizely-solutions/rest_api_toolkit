import config from "../utils/config.js";


const section = "flags";

const flags_api = {
    flags: {
        list: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to list flags.");
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/${section}?project_id=${options?.projectId ? options.projectId : 0}&sort=${options?.sort ? options.sort : ""}&archived=${options?.archived ? options.archived : false}&page=${options?.linkPageIndex ? options.linkPageIndex : 1}&per_page=${options?.perPage ? options.perPage : 100}`,
                params: {},
                body: null,
            };
        },
        create: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to create a flag.");
            }

            if (!options.body) {
                throw new Error("A JSON payload representing the new flag that should be created is required.");
            }

            if (!options.body.key) {
                throw new Error("A key is required to create a flag.");
            }

            return {
                method: "POST",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/project/${options.projectId}/${section}`,
                params: {},
                body: {
                    ...options.body,
                },
            };
        },
        update: (options = {}) => {
            if (!options.projectId) {
                throw new Error(
                    "A project ID is required to update a flag.");
            }

            if (!options.path) {
                throw new Error(
                    "A path is required to update a flag.");
            }

            if (!options.body) {
                throw new Error(
                    "A JSON payload representing the flag that should be updated is required.");
            }

            return {
                method: "PATCH",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/project/${options.projectId}/${section}`,
                params: {},
                body: {
                    ...options.body,
                },
            };

        },
        delete: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to delete a flag.");
            }

            if (!options.flagKey) {
                throw new Error("A flag_key is required to delete a flag.");
            }

            return {
                method: "DEL",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/${section}/${options.flagKey}`,
                params: {},
                body: null,
            };
        },
        fetch: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to fetch a flag.");
            }

            if (!options.flagKey) {
                throw new Error("A flag_key is required to fetch a flag.");
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/${section}/${options.flagKey}`,
                params: {},
                body: null,
            };
        },
        archive: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to archive a flag.");
            }

            if (!options.body) {
                throw new Error("A JSON payload representing the properties to archive a flag is required.");
            }

            return {
                method: "POST",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/${section}/archived`,
                params: {},
                body: {
                    ...options.body,
                },
            };
        },
        unarchive: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to unarchive a flag.");
            }

            if (!options.body) {
                throw new Error("A JSON payload representing the properties to unarchive a flag is required.");
            }

            return {
                method: "POST",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/${section}/unarchived`,
                params: {},
                body: {
                    ...options.body,
                },
            };
        }
    }
};

export default flags_api;