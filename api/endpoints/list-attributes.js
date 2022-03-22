import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html

const section = "list_attributes";

const list_attributes_api = {
    list_attributes: {
        list: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to list all attributes for a project.");
            }
            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}?project_id=${options?.projectId ? options.projectId : 0}`,
                params: {},
                body: null,
            };
        },
        create: (options = {}) => {
            if (!options.projectId) {
                throw new Error(
                    "A project ID is required to create a new list attribute."
                )
            }

            if (!options.keyField) {
                throw new Error(
                    "A key field is required to create a new list attribute."
                )
            }

            if (!options.name) {
                throw new Error(
                    "A name is required to create a new list attribute."
                )
            }

            if (!options.body) {
                throw new Error(
                    "A JSON payload representing the new list attribute that should be created is required."
                );
            }

            return {
                method: "POST",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}"}`,
                params: {},
                body: {
                    ...options.body,
                },
            };
        },
        delete: (options = {}) => {
            if (!options.listAttributeId) {
                throw new Error(
                    "A list attribute ID is required to delete a list attribute."
                );
            }

            return {
                method: "DEL",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.listAttributeId ? options.listAttributeId : 0}`,
                params: {},
                body: null,
            };
        },
        read: (options = {}) => {
            if (!options.listAttributeId) {
                throw new Error("A list attribute ID is required to read a list attribute.");
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.listAttributeId ? options.listAttributeId : 0}`,
                params: {},
                body: null,
            };
        },
        update: (options = {}) => {
            if (!options.listAttributeId) {
                throw new Error("A list attribute ID is required to update a list attribute.");
            }

            if (!options.body) {
                throw new Error(
                    "A JSON payload representing the properties to update the list attribute is required."
                );
            }

            return {
                method: "PATCH",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.listAttributeId ? options.listAttributeId : 0}`,
                params: {},
                body: {
                    ...options.body,
                },
            };
        },
    },
};

export default list_attributes_api;