var Slack = require('slack-node');
 
webhookUri = "https://hooks.slack.com/services/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";
 
slack = new Slack();
slack.setWebhook(webhookUri);

var log = function(api, request, error){
    var content;
    if (arguments.length === 1){
        content = api;
    } else if (arguments.length === 3){
        request = JSON.stringify(request);
        error = JSON.stringify(error);
        content = '*API:* `'+api+'`\nRequest: ```\n'+request+'\n```\nError: ```'+error+'```';
    }
    slack.webhook({
      channel: "#log-dev",
      username: "skynet",
      icon_emoji: ":ghost:",
      text: content
    }, function(err, response) {
      console.log(response);
    });
};

exports.log = log;