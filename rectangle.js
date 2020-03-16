var countdown=6; 
function settime(obj) { 
    
      var sn = document.getElementById('sn').style;
    if (countdown == 0) { 
      obj.removeAttribute("disabled");  
      obj.value="获取验证码"; 
      sn.opacity=0;
      countdown = 6; 
      return;
    } else { 
      obj.setAttribute("disabled", true); 
      obj.value="重新发送(" + countdown + ")"; 
      countdown--; 
      sn.opacity=1;
    } 
  setTimeout(function() { 
      settime(obj);
      
    }
    ,1000);
  }
$(function(){
    //get dom elem
    var $width=$('#width'),
        $height=$('#height'),
        $btuCal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area= $('#area');
    /*calc button click event */
  $btuCal.click(function(){
      //validate if err return;
      console.log(1);
     if(!validate('#width')|| !validate('#height') ) return;
     
  });
  $width.focusout(function(){
    if(!validate('#width')) $width.select();
  });
  $height.focusout(function(){
    if(!validate('#height')) $height.select();
  });
  $perimeter.focusout(function(){
    if(!validate('#perimeter')) $perimeter.select();
  });
  function validate(field){
    //get DOM error message
    var $data=$(field),
        $msg=$(field+'-validation-message');
        console.log($data.selector)
    //validate null
    if($data.selector=='#width'){
        console.log($data.selector)
        if($data.val()===''){
            $msg.html('用户名不能为空');
            $data.select();
            console.log($data.selector)
            return false;
          }
          //validate number
          
          if(!/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test($data.val())){
            $msg.html('用户名仅支持中英文，数字和下划线且不能为纯数字（且下划线不能开头结尾）');
            $data.select();console.log($data.selector)
            return false;
          }
          //validate>0
          if(/^[0-9]*$/.test($data.val())){
            $msg.html('用户名必须为非纯数字组成');
            $data.select();console.log($data.selector)
            return false;
          }
            //prompt err message
            //return false
            $msg.html('');
          return true;
    }
    if($data.selector=='#height'){
        if($data.val()===''){
            $msg.html('手机号不能为空');
            $data.select();
            
            return false;
          }
          //validate number
          
          if(!/^[1][3,4,5,7,8][0-9]{9}$/.test($data.val())){
            $msg.html('手机号格式不正确');
            console.log($msg)
            $data.select();
            return false;
          }
          //validate>0
          if(window.Number($data.val())<0){
            $msg.html('手机号格式不正确');
            $data.select();
            return false;
          }
            //prompt err message
            //return false
          $msg.html('');
          return true;
        
    }
    if($data.selector=='#perimeter'){
        if($data.val()===''){
            $msg.html('密码不符合要求');
            $data.select();
            console.log($msg)
            return false;
          }
          //validate number
          

          //validate>0
          if(window.Number($data.val())<0){
            $msg.html('密码不符合要求');
            $data.select();
            return false;
          }
            //prompt err message
            //return false
          $msg.html('');
          return true;
        
    }

    
    
  }

  
  });