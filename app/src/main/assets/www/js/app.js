var app = {
    initialize : function(){
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        app.member.onCreate();
    },
    onDeviceReady : function(){
        this.receiveEvent('deviceready');
    },
    receiveEvent : function(x){
        var parentElement = document.getElementById(x);
        var listeningElement = parentElement.querySelector('.listening');
        var receiveEvent = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none');
        receivedElement.setAttribute('style', 'display:block');
        console.log('Receiced Event: '+x);
    }
};

app.member = (function(){
    var onCreate = function(){
        setContentView();
    };
    var setContentView = function(){
        var compUI={
            br : ()=>{return $('<br/>')},
            div : x=>{return $('<div/>',{ id : x });},
            h1 : x=>{return $('<h1/>',{ id : x });},
            h2 : x=>{return $('<h2/>',{ id : x });},
            h3 : x=>{return $('<h3/>',{ id : x });},
            span : x=>{return $('<span/>',{ id : x });},
            input : (x,y,z)=>{return $('<input/>',{ id : x, name: x, type : y, value : z });},
            btn : x => {return $('<button/>',{ id : x});},
            aBtn : x=>{return $('<a>',{ href:'#', role:'button', id:x });},
            image : (x,y)=>{return $('<img/>',{ id : x, src : y });},

            td : ()=>{return $('<td/>');},
            li : ()=>{return $('<li/>');}
        }

        $('#content').html(
            '<h1>Hello WebApp</h1>'
            + '<span>ID: </span><input id="id" type="text" width="100px">'
            + '<span>PW: </span><input id="password" type="text" width="100px">'
        );

        $('#password').after(compUI.btn('loginBtn')).attr('displsy','inline');
                $('#loginBtn').html('로그인')
                .click(()=>{
                    var id = $('#id').val();
                    var pw = $('#password').val();
                    //alert($id +"/"+ $pw);
                    hybrid.showToast(id +"/"+ pw);
                });

                $('#loginBtn').after(compUI.btn('joinBtn')).attr('displsy','inline');
                $('#joinBtn').html('회원가입');
    };

    return { onCreate : onCreate };
})();

//ctx
$(function(){
    app.initialize();
});