class ControllerGameObject extends GameObject {
  constructor(name) {
    super(name)
  }
  start() {

  }
  update() {
    let playerGameObject = Engine.currentScene.findGameObject("Player Game Object")
    let guardGameObjects = Engine.currentScene.findGameObjects("Guard Game Object")

    for (let guardGameObject of guardGameObjects) {
      if (Collisions.inCollision(playerGameObject.playerX, playerGameObject.playerY, 50, guardGameObject.circleX, guardGameObject.circleY, 20)) {
        Engine.currentScene = new DeathScene()
        Engine.currentScene.start()
      }
    }

    if (playerGameObject.playerY > 350) {
      Engine.currentScene = new WinScene()
      Engine.currentScene.start()
    }
  }
}