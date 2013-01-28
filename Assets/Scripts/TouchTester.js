#pragma strict

var texture : Texture2D;

function OnGUI() {
    GUI.color = Color(1, 1, 1, 0.6);
    var size = Screen.width / 4;
    for (var touch in Input.touches) {
        var rect = Rect(touch.position.x - size / 2, Screen.height - touch.position.y - size / 2, size, size);
        GUI.DrawTexture(rect, texture);
    }
}
