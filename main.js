FBInstant.initializeAsync()
    .then(function () {

        // load assets

        var progress = 0;

        var interval = setInterval(function () {
            progress += 3;
            FBInstant.setLoadingProgress(progress);

            if (progress >= 95) {
                clearInterval(interval);
                FBInstant.startGameAsync()
                    .then(function () {
                        console.log("game has been started");

                        var playerId = FBInstant.player.getID();
                        var playerName = FBInstant.player.getName();
                        var playerPic = FBInstant.player.getPhoto();

                        console.log(playerId, playerName, playerPic);
                    });
            }
        }, 100)

        console.log("loaded");
    }
    );

// https://www.facebook.com/embed/instantgames/7499774610094620/player?game_url=https://localhost:8080