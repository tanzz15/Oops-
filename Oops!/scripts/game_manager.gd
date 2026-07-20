extends Node

var current_checkpoint : Checkpoint 
var player : Player

var score = 0
var fruit = 0

@onready var score_label = $ScoreLabel
@onready var score_label_2: Label = $ScoreLabel2
@onready var score_label_3: Label = $ScoreLabel3

@onready var fruit_label: Label = $FruitLabel
@onready var fruit_label_2: Label = $FruitLabel2
@onready var fruit_label_3: Label = $FruitLabel3

func respawn_player():
	if current_checkpoint != null and player != null:
		player.global_position = current_checkpoint.global_position
		player.velocity = Vector2.ZERO

func add_point():
	score += 1
	score_label.text = "You collected " + str(score) + " coins."
	score_label_2.text = "You collected " + str(score) + " coins."
	score_label_3.text = "You collected " + str(score) + " coins."

func add_fruit():
	fruit += 1
	fruit_label.text = "You collected " + str(fruit) + " fruits."
	fruit_label_2.text = "You collected " + str(fruit) + " fruits."
	fruit_label_3.text = "You collected " + str(fruit) + " fruits."
