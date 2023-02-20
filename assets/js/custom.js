
// show <video> control bar
function video_show_control(obj)
{
    if (!obj.hasAttribute("controls")) {
        obj.setAttribute("controls", "")
        }

}

// hide <video> control bar
function video_hide_control(obj)
{		
    if (obj.hasAttribute("controls")) {
            obj.removeAttribute("controls")
            }
}
