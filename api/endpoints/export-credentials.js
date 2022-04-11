import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html

const section = "credentials";

const credentials_api = {
  credentials: {

    exportCredentials: (options = {}) => {

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/export/credentials?duration="1h"`,
        params: {},
        body: null,
      };
    }
  }
};

export default credentials_api;
