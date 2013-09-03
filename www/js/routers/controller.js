var Controller = Backbone.Router.extend({
    routes: {
        "user/:userName": "getUserData",
        "user/:userName/": "getUserData",
        "user/:userName/:repoName": "getRepoData",
        "user/:userName/:repoName/": "getRepoData",
        "repos/:userName/:repoName/commits/:sha": "getCommitData",
        "repos/:userName/:repoName/commits/:sha/": "getCommitData"
    },

    getUserData: function(userName) {
        AppData.currentUserNick = userName;
        AppData.currentUser = new User();
        AppData.repos = new Repositories();
        $('#repoCommitsBlock').html('');
    },

    getRepoData: function(userName, repoName) {
        AppData.currentUserNick = userName;
        AppData.currentRepoName = repoName;
        AppData.currentUser = new User();
        AppData.repos = new Repositories();
        AppData.commits = new Commits();
    },

    getCommitData: function(userName, repoName, sha) {
        AppData.currentUserNick = userName;
        AppData.currentRepoName = repoName;
        AppData.currentCommitSha = sha;
        AppData.currentUser = new User();
        AppData.repos = new Repositories();
        AppData.commit = new Commit({ "NeedLoadData": true });
        $('#repoCommitsBlock').html('');
    },

    start: function () {
        $(".block").hide(); // Прячем все блоки
        $("#start").show(); // Показываем нужный
    },

    success: function () {
        $(".block").hide();
        $("#success").show();
    },

    error: function () {
        $(".block").hide();
        $("#error").show();
    }
});

var controller = new Controller(); // Создаём контроллер

Backbone.history.start();  // Запускаем HTML5 History push