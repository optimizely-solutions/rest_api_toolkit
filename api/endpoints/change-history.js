import config from "../utils/config.js";

//Optimizely Rest API V2
//https://library.optimizely.com/docs/api/app/v2/index.html

const section = "changes";

const changes_api = {
  changes: {
    list: (options = {}) => {
      if (!options.projectId) {
        throw new Error("A project ID is required to list all changes.");
      }

      return {
        method: "GET",
        // prettier-ignore
        resource: `${config.apiURL_V2}/${section}
          ?project_id=${options?.projectId ? options.projectId : 0}
          ${options?.id ? '&id=' + options.id : ''}
          ${options?.startTime ? '&start_time=' + options.startTime : ''}
          ${options?.endTime ? '&end_time=' + options.endTime : ''}
          ${options?.user ? '&user=' + options.user : ''}
          ${options?.entityType ? '&entity_type=' + options.entityType : ''}
          ${options?.entity ? '&entity=' + options.entity : ''}
          &page=${options?.linkPageIndex ? options.linkPageIndex : 1}
          &per_page=${options?.perPage ? options.perPage : 100}`,
        params: {},
        body: null,
      };
    },
  },
};

export default changes_api;