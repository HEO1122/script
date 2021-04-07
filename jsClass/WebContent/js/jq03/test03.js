$(document).ready(function(){
	$('span').height('80px').width('80px');
	
	var elm = $('.mxw600').children('.w3-row').children('span').end();
	$(elm).css('border', '1px solid blue');
	
	/* 
		jquery 에서 태그내에 태그를 덧붙이는 방법
			선택자.append(내용)
		==> 선택한 태그에 내용을 맨마지막부분에 덧붙여주는 함수
	*/
	for(i = 0 ; i < 5; i++ ){
		$(elm).append('<div class="inblock box250 w3-circle ' + 
						w3color[i]+ ' w3-border">circle ' + 
						(i + 1) + '</div>');
	}
	
	$(elm).append(	'<div id="d1">' + // 이런 형식으로 태그를 추가하면 자동적으로 열린태그가 닿힌다.
						'<h2 class="w3-lime">제목 추가</h2>' +
					'</div>'
				);
	/*
		참고 ]
			append() 이용해서 태그를 추가할 경우
			반드시 태그를 문자열 형태로 완성해서 추가해야 한다.
			
		참고 ]
			선택태그의 맨 앞부분에 내용을 추가해주는 함수
				prepend();
	*/
	
	$(elm).get()[0].innerHTML = $(elm).get()[0].innerHTML +
									'<div class="w3-col w3-button w3-blue" id="btn1">click</div>';
	$('#btn1').click(function(){
		$('span').eq(0).toggle(500);
/*
		var st = $('span').eq(0);
		//alert($(st).css('display') == 'none'); // *****
		if($(st).css('display') == 'none'){
			$(st).stop().show(500);
		} else {
			$(st).stop().hide(500);
		}
		*/
	});
	
	// each()
	function doEach(index, item){
		$(item).addClass(w3color[index]);
	}
	
	$('.w3-row > span').each(doEach);
	
	var str1 = document.getElementsByClassName('w3-row')[0].getAttribute('class');
	var str2 = document.getElementsByClassName('w3-row')[0].classList;
	console.log(str1 + '\n' + str2 );
	
	// 클래스 속성 읽어오기
	var cls1 = $('.w3-row').eq(0).attr('class');
	console.log('jquery attr() : ' + cls1);
	
	// 클래스 속성값 변경하기
	$('.w3-row').eq(0).attr('class', 'w3-col w3-border w3-padding');
});













