$(function(){
   //读取本地存储的数据
   function getDate () {
       var data = localStorage.getItem("todolist");
       if ( data = null ) {
           return [];
       } else {
           return JSON.parse(data);
       }
   }

   //保存本地存储数据
  function saveDate (data) {
      localStorage.getItem("todolist",JSON.stringify(data));
  }
   //渲染加载数据
  function load () {
      //拿数据
      var arr = getData();
     //清空页面
     $("ol, ul").empty();
     //遍历数组
     for ( var i = 0; i < arr.length; i++ ) {
         
     }
  }
       
       
       
      
       //统计所在li的个数
      
       //遍历数组
      
           //把数据添加在页面内
          

          
  
   //鼠标按下输入数据
  
       //当按下回车键时
      
               //获取元素
               
               //新增元素进去
               
               //存储新增后的数据
              
               //存储完后自动加载一次
              
               //新增完后让tltle里的内容清空,避免下次1输入需要手动删除
              

   //删除操作
  
       //先获取数据
       
       //获取当前点击元素所在的id
       
       //在当前id开始删除一个元素
       
       //存储删除后的数据
       
       //重新加载
     
    
   //正在进行和已经完成选项的操作
     
         //先获取元素
         
         //让当前元素的状态和input框的状态一样
        

         //让done的元素返回到to do 的元素的最后面.否则会因为local的存储问题回到原来的位置,
        //保存当前点击的索引值
        
        //删除当前的索引值
        
        //添加在所在1数组的最后一行
})