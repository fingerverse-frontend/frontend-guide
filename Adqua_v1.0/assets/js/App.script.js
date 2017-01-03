/* 
	* 네이밍 규칙 *
    타입은 총 7가지 -> [ 제한 ][ 공유 ][ 전역 ][ 지역 ][ 스타틱변수(상수) ][ 매개변수 ][ is ]
	-> 그외, protected, override, get, set

	ex)
		var DIV = "div";									// [ 전역변수 ][ 공유 ][ 제한 ] 
		var Div = 1;										// [ 전역변수 ][ 공유 ]
		var _div = 1;										// [ 전역변수 ][ 제한 ]
		var _isDiv = false;								// [ 전역부울값 ][ 제한 ]
		var _$div = $( ".divClassName" );		// [ 전역변수 ][ 제한 ][ jQuery ]

		function Init(){									// [ 전역함수 ][ 공유 ]
			var div = 1;									// [ 지역변수 ][ 제한 ]
			var $div = $( ".divClassName" );   // [ 지역변수 ][ 제한 ][ jQuery ]
			var isDiv = false;							// [ 지역부울값 ][ 제한 ]

			function func(name ){					// [ 지역함수 ][ 제한 ]
				console.log(name )					// [ 매개변수 ][ 제한 ] 
			}

			func( "최관영수고했어용^^" );
		}
*/

(function( $window, $document, $ )
{
    var script = ( function()
    {

        function Init(){
        }

        return{
            Init : Init
        }

    })();

    $( document ).ready( function()
    {
        App.script = script;
        App.script.Init();
    });

})( window, document, jQuery );