import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html


const section = "pages";

const pages_api = {
    pages: {
        list: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to get all pages.");
            }
            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}?project_id=${options?.projectId ? options.projectId : 0}&page=${options?.linkPageIndex ? options.linkPageIndex : 1}&per_page=100`,
                params: {},
                body: null,
            };
        },
        create: (options = {}) => {
            if (!options.projectId) {
                throw new Error(
                    "A project ID is required to create a page."
                )
            }

            if (!options.pageName) {
                throw new Error(
                    "A page name is required to create a page."
                )
            }

            if (!options.editUrl) {
                throw new Error(
                    "A edit URL is required to create a page."
                )
            }

            if (!options.body) {
                throw new Error(
                    "A JSON payload representing the new page that should be created is required."
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
            if (!options.pageId) {
                throw new Error(
                    "A page ID is required to delete a page."
                );
            }

            return {
                method: "DEL",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.pageId ? options.pageId : 0}`,
                params: {},
                body: null,
            };
        },
        read: (options = {}) => {
            if (!options.pageId) {
                throw new Error("A page ID is required to read a page.");
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.pageId ? options.pageId : 0}`,
                params: {},
                body: null,
            };
        },
        update: (options = {}) => {
            if (!options.pageId) {
                throw new Error("A page ID is required to update a page.");
            }

            if (!options.body) {
                throw new Error(
                    "A JSON payload representing the properties to update the page is required."
                );
            }

            return {
                method: "PATCH",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.pageId ? options.pageId : 0}`,
                params: {},
                body: {
                    ...options.body,
                },
            };
        },
    },
};

export default pages_api;