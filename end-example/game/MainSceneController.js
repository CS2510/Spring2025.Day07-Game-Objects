class MainSceneController extends GameObject{
  constructor(name){
    super(name)
  }

  start(){

  }

  update(){
    let playerGameObject = Engine.currentScene.getByName("Player Game Object")[0]

    let enemyGameObjects = Engine.currentScene.getByName("Enemy Game Object")

    for(let enemyGameObject of enemyGameObjects){

        if (Collisions.inCollision(playerGameObject.playerX, playerGameObject.playerY, 50, enemyGameObject.circleX, enemyGameObject.circleY, 20)) {
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