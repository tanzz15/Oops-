extends Node

var current_checkpoint : Checkpoint 
var score = 0
var player : Player

@onready var score_label = $ScoreLabel

func respawn_player():
	if current_checkpoint != null and player != null:
		player.global_position = current_checkpoint.global_position
		player.velocity = Vector2.ZERO

func add_point():
	score += 1
	score_label.text = "You collected " + str(score) + " coins."
