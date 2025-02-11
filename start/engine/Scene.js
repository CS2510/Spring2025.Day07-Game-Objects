//Game Engine class
class Scene {
  gameObjects = []

  start() {

  }
  draw() {

  }
  update() {

  }

  getByName(name){
    let toReturn = []
    for(let gameObject of this.gameObjects){
      if(gameObject.name == name){
        toReturn.push(gameObject)
      }
    }
    return toReturn
  }
}