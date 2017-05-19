(function(){
    //搜索框里放大镜效果
    var logoSearch=document.getElementById("logo_search");
        logoSearch.oninput=function(){
            if (this.value!="") {
                this.className="";
            }else{
                this.className="img";
            }
        }

})();
