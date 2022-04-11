import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html


const section = "billing";
const subSection = "usage";
const dateFormat = /^\d{4}\-\d{2}\-\d{2}$/;
const todayDate = new Date().dateFormat('yyyy-mm-dd');


function checkingForValidDate(date) {

    dateFormat.test(date);
}

const impressionsUsage_api = {
    impressionsUsage: {
        list: (options = {}) => {
            if (!options.accountId) {
                throw new Error(
                    "An account ID is required to list all Impressions.");
            }

            if (!options.usageDateFrom) {
                throw new Error(
                    "Usage From Date is required to list all Impressions.");
            }

            if (!options.usageDateTo) {
                throw new Error(
                    "Usage To Date is required to list all Impressions.");
            }

            if (!checkingForValidDate(options.usageDateFrom)) {
                throw new Error(
                    "A valid formatted Usage Date From is needed to list all Impressions."
                );
            }

            if (!checkingForValidDate(options.usageDateTo)) {
                throw new Error(
                    "A valid formatted Usage Date To is needed to list all Impressions."
                );
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${subSection}/${options?.accountId ? options.accountId : 0}?usage_date_from="${options?.usageDateFrom ? options.usageDateFrom : todayDate}"&usage_date_to="${options?.usageDateTo ? options.usageDateTo : todayDate}"&page=${options?.linkPageIndex ? options.linkPageIndex : 1}&per_page=${options?.page ? options.page : 100}&platforms=${options?.platforms ? options.platforms : ["edge", "fullstack", "web"]}&sort=${options?.sort ? options.sort : "impression_count"}&order=${options?.order ? options.order : "desc"}`,
                params: {},
                body: null,
            };
        },
        read: (options = {}) => {
            if (!options.accountId) {
                throw new Error("An account ID is required to read an impression.");
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}/${subSection}/${options?.accountId ? options.accountId : 0}/summary`,
                params: {},
                body: null,
            };
        }
    }
};
export default impressionsUsage_api;