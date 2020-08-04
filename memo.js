$(function(){
    $('.menu-trigger').on('click', function(event){
        $(this).toggleClass('active');
        $('#sp-menu').fadeToggle();
        event.preventDefault();
    });
});

toggleClass()によってclass属性の追加と削除が交互に行われるさらに.meu-trigger.active span:nth-of-typeof(1)
aciveクラスになった時にアイコンがxになる


thisはクリックした要素自身

fadeToggleはあればフェードアウトなければフェードイン
menuのセクションにidをもたせている