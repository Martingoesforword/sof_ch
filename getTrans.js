var success = function (body) {
    var ret = body.target[0].target.replace(/(^\s*)|(\s*$)/g, "");
    window.location.href = "https://stackoverflow.com/search?q=" + ret;
}

var getEnglish = function (chinese) {
    $.ajax({
        type: 'POST',
        url: "http://sof.app.martinsong.org/transapi",
        headers: {
            "Content-Type": "application/json",
        },
        timeout: 2000,
        data:  JSON.stringify({
            url:"aa",
            source: [chinese],
            fromlang: "zh",
            tolang: "en",
            trans_type: "zh2en",
            page_id: 144200,
            replaced: true,
            cached: true
        }),
        success: success
    });

}