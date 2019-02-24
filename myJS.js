
var firstUrl = 'https://uniquetoone.com/index/index/3344dbee-f274-4b56-9373-8b18bc0853f2';//ip-azure
var secondUrl = 'https://app-versions.herokuapp.com/index/index/4c707b3f-91ce-4b82-9a98-2e4cfa2c2c1a';//heroku

function getAnimation(){
    // animation data.json URL
    let commentUulJson = "https://nininenine.github.io/forTesting/data.json";

    // amimation action
    var animation = bodymovin.loadAnimation({

      container: document.getElementById('lottie_animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: commentUulJson,

      });
    $('#lottie_animation > svg').css('border-radius','25px');
}

function getAjax2(){
  $.ajax({
    type: 'GET',
    url: secondUrl,//'https://app-versions.herokuapp.com/index/index/f8d1d0e0-b1d7-4892-b960-62f907cdeaae',//'https://app-versions.herokuapp.com/index/index/f8d1d0e0-b1d7-4892-b960-62f907cdeaae',//http://52.175.12.176/index/index/a1f6c42d-ab0e-4903-b6e6-72058e899e23',
    dataType: 'json',
    // crossDomain: true,
    success: function (response){

      if (response) {

      if (response.version == 1) {
        getAnimation();
         $('#lottie_animation > svg').css('border-radius','25px');
          
        return false;
      }
      new Vue({
          el:'#message',
          data () {
            return{
              messageData:[
                {
                  id : 'version',
                  data : response.version
                },
                {
                  id : 'isOpen',
                  data : response.msg.open
                },
                {
                  id : 'links',
                  data : response.msg.links
                },
                {
                  id : 'is_active',
                  data : response.msg.is_active
                },
                {
                  id : 'new_url',
                  data : response.msg.new_url
                },
                {
                  id : 'cover',
                  data : response.msg.cover
                },
                {
                  id : 'is_show_cover',
                  data : response.msg.is_show_cover
                },
                {
                  id : 'animation_file',
                  data : response.msg.animation_file
                },
                {
                  id : 'comment',
                  data : response.msg.comment
                },
                {
                  id : 'cover',
                  data : response.msg.cover
                },
              ]
            }
          }
        });

        var links = response.msg.links;
        getAnimation()
         $('#lottie_animation > svg').css('border-radius','25px');

        setTimeout(function() { window.location = links; }, 5000);


      }
    },

    error:function(xhr){
    alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
    }

    
  });
}
function getAjax1(){
  $.ajax({
    type: 'GET',
    url: firstUrl,//'https://app-versions.herokuapp.com/index/index/f8d1d0e0-b1d7-4892-b960-62f907cdeaae',//'https://app-versions.herokuapp.com/index/index/f8d1d0e0-b1d7-4892-b960-62f907cdeaae',//http://52.175.12.176/index/index/a1f6c42d-ab0e-4903-b6e6-72058e899e23',
    dataType: 'json',
    // crossDomain: true,
    success: function (response){
      if (response) {
      var isOpen = response.version;
      if (response.version == 1){
        getAjax2();
      }else if (response.version == 2){
        new Vue({
          el:'#message',
          data () {
            return{
              messageData:[
                {
                  id : 'version',
                  data : response.version
                },
                {
                  id : 'isOpen',
                  data : response.msg.open
                },
                {
                  id : 'links',
                  data : response.msg.links
                },
                {
                  id : 'is_active',
                  data : response.msg.is_active
                },
                {
                  id : 'new_url',
                  data : response.msg.new_url
                },
                {
                  id : 'cover',
                  data : response.msg.cover
                },
                {
                  id : 'is_show_cover',
                  data : response.msg.is_show_cover
                },
                {
                  id : 'animation_file',
                  data : response.msg.animation_file
                },
                {
                  id : 'comment',
                  data : response.msg.comment
                },
                {
                  id : 'cover',
                  data : response.msg.cover
                },
              ]
            }
          }
        });
        var links = response.msg.links;
        getAnimation()
         $('#lottie_animation > svg').css('border-radius','25px');

        setTimeout(function() { window.location = links; }, 5000);
      }
    }
    },

    error:function(xhr){
    alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
    }
  });
}

window.onload=function(){
  getAjax1();
  $('#lottie_animation > svg').css('border-radius','25px');
}
