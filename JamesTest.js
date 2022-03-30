import * as OptlyRest from "./api/optly-rest-toolkit.js";

const personalToken = "2:62OmLOOGo--3wGql4SvfUpCDtWQ8ILSClkoGRUgMGwaB4srE8ius";
const personalProject = "18250460275";





var testResult = await optimizelyRestAPI();
console.log(testResult);
testResult = null;

const restAPI = new OptlyRest.OptlyRestToolkit({
    token: personalToken,
    projectId: personalProject,
});


async function optimizelyRestAPI() {
    try {
        let apiResponse = await restAPI.features("list");
        //console.log(apiResponse);
        return apiResponse;
    } catch (error) {
        console.log(error);
    }
}


async function featureFlagsPerProject(personalProject, personalToken) {

    try {

        // Setup of the Optimizely Rest API Tool Kit
        const restAPI = new OptlyRest.OptlyRestToolkit({
            token: personalToken,
            projectId: personalProject,
        });

        // Call Optmizely Rest API to pull a list of features for a specific project.
        let featuresList = optimizelyRestAPI();

        // Loop through all of the features
        for (var i = 0; i < featuresList.length; i++) {
            let feature = featuresList[i];

            let environments feature.




        }


    }
    catch (error) {
        console.log(error);
    }


}