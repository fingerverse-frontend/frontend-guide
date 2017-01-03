# AdQUA Frontend Script Guide
    1. 본 가이드는 자바스크립트 언어를 다루는 프론트엔드개발자를 대상으로 한다.
    2. 읽고, 관리하기 쉬운 코드를 작성하기 위한 코딩 스타일 규약이다. 자바스크립트는 유연한 문법 구조를 가지고 있어 좀 더 엄격한 코딩 스타일 규약이 필요하다.
    3. 작은 프로젝트라 하더라도 이후 유지 보수 및 추가 개발 등의 관리 이슈가 여전히 존재하기 때문에 코딩 스타일 규약이 필요하다.
    4. 가이드는 프로그램의 성능을 해치지 않은 범위 내에서 가독성과 관리 용이성을 우선시하여 작성하였으며, 작업자가 판단하기에 더 나은 내용으로 수정할 수 있다. 특별한 이유가 없는한 이 가이드를 준수하여 코딩한다.
    5. 본 가이드가 변경될 때마다 새로운 버전의 파일을 만들고, 날짜를 기입한다.

# 1 <script> 태그
    1. <script>에는 아래와 같이 여러 가지 속성이 있지만 보통 "src"와 "type" 정도만 사용하고, 사실 "type"은 생략하는 것이 안전하다. ( html5에서, html4.01에서는 type필수, html파일의 attr는 쌍따옴표로 표기 )
    2. HTML은 문서의 상단부터 순차적으로 파싱되고 렌더링되기 때문에, <script>는 문서 하단에서 include 하는 것을 권장한다.
    3. 인라인 스크립트는 페이지 내에 HTML과 자바스크립트 코드가 뒤섞여 가독성을 해치고 디버깅을 어렵게 하는 단점이 있어 사용을 지양하고 외부파일방식을 권장한다. * 꼭 필요한 경우  문서하단에 사용

    <!-- 인라인 스크립트 방식 -->
    <script>
    function inlineScript() {
        alert('This is inline Script!!!');
    }
    </script>
    <!-- 외부 파일 방식 -->
    <script scr="../js/jquery-1.8.3.min.js"></script>

# 2 디렉토리, 파일 구성
    1. HTML, CSS, JS, Image를  별도의 파일로 분리하고, 각각의 폴더에서 관리한다.
     ex) /js/ , /css/, /img/
    2. 오픈소스나 라이브러리 같은 외부 코드를 내부 개발 코드와 분리하고, 각각의 폴더에서 관리한다.
     ex) /js/libs/ 혹은 /js/libs/jquery/
    3. 내부 개발 코드도 서비스 코드와 공용 코드(유틸, 컴포넌트)를 분리, 별도의 폴더나 파일명을 생성하여 관리한다.   ex)~~
    4. 모듈의 성격에 따라 적절히 네임스페이스를 사용하고, 하나의 모듈은 하나의 파일로 구성되어야 하며, 모듈 명은 네임스페이스를 사용하여 종속 관계와 성격을 유추할 수 있도록 한다.
    5. 보통 폴더의 구성과 이름은 네임스페이스와 통일하고, 파일 명은 모듈 명의 최하위 뎁스명을 따른다.
     ex) App.js , App.event.js , App.guide.js
	6. 특별한 이슈가 있지않으면, utf-8 인코딩을 사용한다.

# 3 주석
    1. 한줄 : 한 줄 주석에는 //를 사용하고, 주석을 추가하고 싶은 코드의 상단에 배치한다. 또한 주석 앞에 빈 줄을 넣는다.
    2. 복수행 : 문서화주석으로 사용. JavaDoc 문서 포맷이 많이 쓰인다. 복수행의 코멘트는 /** ... */ 를 사용하고, 파일이나 해당코드의 맨 윗줄 위에 위치하도록 한다.
    3. 추가 코멘트가 필요할까요??

# 4 코딩스타일
    1. 들여쓰기/공백 : 절대 space와 tab을 섞어서 사용하지 않는다. 또한 Tech본부에서는 space 4문자를 사용한다.
    2. 문장의 종료는 반드시 세미콜론(;)을 사용한다.
    3. 블럭의 종료 시에는 세미콜론을 사용하지 않는다.
    3. 선언 줄에 괄호를 열고 닫을때에 인자값이 표현될때는 한줄로 표시한다.
        Ex) function myFunction( val, event ){ }
    4. 문자열이나 리터럴 사용 시 작은 따옴표(Single quotes)로 작성하는 것을 기본으로 하고 일관성을 유지한다.
       HTML을 작성할 때에는 큰 따옴표가 기본으로 사용되기 때문에 혼용 시 백슬래시(\)를 이용하여 일일이 이스케이프(escape)하는 상황 등 가독성을 크게 떨어트릴 수 있다.
       ex) var anchor = '<a href="/' + foo + '.html">' + foo + '</a>';
	5. 값 비교 시 == 보다는 ===을 활용하여 보다 명확하게 파싱처리하라.

# 5 jquery스타일
	1. 버전 :
	   1.X 버전 : IE6 및 그 이후 버전을 지원 - 보통 PC버전(주로 1.8.3 버전-버전에대한 가이드필요)
	   2.X 버전 : IE 6~8버전은 지원하지 않으며, IE9 또는 그 이후 버전을 지원( 모바일 서비스의 경우 사용가능 )
	2. ready : 한 개 js파일에서는 하나의 ready event handler만 사용하고, 최소한으로 사용하도록 한다.
	  ready event handler 내에 익명 함수를 사용하지 마라.
	  ready event handler는 자바스크립트 파일을 모두 로드한 후 외부 파일 인라인에서 포함되어 실행되어야 한다.
	3. selector : jquery의 selector 는 별도로 $식별자를 사용하여 변수화 하고, 최적화하라.
	   selector사용 시 element의 유무를 확인하고 실행하라. Ex) if ($mySelection.length) {
	4. event : 이벤트핸들러는 함수로 구분하여 사용
		IE8 이하 버전 addEventListener()를 지원하지 않으므로, 다음 함수가 필요하다.
		function addListener(target, type, handler){ if (target.addEventListener){ target.addEventListener(type, handler, false); } else if (target.attachEvent) { target.attachEvent(“on” + type, handler); } else { target[“on” + type] = handler; } }
		그래서 보통 jQuery 라이브러리 사용시 제공하는 메서드 사용 $(“#action-btn”).on(“click”, doSomething);
	5. custum event : 사용자 정의 이벤트는 unbind가 용이하도록 하고, 별도의 namespace를 사용하라.
	6. chaining : 두 번 이상 사용되는 DOM 요소는 캐시를 사용하라. 메서드 체이닝을 적극적으로 사용하고, 3번 이상하면 가독성에 문제가 있으니 줄바꿈을 사용하라.
		ex) $(selector)
				.css({ top:10, left:20 })
				.animate({ top:10, left:20 }, 500)
				.addClass('on');
	7. 같은기능의 메서드를 2번 이상 사용할 경우에는 객체형태로 사용하라.
		ex) $(selector).css({ top:10, left:20 });

# 6 네이밍규칙
	1. 기본 함수, 변수명은 최대한 직관적이고 의미있는 단어의 조합으로 표기하며, 소문자 낙타법(카멜표기법 : 첫단어소문자,두번째이상 단어조합부터 대문자)을 따른다.
	2. 네이밍  타입은 변수의 범위와 용도에 따라 총 6가지 -> [ 제한 private ][ 공유 public ][ 전역 global ][ 지역 local ][ 스타틱변수(상수) static ][ 매개변수 Parameters ]
		var DIV = 'div';								// [ 전역변수 ][ 공유 ][ 제한 ]
		var Div = 1; 									// [ 전역변수 ][ 공유 ]
		var _div = 1;									// [ 전역변수 ][ 제한 ]
		var _isDiv = false;  							// [ 전역부울값 ][ 제한 ]
		var _$div = $( '.divClassName' );			// [ 전역변수 ][ 제한 ][ jQuery ]
		function Init(){								// [ 전역함수 ][ 공유 ]
			var div = 1;								// [ 지역변수 ][ 제한 ]
			var $div = $( '.divClassName' );   	// [ 지역변수 ][ 제한 ][ jQuery ]
			var isDiv = false;							// [ 지역부울값 ][ 제한 ]
			function func(name ){					// [ 지역함수 ][ 제한 ]
				console.log(name ); 				// [ 매개변수 ][ 제한 ]
			}
		}
	3. is : 반환 값이 불린인 함수나 변수,
	    get : 불린 이외의 값을 반환하는 함수,
		set : 값을 저장하기 위해 사용하는 함수
		등 함수명은 동사+명사의 형태로 사용하기를 추천한다.
	4. 그외, protected, override
	5. 자바스크립트의 기본 예약어를 제외 한 모듈패턴에서 사용할 예약어는 window, document, $, Init() 등

# 7 모듈패턴
	1. Adqua v1.0 모듈패턴 소스코드 레이아웃을 기본으로 스크립트를 작성한다.
	2. [압축 파일 링크] 및 가이드 구성내용 및 설명 추가

# 8. 추가작성 이슈
	#크로스브라우징
	#유효성 검사
	#파일처리(json, ajax)
	#최소화와 압축 - 난독화
	#테스트 자동화 등
* 코드에서 구성 데이터 분리하기/저장하기 -> 제안
	



