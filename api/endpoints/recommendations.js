import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html


const section = "recommendations";
const subSection = "catalogs";

const dateFormat = /^\d{4}\-\d{2}\-\d{2}$/;
const todayDate = new Date().dateFormat('yyyy-mm-dd');

function checkingForValidDate(date) {

    dateFormat.test(date);
}

const recommendations_api = {
    recommendations: {
        read: (options = {}) => {
            if (!options.date) {
                throw new Error(
                    "A date is required to download a csv of current catalog data.");
            }

            if (!checkingForValidDate(options.date)) {
                throw new Error(
                    "A valid formatted Date is needed to download a csv of current catalog data."
                );
            }

            if (!options.catalogId) {
                throw new Error(
                    "A catalog ID is required to download a csv of current catalog data."
                );
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${subSection}/"${options?.catalogId ? options.catalogId : ""}"/"${options?.date ? options.date : todayDate}"`,
                params: {},
                body: null,
            };
        }
    }
};
export default recommendations_api;