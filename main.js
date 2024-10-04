function mode(b) {
	if (b) {
		document.body.setAttribute("data-theme", b);
	}
}
function modeHandler(e) {
	var storedTheme = e.matches ? "dark" : "light";
	mode(storedTheme);
}
var modeMQ = window.matchMedia("(prefers-color-scheme: dark)");
if (modeMQ.addEventListener) {
	modeMQ.addEventListener("change", modeHandler);
} else {
	modeMQ.addListener(modeHandler);
}
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
	mode("dark");
}

var s = document.getElementById("second");
var m = document.getElementById("minute");
var h = document.getElementById("hour");
function reset() {
	var d = new Date();
	document.body.style.setProperty("--timeSecond", d.getSeconds() + (d.getMilliseconds() + 1) / 1000);
	document.body.style.setProperty("--timeMinute", d.getMinutes());
	document.body.style.setProperty("--timeHour", d.getHours());
	s.style.animation = "none";
	m.style.animation = "none";
	h.style.animation = "none";
	void s.offsetHeight; /* Trigger reflow */
	void m.offsetHeight;
	void h.offsetHeight;
	setTimeout(function () {
		s.style.animation = null;
		m.style.animation = null;
		h.style.animation = null;
	}, 1);
}
reset();
for (var i = 0; i < 60; i++) {
	var g = document.createElement("li");
	g.appendChild(document.createElement("span"));
	g.style.setProperty("--number", i);
	document.getElementById("graduations").appendChild(g);
}
document.getElementById("reset-btn").addEventListener("click", reset)