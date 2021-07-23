<script>
    Function myFunction(){
        var a = document.myform.Email.value;
        if(a.indexOF('@')<=0){
            document.getElementById("Message"),innerHTML="**Invalid @ position**";
            return false;
        }
        if((a.charAt(a.length-4)!=".")&&(a.charAt(a.length-3)!=".")){
            document.getElementById("Message").innerHTML="**Invalid . position**";
            return false;
        }
    }

</script>