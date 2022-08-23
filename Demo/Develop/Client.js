import { QuickMPC } from '../../Src/QuickMPC';

// ローカルで起動したenvoyに対して通信を行う
const qmpcClient = new QuickMPC([
    "http://localhost:9001",
    "http://localhost:9002",
    "http://localhost:9003",
]);

let data;

async function sendShare(event) {
    event.preventDefault();

    $('#button1').attr('disabled', true);
    $('#output1').append("<p>Sending shares...</p>");

    try {
        const startTime = performance.now();

        const [isOk, message, dataId] = await qmpcClient.sendShare(data);
        if(!isOk) {
            alert("Send shares faild: " + message);
            $('#output1').remove();
            $('#button1').attr('disabled', false);
            return;
        }
        const endTime = performance.now();
        console.log("Sending shares:", endTime - startTime, "milli sec");
        console.log("dataID: " + dataId);
        alert("Sending shares completed.")
    } catch(err) {
        alert("Sending shares error: " + err.message);
    }

    $('#output1').remove();
    $('#button1').attr('disabled', false);
    return;
}

async function deleteShare(event) {
    event.preventDefault();
    const dataIdList = $('#data_id_list1').val().split(',').map(String);

    $('#button2').attr('disabled', true);
    $('#output2').append("<p>Deleting shares...</p>");

    try {
        const startTime = performance.now();

        const [isOk, message] = await qmpcClient.deleteShare(dataIdList, "token");
        if(!isOk) {
            alert("Delete shares faild: " + message);
            $('#output2').remove();
            $('#button2').attr('disabled', false);
            return;
        }
        const endTime = performance.now();
        console.log("Deleting shares:", endTime - startTime, "milli sec");
        alert("Deleting shares completed.")
    } catch(err) {
        alert("Deleting shares error: " + err.message);
    }

    $('#output2').remove();
    $('#button2').attr('disabled', false);
    return;
}

async function getSchema(event) {
    event.preventDefault();
    const dataId = $('#data_id').val();

    $('#button3').attr('disabled', true);
    $('#output3').append("<p>Getting Schema...</p>");

    try {
        const [isOk, message, schema] = await qmpcClient.getSchema(dataId, "token");
        if(!isOk) {
            alert("Get Schema failed: " + message);
            $('#output3').remove();
            $('#button3').attr('disabled', false);
            return;
        }
        console.log("Schema: " + schema);
        alert("Get schema is completed. The schema is output to the console.");
    } catch(err) {
        alert("Get schema error: " + err.message);
    }

    $('#output3').remove();
    $('#button3').attr('disabled', false);
    return;
}

async function executeComputation(event) {
    event.preventDefault();
    const methodId = $('#method_id').val();
    const dataIdList = $('#data_id_list2').val().split(',').map(String);
    const join = $('#join').val().split(',').map(Number);
    const src = $('#src').val().split(',').map(Number);
    const index = $('#index').val().split(',').map(Number);
    const target = $('#target').val().split(',').map(Number);

    $('#button4').attr('disabled', true);
    $('#output4').append("<p>Executing computation...</p>");

    try {
        let isOk, message, jobUuid;
        if(methodId == "1") {
            [isOk, message, jobUuid] = await qmpcClient.mean([dataIdList, join, index], src);
        } else if(methodId == "2") {
            [isOk, message, jobUuid] = await qmpcClient.variance([dataIdList, join, index], src);
        } else if(methodId == "3") {
            [isOk, message, jobUuid] = await qmpcClient.sum([dataIdList, join, index], src);
        } else if(methodId == "4") {
            [isOk, message, jobUuid] = await qmpcClient.correl([dataIdList, join, index], [src, target]);
        } else if(methodId == "5") {
            [isOk, message, jobUuid] = await qmpcClient.linearRegression([dataIdList, join, index], [src, target]);
        } else if(methodId == "6") {
            [isOk, message, jobUuid] = await qmpcClient.logisticRegression([dataIdList, join, index], [src, target]);
        } else if(methodId == "9") {
            [isOk, message, jobUuid] = await qmpcClient.getJoinTable([dataIdList, join, index]);
        } else {
            alert("Invalid method id.");
            $("#output4").remove();
            $('#button4').attr('disabled', false);
            return;
        }
        if(!isOk) {
            alert("Execute Computation failed: " + message);
            $("#output4").remove();
            $('#button4').attr('disabled', false);
            return;
        }
        console.log("jobUuid:" + jobUuid);
        alert("Execute computation completed. jobUuid is output to the console.");
    } catch(err) {
        alert("Execute computation error: " + err.message);
    }

    $("#output4").remove();
    $('#button4').attr('disabled', false);
    return;
}

async function getComputationResult(event) {
    event.preventDefault();
    const jobUuid = $("#job_uuid").val();

    $('#button5').attr('disabled', true);
    $('#output5').append("<p>Checking computation result...</p>");

    try {
        const startTime = performance.now();
        const [isOk, message, statuses, secrets] = await qmpcClient.getComputationResult(jobUuid, "token");
        if(!isOk) {
            alert("Get Result failed: " + message);
            console.log("Statues : " + statuses.map((x) => {
                return (x==1)?"PRE_JOB":(x==2)?"READ_DB":(x==3)?"COMPUTE":(x==4)?"WRITE_DB":(x==5)?"COMPLETED":"UNKNOWN";
            }));
            $("#output5").remove();
            $('#button5').attr('disabled', false);
            return;
        }
        const endTime = performance.now();
        console.log("Computation result : ", secrets);
        console.log("Fetch shares and recons shares:", endTime - startTime, "milli sec");
        alert("Execute computation completed. The results is output to the console.");
    } catch(err) {
        alert("Get computation result error: " + err.message);
    }

    $("#output5").remove();
    $('#button5').attr('disabled', false);
    return;
}

function readCsv(input) {
    const file = input.files[0];

    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        data = reader.result;
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}

async function sendModelParams(event) {
    event.preventDefault();
    $('[id^=button_sendmp]').attr('disabled', true);
    $('#output_sendmp').append("<p>Sending model parameters...</p>");

    try {
        const startTime = performance.now();

        const [isOk, message, modelParamJobUuid] = await function() {
          const submit_id = event["submitter"]["id"];
          if(submit_id == "button_sendmp_csv") {
            return qmpcClient.sendModelParams(data, "token");
          }
          if(submit_id == "button_sendmp_json") {
            return qmpcClient.sendModelParamsJson(data, "token");
          }
        }()
        if(!isOk) {
            alert("Send model params faild: " + message);
            $('[id^=button_sendmp]').remove();
            $('[id^=button_sendmp]').attr('disabled', false);
            return;
        }
        const endTime = performance.now();
        console.log("Sending model params: ", endTime - startTime, "milli sec");
        console.log("modelParamJobUuid: " + modelParamJobUuid);
        alert("Sending model params completed.")
    } catch(err) {
        alert("Sending model params error: " + err.message);
    }

    $("#output_sendmp").remove();
    $('[id^=button_sendmp]').attr('disabled', false);
    return;
}

async function predict(event) {
    event.preventDefault();
    const modelID = $('#model_id_predict').val();
    const modelParamJobUuid = $('#model_param_job_uuid_predict').val();
    const dataIdList = $('#data_id_list_predict').val().split(',').map(String);
    const join_row = $('#join_predict').val();
    const join = (join_row == "") ? [] : join_row.split(',').map(Number);
    const src = $('#src_predict').val().split(',').map(Number);
    const index = $('#index_predict').val().split(',').map(Number);

    $('#button_predict').attr('disabled', true);
    $('#output_predict').append("<p>predict...</p>");

    try {
        let isOk, message, jobUuid;
        if(modelID == "1") {
            [isOk, message, jobUuid] = await qmpcClient.linearRegressionPredict(modelParamJobUuid, [dataIdList, join, index], src);
        } else if(modelID == "2") {
            [isOk, message, jobUuid] = await qmpcClient.logisticRegressionPredict(modelParamJobUuid, [dataIdList, join, index], src);
        } else if(modelID == "3") {
            [isOk, message, jobUuid] = await qmpcClient.decisionTreePredict(modelParamJobUuid, [dataIdList, join, index], src);
        } else {
            alert("Invalid model id.");
            $("#output_predict").remove();
            $('#button_predict').attr('disabled', false);
            return;
        }
        if(!isOk) {
            alert("Execute Computation failed: " + message);
            $("#output_predict").remove();
            $('#button_predict').attr('disabled', false);
            return;
        }
        console.log("jobUuid:" + jobUuid);
        alert("predict completed. jobUuid is output to the console.");
    } catch(err) {
        alert("Predict error: " + err.message);
    }

    $("#output_predict").remove();
    $('#button_predict').attr('disabled', false);
    return;
}

async function getDataList(event) {
    event.preventDefault();

    $('#button_get_data_list').attr('disabled', true);
    $('#output_get_data_list').append("<p>Getting DataList...</p>");

    try {
        const [isOk, results] = await qmpcClient.getDataList();
        if(!isOk) {
            alert("Get Data List failed: " + message);
            $('#output_get_data_list').remove();
            $('#button_get_data_list').attr('disabled', false);
            return;
        }
        console.log("dataList: ", results);
        alert("Get Data List is completed. The dataList is output to the console.");
    } catch(err) {
        alert("Get Data List error: " + err.message);
    }

    $('#output_get_data_list').remove();
    $('#button_get_data_list').attr('disabled', false);
    return;
}

window.sendShare = sendShare;
window.deleteShare = deleteShare;
window.getSchema = getSchema;
window.executeComputation = executeComputation;
window.getComputationResult = getComputationResult;
window.readCsv = readCsv;
window.sendModelParams = sendModelParams;
window.predict = predict;
window.getDataList = getDataList;

