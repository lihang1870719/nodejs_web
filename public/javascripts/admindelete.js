$(function(){
	$('.del').on('click',function(e){
		var target=$(e.target)
		//var Arraybtn=target.toArray();
		//var Arraydate=Arraybtn[0].attributes[1];
		//var id=Arraydate.nodeValue;
		//ｅ是指事件，ｅ.target是指引发事件的DOM元素
		//this e.target区别在于this是会变化的e.target是一直指向
		//本例中的button这个元素
		var id=e.target.getAttribute('data-id');
		console.log(id);
		var tr =$('.user-id-'+id)
		$.ajax({
			type:'DELETE',
			url:'/list'
		})
		.done(function(results){
			if(results.success===1)
			{
				if(tr.length>0)
				{
					tr.remove();
				}
			}
		})
	})
})