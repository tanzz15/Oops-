extends Node2D
class_name Checkpoint

@export var spawnpoint = false

var activated = false

func activate():
	GameManager.current_checkpoint = self
	activated = true
	$AnimatedSprite2D.play("default")


func _on_area_2d_body_entered(body):
	if body is Player and !activated:
		activate()
