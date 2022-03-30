import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html


const section = "experiments";
const subSection = "sections";

const sections_api = {
    sections: {
        list: (options = {}) => {
            if (!options.experimentId) {
                throw new Error("A experiment ID is required to get all sections in a multivariate test.");
            }
            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.experimentId ? options.experimentId : 0}/${subSection}?page=${options?.linkPageIndex ? options.linkPageIndex : 1}&per_page=${options?.perPage ? options.perPage : 100}`,
                params: {},
                body: null,
            };
        },
        create: (options = {}) => {
            if (!options.experimentId) {
                throw new Error(
                    "An experiment ID is required to create a section to a multivariate test."
                )
            }

            if (!options.variations) {
                throw new Error(
                    "Variation(s) are required to create a section to a multivariate test."
                )
            }

            if (!options.body) {
                throw new Error(
                    "A JSON payload representing the new section to a multivariate test that should be created is required."
                );
            }

            return {
                method: "POST",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.experimentId ? options.experimentId : 0}/${subSection}`,
                params: {},
                body: {
                    ...options.body,
                },
            };
        },
        delete: (options = {}) => {
            if (!options.sectionId) {
                throw new Error(
                    "A section ID is required to delete a section of a multivariate test."
                );
            }

            if (!options.experimentId) {
                throw new Error(
                    "An experiment ID is required to delete a section of a multivariate test."
                );
            }

            return {
                method: "DEL",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.experimentId ? options.experimentId : 0}/${subSection}/${options?.sectionId ? options.sectionId : 0}`,
                params: {},
                body: null,
            };
        },
        read: (options = {}) => {
            if (!options.sectionId) {
                throw new Error("A section ID is required to read a section of a multivariate test.");
            }

            if (!options.experimentId) {
                throw new Error("An experiment ID is required to read a section of a multivariate test.");
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.experimentId ? options.experimentId : 0}/${subSection}/${options?.sectionId ? options.sectionId : 0}`,
                params: {},
                body: null,
            };
        },
        update: (options = {}) => {
            if (!options.sectionId) {
                throw new Error("A section ID is required to update a section of a multivariate test.");
            }

            if (!options.experimentId) {
                throw new Error("An experiment ID is required to update a section of a multivariate test.");
            }

            if (!options.body) {
                throw new Error(
                    "A JSON payload representing the properties to update the section of a multivariate test is required."
                );
            }

            return {
                method: "PATCH",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${options?.experimentId ? options.experimentId : 0}/${subSection}/${options?.sectionId ? options.sectionId : 0}`,
                params: {},
                body: {
                    ...options.body,
                },
            };
        },
    },
};

export default sections_api;