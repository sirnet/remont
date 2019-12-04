
    var burgerList = document.getElementById("burger__List");
    var firstItem = document.getElementById("first");
    var secondItem = document.getElementById("second");
    var thirdItem = document.getElementById("third");
    var fourthItem = document.getElementById("fourth");
    var i=0;
    burgerList.onclick =  function(){
        if (i ==0) {
            firstItem.classList.add("visually-hidden");
            secondItem.classList.add("second--active");
            thirdItem.classList.add("third--active");
            fourthItem.classList.add("visually-hidden");
            i=1;
            
            $('.menu__list').addClass("menu__list--active")
        }
        else {
            firstItem.classList.remove("visually-hidden");
            secondItem.classList.remove("second--active");
            thirdItem.classList.remove("third--active");
            fourthItem.classList.remove("visually-hidden");
            
            $('.menu__list').removeClass("menu__list--active");
            i=0;
        }
    } 

    $('.single-item').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
      });

      $('.services-item').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
      });

        //services-item-1
    $('.btn__close').on('click', function(event){
        event.preventDefault();
        $('.s-a-1').addClass('visually-hidden');
        $('.s-b-1').removeClass('services__block--active');
        $('.bt-1').removeClass('btn__services--active');
    });

    $('.bt-1').on('click', function(event){
        event.preventDefault();
        $('.s-a-1').removeClass('visually-hidden');
        $('.s-b-1').addClass('services__block--active');
        $('.bt-1').addClass('btn__services--active');
    });

    //services-item-2
    $('.btn__close').on('click', function(event){
        event.preventDefault();
        $('.s-a-2').addClass('visually-hidden');
        $('.s-b-2').removeClass('services__block--active');
        $('.bt-2').removeClass('btn__services--active');
    });

    $('.bt-2').on('click', function(event){
        event.preventDefault();
        $('.s-a-2').removeClass('visually-hidden');
        $('.s-b-2').addClass('services__block--active');
        $('.bt-2').addClass('btn__services--active');
    });

    //services-item-3
    $('.btn__close').on('click', function(event){
        event.preventDefault();
        $('.s-a-3').addClass('visually-hidden');
        $('.s-b-3').removeClass('services__block--active');
        $('.bt-3').removeClass('btn__services--active');
    });

    $('.bt-3').on('click', function(event){
        event.preventDefault();
        $('.s-a-3').removeClass('visually-hidden');
        $('.s-b-3').addClass('services__block--active');
        $('.bt-3').addClass('btn__services--active');
    });

      //services-item-4
    $('.btn__close').on('click', function(event){
        event.preventDefault();
        $('.s-a-4').addClass('visually-hidden');
        $('.s-b-4').removeClass('services__block--active');
        $('.bt-4').removeClass('btn__services--active');
    });

    $('.bt-4').on('click', function(event){
        event.preventDefault();
        $('.s-a-4').removeClass('visually-hidden');
        $('.s-b-4').addClass('services__block--active');
        $('.bt-4').addClass('btn__services--active');
    });