import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html

const section = "plan";

const plan_api = {
    plan: {
        read: (options = {}) => {
            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_V2}/${section}`,
                params: {},
                body: null,
            };
        }
    }
};

export default plan_api;
