class EnemyGameObject extends GameObject{
  circleX
  circleY
  elapsedTime

  startY

  constructor(name, startY) {
    super(name)
    this.startY = startY
  }

  start() {
    this.circleX = 100
    this.circleY = this.startY
    this.elapsedTime = 0
  }

  update(){
    this.circleX = 100 + 100 * Math.sin(this.elapsedTime)
    this.elapsedTime += Time.deltaTime
        
  }

  draw(){
    ctx.beginPath()
    ctx.fillStyle = "red"
    ctx.strokeStyle = "pink"
    ctx.lineWidth = 5
    ctx.arc(this.circleX, this.circleY, 20, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()

  }
}