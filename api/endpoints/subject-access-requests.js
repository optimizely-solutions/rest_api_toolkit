import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html



const section = "subject-access-requests";

const subjectAccessRequest_api = {
    subjectAccessRequest: {
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
            if (!options.dataType) {
                throw new Error(
                    "A data type is required to create a Subject Access Request."
                )
            }

            if (!options.identifier) {
                throw new Error(
                    "An identifier is required to create a Subject Access Request."
                )
            }

            if (!options.identifierType) {
                throw new Error(
                    "An identifier type is required to create a Subject Access Request."
                )
            }

            if (!options.requestType) {
                throw new Error(
                    "A request type is required to create a Subject Access Request."
                )
            }

            if (!options.body) {
                throw new Error(
                    "A JSON payload representing the new Subject Access Request that should be created is required."
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
            if (!options.requestId) {
                throw new Error("A request ID is required to read a Subject Access Request.");
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.requestId ? options.requestId : 0}`,
                params: {},
                body: null,
            };
        },
    },
};

export default subjectAccessRequest_api;