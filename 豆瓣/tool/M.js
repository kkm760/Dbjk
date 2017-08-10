//https://api.douban.com/v2/movie/search?q=

function clickDob(val,num){
	$.ajax({
		url:'https://api.douban.com/v2/movie/search?callback=?',
		dataType:'jsonp',
		data:{
			q:val,
			start:num
		},
		success:function(data){
			console.log(data);
			let t = template('txtx',data);
			$('#app').html(t);
		}
	})
}
