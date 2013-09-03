var Controller = Backbone.Router.extend({
    routes: {
        "user/:userName": "getUserData",
        "user/:userName/": "getUserData",
        "user/:userName/:repoName": "getRepoData",
        "user/:userName/:repoName/": "getRepoData"
    },

    getUserData: function(userName) {
        AppData.currentUserNick = userName;
        AppData.currentUser = new User();
        AppData.repos = new Repositories();
    },

    getRepoData: function() {
        console.log('getRepoData');
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