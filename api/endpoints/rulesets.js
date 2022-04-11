import config from "../utils/config.js";


const section = "ruleset";

const ruleset_api = {
    flags: {
        list: (options = {}) => {
            if (!options.projectId) {
                throw new Error("A project ID is required to list flags.");
            }

            return {
                method: "GET",
                // prettier-ignore
                resource: `${config.apiURL_FlagsV1}/projects/${options.projectId}/${section}?project_id=${options?.projectId ? options.projectId : 0}&sort=${options?.sort ? options.sort : ""}&archived=${options?.archived ? options.archived : false}&page=${options?.linkPageIndex ? options.linkPageIndex : 1}&per_page=${options?.perPage ? options.perPage : 100}`,
                params: {},
                body: null,
            };
        }
    }
};

export default ruleset_api;