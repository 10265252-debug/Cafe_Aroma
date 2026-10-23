$(function(){
  let lang='es', cart=[], audioOn=false;
  const $body=$('body');
  function toast(message){$('#toastNote').text(message).addClass('show');setTimeout(()=>$('#toastNote').removeClass('show'),2500)}
  $('#langBtn').on('click',function(){
    lang=lang==='es'?'en':'es';$('html').attr('lang',lang);
    $('[data-es][data-en]').each(function(){const val=$(this).attr('data-'+lang);if(val!==undefined)$(this).html(val)});
    $('#langBtn').text(lang==='es'?'🇪🇸 ES / EN':'🇬🇧 EN / ES');
    $('#customerName').attr('placeholder',lang==='es'?'Nombre':'Name');
    $('#customerEmail').attr('placeholder',lang==='es'?'correo@ejemplo.com':'email@example.com');
    $('#customerMessage').attr('placeholder',lang==='es'?'Escribe tu mensaje...':'Write your message...');
  });
  $('#themeBtn').on('click',function(){$body.toggleClass('dark');$(this).text($body.hasClass('dark')?'☾ / ☼':'☼ / ☾')});
  $('.category').on('click',function(){
    $('.category').removeClass('active');$(this).addClass('active');const filter=$(this).data('filter');
    $('.product-card').each(function(){$(this).toggle(filter==='all'||$(this).data('category')===filter)});
  });
  $('#cartOpen').on('click',()=>$('#cartPanel').toggleClass('open'));
  $('#cartClose').on('click',()=>$('#cartPanel').removeClass('open'));
  $(document).on('click','.add-cart',function(){
    const name=$(this).data('name'),price=Number($(this).data('price'));cart.push({name,price});renderCart();toast(lang==='es'?'Agregado a tu pedido':'Added to your order');
  });
  function renderCart(){
    $('#cartCount').text(cart.length);
    if(!cart.length){$('#cartItems').html('<p>'+(lang==='es'?'Todavía no has agregado productos.':"You haven't added anything yet.")+'</p>')}
    else $('#cartItems').html(cart.map((item,i)=>`<div class="cart-line"><span>${item.name}</span><span>$${item.price.toFixed(2)} <button class="remove-item" data-index="${i}" aria-label="Quitar">×</button></span></div>`).join(''));
    $('#cartTotal').text('$'+cart.reduce((sum,item)=>sum+item.price,0).toFixed(2));
  }
  $(document).on('click','.remove-item',function(){cart.splice(Number($(this).data('index')),1);renderCart()});
  $('#checkoutBtn').on('click',function(){
    if(!cart.length){toast(lang==='es'?'Agrega algo del menú primero.':'Add something from the menu first.');return}
    const lines=cart.map(x=>`${x.name} - $${x.price.toFixed(2)}`).join('\n');
    const total=cart.reduce((s,x)=>s+x.price,0).toFixed(2);
    const message=(lang==='es'?'Hola, quisiera hacer este pedido:\n':'Hello, I would like to order:\n')+lines+'\nTotal: $'+total;
    window.open('https://wa.me/?text='+encodeURIComponent(message),'_blank','noopener');
  });
  // Audio is intentionally started only after the visitor presses the music button.
  $('#musicBtn').on('click',function(){
    const audio=document.getElementById('cafeAudio');
    if(!audioOn){
      // Gentle ambient sound hosted online; replace the URL with your own royalty-free audio if desired.
      audio.src='https://cdn.pixabay.com/download/audio/2022/10/25/audio_946b5b7f1e.mp3?filename=coffee-shop-ambience-124897.mp3';
      audio.volume=.22;
      audio.play().then(()=>{audioOn=true;$('#musicState').text('Ⅱ');toast(lang==='es'?'Música activada':'Music on')}).catch(()=>toast(lang==='es'?'No se pudo cargar el audio. Revisa tu conexión.':'Audio could not load. Check your connection.'));
    }else{audio.pause();audioOn=false;$('#musicState').text('▶');}
  });
  $('#contactForm').on('submit',function(e){e.preventDefault();toast(lang==='es'?'Mensaje de demostración. Conecta un servicio para recibirlo.':'Demo message. Connect a service to receive it.');this.reset()});
  $('#mainNav a').on('click',function(){$('.navbar-collapse').collapse('hide')});
});