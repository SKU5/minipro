function submit() {
        var name = document.getElementById("name").value
      	var arr_checkBoxes = document.getElementsByClassName("checkBoxes");
      	var count = 0;
      	for (var i = 0; i < arr_checkBoxes.length; i++) {
      		if (arr_checkBoxes[i].checked) {
      			count++;
      		}
        }
      	if (count > 0) {
          alert(name + '様' + 'ご購入ありがとうございます');
      		return true;
      	} else {
      		alert("項目を1つ以上選択してください。");
      		return false;
      	}
      }

function timeout_callback() {
  alert("早急に入力してください。在庫がなくなってしまいます。");
}
setTimeout(timeout_callback,240000);
