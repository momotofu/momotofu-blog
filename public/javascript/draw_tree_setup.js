function builtinRead(x) {
	if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
		throw "File not found: '" + x + "'";
	return Sk.builtinFiles["files"][x];
}

function runit() {
  let canvas = document.getElementById('hero-canvas');
	let prog = window.turtle_code;
	Sk.configure({read:builtinRead});
	(Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'hero-canvas';
	Sk.TurtleGraphics.height=(window.visualViewport.width > 470 ? 600 : 500);
  Sk.TurtleGraphics.width=canvas.clientWidth;
	let myPromise = Sk.misceval.asyncToPromise(function() {
		return Sk.importMainWithBody("<stdin>", false, prog, true);
	});

	myPromise.then(function(mod) {
		console.log('success');
	},
	function(err) {
		console.log(err.toString());
	});
}

$(document).ready(function(){
  window.draw = runit
  window.draw()
});

//window.onresize = (event) => {
	//window.location.reload();
//}
