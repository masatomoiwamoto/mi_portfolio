(function(){
  //タブ情報取得
  var introButton = document.getElementById('start');
	var hisButton = document.getElementById('stop');
	var resetButton = document.getElementById('reset');
	var timerText = document.getElementById('timerText');
  //active inactive 切り替え
	function setButtonState(start,stop,reset){
		startButton.className = start ? 'btn active' : 'btn inactive';
		stopButton.className = stop ? 'btn active' : 'btn inactive';
		resetButton.className = reset ? 'btn active' : 'btn inactive';
		}

		setButtonState(true, false, false);

	//startBttonを押した時の処理
	startButton.addEventListener('click', function(){
		setButtonState(false, true, false);
		});

	//stopButtonを押した時の処理
	stopButton.addEventListener('click', function(){
		setButtonState(true, false, true);
		});

	//resetButtonを押した時の処理
	resetButton.addEventListener('click', function(){
		setButtonState(true, false, false);
		});
})();
