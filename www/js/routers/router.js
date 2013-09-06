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
            },
            error: function(){
               console.log('There was some error in loading and processing the JSON response');
            }
        });
                
        var repos = new Repositories({ nick: userName });
        repos.fetch({
            success: function() {
                var view = new RepositoriesView({ model: repos });
                view.render();
            },
            error: function() {
                console.log('There was some error in loading and processing the JSON response');
            }
        });
    },

    getRepoData: function(userName, repoName) {
        var user = new User({ nick: userName });
        user.fetch({
            success: function() {
                var view = new UserInfoView({ model: user });
                view.render();
            },
            error: function(){
               console.log('There was some error in loading and processing the JSON response');
            }
        });

        var repos = new Repositories({ nick: userName });
        repos.fetch({
            success: function() {
                var view = new RepositoriesView({ model: repos });
                view.render();
            },
            error: function() {
                console.log('There was some error in loading and processing the JSON response');
            }
        });

        var commits = new Commits({ nick: userName, repoName: repoName });
        commits.fetch({
            success: function() {
                var view = new CommitsView({ model: commits });
                view.render({ repoName: repoName });
            },
            error: function() {
                console.log('There was some error in loading and processing the JSON response');
            }
        });
    },

    getCommitData: function(userName, repoName, sha) {
        var user = new User({ nick: userName });
        user.fetch({
            success: function() {
                var view = new UserInfoView({ model: user });
                view.render();
            },
            error: function(){
               console.log('There was some error in loading and processing the JSON response');
            }
        });

        var repos = new Repositories({ nick: userName });
        repos.fetch({
            success: function() {
                var view = new RepositoriesView({ model: repos });
                view.render();
            },
            error: function() {
                console.log('There was some error in loading and processing the JSON response');
            }
        });

        var commit = new Commit({ nick: userName, repoName: repoName, sha: sha });
        commit.fetch({
            success: function() {
                var view = new CommitView({ model: commit });
                view.render({ repoName: repoName });
            },
            error: function() {
                console.log('There was some error in loading and processing the JSON response');
            }
        });
    }
});

var router = new Router();

Backbone.history.start();