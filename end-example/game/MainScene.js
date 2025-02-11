//Game-specific classes
class MainScene extends Scene {

    start() {

        this.gameObjects.push(new PlayerGameObject("Player Game Object"))
        this.gameObjects.push(new EnemyGameObject("Enemy Game Object", 200))
        this.gameObjects.push(new EnemyGameObject("Enemy Game Object", 250))
        // this.gameObjects.push(new EnemyGameObject("Enemy Game Object", 350))
        this.gameObjects.push(new ScoreGameObject("Score Game Object"))
        this.gameObjects.push(new MainSceneController("Main Scene Controller"))

        for(let gameObject of this.gameObjects){
            gameObject.start()
        }
    }

    update() {
       
        for(let gameObject of this.gameObjects){
            gameObject.update()
        }


    }
    draw() {

        //Engine drawing code
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ctx.clearRect(0, 0, canvas.width, canvas.height)



        for(let gameObject of this.gameObjects){
            gameObject.draw()
        }

    }
}