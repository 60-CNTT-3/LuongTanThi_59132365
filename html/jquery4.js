$(document).ready(function() {
	$("#kt").click(function(event) {
		/* Act on the event */
		var tdn = $('#tdn').val();
		var mk = $('#mk').val();
		var nlmk = $('#nlmk').val();
		if (tdn == "" || mk == "" || nlmk == "")
			alert('chưa nhập dữ liệu');
		if (tdn.length < 6)
			alert('tối thiểu 6 ký tự');
		if (mk !== nlmk)
			alert('Không khớp mk')
		if (tdn == "" || mk == "" || nlmk == "")
			$("#tdn").css("background-color", "yellow");
		if (tdn.length < 6)
			$("#mk").css("background-color", "yellow");
		if (mk !== nlmk)
			$("#nlmk").css("background-color", "yellow");
	});
});

