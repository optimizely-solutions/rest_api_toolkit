import * as OptlyRest from "./api/optly-rest-toolkit.js";

const personalToken = "";
const personalProject = "";

const restAPI = new OptlyRest.OptlyRestToolkit({
  token: personalToken,
  projectId: personalProject,
});

async function testAPI() {
  try {
    let apiResponse = await restAPI.experiments("list");
    //console.log(apiResponse);
    return apiResponse;
  } catch (error) {
    console.log(error);
  }
}

var testResult = await testAPI();
console.log(testResult);
testResult = null;

// Do Not Delete Below

// webix.ui({
//   margin: 5,
//   padding: {
//     top: 5,
//   },
//   rows: [
//     {
//       view: "search",
//       label: "API:",
//       css: { "padding-left": "10px !important" },
//       localId: "api-search",
//       labelWidth: "auto",
//       placeholder: "Endpoint Name",
//       id: "filter-table",
//       width: 400,
//       on: {
//         onTimedKeyPress() {
//           const input = this.getValue().toLowerCase();
//           this.$scope.$$("api-grouplist").filter((obj) => {
//             const name = obj.fname + " " + obj.lname;
//             return name.toLowerCase().indexOf(input) !== -1;
//           });
//         },
//       },
//     },
//     {
//       view: "grouplist",
//       scroll: false,
//       data: data,
//       select: true,
//       localId: "api-grouplist",
//     },
//   ],
// });

// //<script>
// // prettier-ignore
// var data = [
//   {
//     id: "1",
//     type: "folder",
//     value: "Projects",
//     data: [
//     { id: "project_list", type: "folder", value: "List projects" },
// 	  { id: "project_create", type: "folder", value: "Create a project" },
// 	  { id: "project_read", type: "folder", value: "Read a project" },
// 	  { id: "project_update", type: "folder", value: "Update a project" },
//     ],
//   },  
//   {
//     id: "2",
//     type: "folder",
//     value: "Experiments",
//     data: [
//     { id: "exp_list", type: "folder", value: "List experiments" },
// 	  { id: "exp_create", type: "folder", value: "Create an experiment" },
// 	  { id: "exp_delete", type: "folder", value: "Delete an experiment" },
// 	  { id: "exp_read", type: "folder", value: "Read an experiment" },
// 	  { id: "exp_update", type: "folder", value: "Update an experiment" },
// 	  { id: "exp_get_results", type: "folder", value: "Get experiment results" },
// 	  { id: "exp_get_results_timeseries", type: "folder", value: "Get experiment results time series" },
// 	  { id: "exp_get_results_csv", type: "folder", value: "Get experiment results as CSV" },
//     ],
//   },
// ];
// //</script>
