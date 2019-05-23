function testaaaaaa() {
	console.log( 222222222222222 );
	var test_constructor = document.getElementById( 'test_constructor' );
	test_constructor.addEventListener( 'click' , function() {
		test_constructor.innerHTML = new Date().getTime();
		window.native.constructor( JSON.stringify( {

			name: "lwm.xposed.mobileqq.activity.activity_main.JoinQQGroup" ,
			sign: 0 ,
			index_call: new Date().getTime() ,
			index_return: new Date().getTime() ,
			args: [-1] ,
			args_type: ["lwm.xposed.mobileqq.utility.Global_Var"] ,
			is_args_value: false

		} ) );
	} , false );

	var test_invoke = document.getElementById( 'test_invoke' );
	test_invoke.addEventListener( 'click' , function() {
		test_invoke.innerHTML = new Date().getTime();

		window.native.invoke( JSON.stringify( {
			name: "toString" ,
			sign: 0 ,
			index_call: 111111111 ,
			index_return: new Date().getTime() - 2343 ,
			args: [] ,
			args_type: [] ,
			is_args_value: false

		} ) );
	} , false );

	var test_invoke_static = document.getElementById( 'test_invoke_static' );
	test_invoke_static.addEventListener( 'click' , function() {
		test_invoke_static.innerHTML = new Date().getTime();

		window.native.invoke_static( JSON.stringify( {

			name: "lwm.xposed.mobileqq.utility.MApplication----static_test" ,
			sign: 0 ,
			index_call: new Date().getTime() ,
			index_return: new Date().getTime() - 2343 ,
			args: [] ,
			args_type: [] ,
			is_args_value: false

		} ) );
	} , false );

	var JoinQQGroup = document.getElementById( 'JoinQQGroup' );
	JoinQQGroup.addEventListener( 'click' , function() {
		JoinQQGroup.innerHTML = new Date().getTime();

		/*得到uri*/
		window.native.constructor( JSON.stringify( {

			name: "android.content.Intent" ,
			sign: 0 ,
			index_call: 0 ,
			index_return: 100 ,
			args: [] ,
			args_type: [] ,
			is_args_value: false

		} ) );

		/** 得到uri */
		window.native.invoke_static( JSON.stringify( {

			name: "android.net.Uri----parse" ,
			sign: 0 ,
			index_call: 0 ,
			index_return: 101 ,
			args: ["mqqopensdkapi://bizAgent/qm/qr?url=http%3a%2f%2fqm.qq.com%2fcgi-bin%2fqm%2fqr%3ffrom%3dapp%26p%3dandroid%26k%3dotEuesAkHjvn2sO6VlrhMS1AJpT4Ks_j"] ,
			args_type: ["java.lang.String"] ,
			is_args_value: true

		} ) );
		/* 意图 setData(); */
		window.native.invoke( JSON.stringify( {

			name: "setData" ,
			sign: 0 ,
			index_call: 100 ,
			index_return: 0 ,
			args: [101] ,
			args_type: ["android.net.Uri"] ,
			is_args_value: false

		} ) );
		/** 开始 */
		window.native.invoke( JSON.stringify( {

			name: "startActivity" ,
			sign: 0 ,
			index_call: -2 ,
			index_return: 0 ,
			args: [100] ,
			args_type: ["android.content.Intent"] ,
			is_args_value: false

		} ) );

	} , false );
	console.log( 3333333333333333333 )
}
