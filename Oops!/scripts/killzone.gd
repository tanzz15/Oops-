extends Area2D

@onready var timer = $Timer
var player = null

func _on_body_entered(body):
	if body is Player:
		print("You died!")
		body.die()
