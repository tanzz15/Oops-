extends Control

func _on_start_pressed() -> void:
	get_tree().change_scene_to_file("res://scenes/game.tscn")

func _on_button_2_pressed() -> void:
	print("Settings pressed")

func _on_button_3_pressed() -> void:
	get_tree().quit()
