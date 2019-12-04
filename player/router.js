const { Router } = require("express");
const Player = require("./model");
const router = new Router();

router.get("/players", (req, res, next) =>
  Player.findAll().then(players => res.send(players).catch(err => next(err)))
);

router.post("/players", (req, res, next) =>
  Player.create(req.body)
    .then(player => res.send(player))
    .catch(err => next(err))
);

router.get("/players/:id", (req, res, next) =>
  Player.findByPk(req.params.id)
    .then(playerid => res.send(playerid))
    .catch(err => next(err))
);

module.exports = router;
