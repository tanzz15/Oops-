extends CanvasLayer

@onready var score_label = $ScoreLabel
@onready var fruit_label = $FruitLabel
@onready var checkpoint_label = $CheckpointLabel

func _ready():
	checkpoint_label.visible = false

	GameManager.score_changed.connect(_on_score_changed)
	GameManager.fruit_changed.connect(_on_fruit_changed)
	GameManager.checkpoint_activated.connect(_on_checkpoint)

func _on_score_changed(score):
	score_label.text = "You collected %d coins." % score

func _on_fruit_changed(fruit):
	fruit_label.text = "You collected %d fruits." % fruit

func _on_checkpoint():
	checkpoint_label.text = "Checkpoint Activated!"
	checkpoint_label.visible = true

	await get_tree().create_timer(2.0).timeout
	checkpoint_label.visible = false
