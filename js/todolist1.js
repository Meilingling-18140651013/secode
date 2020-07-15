$(function(){
    //读取本地存储的数据
    function getDate(){
         var data = localStorage.getItem("todolist");
         if( data == null) { 
             return [];
         } else {
             return JSON.parse(data);
         }
    }

    //保存本地存储数据
    function saveDate(data) {
        localStorage.setItem("todolist",JSON.stringify(data));
    }

    //渲染加载数据
    function load(){
        //拿数据
        var arr = getDate();
        //清空页面
        $("ol, ul").empty();
       var todoCount = 0; // 正在进行的个数
       var doneCount = 0; // 已经完成的个数
        //遍历数组
        for ( var i = 0; i < arr.length; i++ ) {
            //把数据添加在页面内
            if ( arr[i].done == true ) {
                $("ul").prepend(`<li>
                <input type="checkbox" checked>
                <p>${arr[i].title}</p>
                <a href="javascript:;" id="${i}"></a>
             </li>`)
            doneCount++;
            } else {
                $("ol").prepend(`<li>
                <input type="checkbox">
                <p>${arr[i].title}</p>
                <a href="javascript:;" id="${i}"></a>
             </li>`)
            todoCount++;
            }
           
        }

    //     $("todoCount").text($("ol li").length);
    //     $("doneCount").text($("ul li").length);
       $("#todocount").text(todoCount);
       $("#donecount").text(doneCount);
    }

    load();
    //鼠标按下输入数据
    $("#title").on("keydown",function(event){
        //按下回车键则 
        if (event.keyCode === 13) {
             if( $(this).val() == '') {
                 alert("请输入");
             } else {
                //1:获取元素 
                var local = getDate();
                //2:修改元素
                local.push({ title: $(this).val(), done: false});
                //3:存储修改后的元素
                saveDate(local);
                load();
                $(this).val("");
             }
        }
    })
    
    //删除操作
    $("ol, ul").on("click","a",function(){
        //先获取
        var data = getDate();
        //在修改
        var index = $(this).prop("id");
       // console.log(index);
       data.splice(index, 1);
       saveDate(data);
       load();
        
    })

    //正在进行和已完成选项的操作
    $("ol, ul").on("click","input",function(){
        //先获取
        var data = getDate();
        //在修改
        var index = $(this).siblings("a").prop("id");

        data[index].done = $(this).prop("checked");

        //让done的元素返回到to do 的元素的最后面.否则会因为local的存储问题回到原来的位置,
        //保存当前点击的索引值
        var el = data[index];
        //删除当前的索引值
        data.splice(index, 1);
        //添加在所在1数组的最后一行
        data.push(el);

        saveDate(data);
        load();

    })

   
})