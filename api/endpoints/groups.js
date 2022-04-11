import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html


const section = "groups";

const groups_api = {
    groups: {
        list: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to list all groups.");
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
            if (!options.projectId) {
                throw new Error(
                    "A project ID is required to create a group."
                )
            }

            if (!options.groupName) {
                throw new Error(
                    "A group name is required to create a group."
                )
            }

            if (!options.body) {
                throw new Error(
                    "A JSON payload representing the new group that should be created is required."
                );
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
            if (!options.groupId) {
                throw new Error(
                    "A group ID is required to delete a group."
                );
            }

            return {
                method: "DEL",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.groupId ? options.groupId : 0}`,
                params: {},
                body: null,
            };
        },
        read: (options = {}) => {
            if (!options.groupId) {
                throw new Error("A group ID is required to read a group.");
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.groupId ? options.groupId : 0}`,
                params: {},
                body: null,
            };
        },
        update: (options = {}) => {
            if (!options.groupId) {
                throw new Error("A group ID is required to update a group.");
            }

            if (!options.body) {
                throw new Error(
                    "A JSON payload representing the properties to update the group is required."
                );
            }

            return {
                method: "PATCH",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.groupId ? options.groupId : 0}`,
                params: {},
                body: {
                    ...options.body,
                },
            };
        },
    },
};

export default groups_api;