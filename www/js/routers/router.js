var Router = Backbone.Router.extend({
    routes: {
        "user/:userName": "getUserData",
        "user/:userName/:repoName": "getRepoData",
        "repos/:userName/:repoName/commits/:sha": "getCommitData",
    },

    getUserData: function(userName) {
        var user = new User({ nick: userName });
        user.fetch({
            success: function() {
                var view = new UserInfoView({ model: user });
                view.render();
            }
        });
                
        var repos = new Repositories({ nick: userName });
        repos.fetch({
            success: function() {
                var view = new RepositoriesView({ model: repos });
                view.render();
            }
        });
    },

    getRepoData: function(userName, repoName) {
        var user = new User({ nick: userName });
        user.fetch({
            success: function() {
                var view = new UserInfoView({ model: user });
                view.render();
            }
        });

        var repos = new Repositories({ nick: userName });
        repos.fetch({
            success: function() {
                var view = new RepositoriesView({ model: repos });
                view.render();
            }
        });

        var commits = new Commits({ nick: userName, repoName: repoName });
        commits.fetch({
            success: function() {
                var view = new CommitsView({ model: commits });
                view.render({ repoName: repoName });
            }
        });
    },

    getCommitData: function(userName, repoName, sha) {
        var user = new User({ nick: userName });
        user.fetch({
            success: function() {
                var view = new UserInfoView({ model: user });
                view.render();
            }
        });

        var repos = new Repositories({ nick: userName });
        repos.fetch({
            success: function() {
                var view = new RepositoriesView({ model: repos });
                view.render();
            }
        });

        var commit = new Commit({ nick: userName, repoName: repoName, sha: sha });
        commit.fetch({
            success: function() {
                var view = new CommitView({ model: commit });
                view.render({ repoName: repoName });
            }
        });
    }
});

var router = new Router();
Backbone.history.start();