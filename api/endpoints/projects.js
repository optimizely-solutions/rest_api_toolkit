import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html


const section = "projects";

const projects_api = {
    projects: {
        list: (options = {}) => {
            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}&page=${options?.linkPageIndex ? options.linkPageIndex : 1}&per_page=100`,
                params: {},
                body: null,
            };
        },
        create: (options = {}) => {
            if (!options.name) {
                throw new Error(
                    "A name is required to create a project."
                )
            }

            if (!options.body) {
                throw new Error(
                    "A JSON payload representing the new project that should be created is required."
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
        read: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to read a project.");
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.projectId ? options.projectId : 0}`,
                params: {},
                body: null,
            };
        },
        update: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to update a project.");
            }

            if (!options.body) {
                throw new Error(
                    "A JSON payload representing the properties to update the project is required."
                );
            }

            return {
                method: "PATCH",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.projectId ? options.projectId : 0}`,
                params: {},
                body: {
                    ...options.body,
                },
            };
        },
    },
};

export default projects_api;