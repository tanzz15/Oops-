extends Node2D

@onready var area: Area2D = $Area2D
@onready var animated_sprite: AnimatedSprite2D = $AnimatedSprite2D

var muncul = false
var posisi_awal

func _ready():
	posisi_awal = position
	position.y += 32 # awalnya sembunyi di bawah tanah
	area.body_entered.connect(_on_body_entered)

func _on_body_entered(body):
	if body.name == "Player" and !muncul:
		muncul = true
		var tween = create_tween()
		tween.tween_property(self, "position", posisi_awal, 0.3)
		animated_sprite.play("idle")
