$(function() {
  const topic = [
    {
      name: '農業循環',
      content: '永豐餘以農業副產品蔗渣製作建材和造紙， 是農業循環的源起。在大陸揚州，將稻稈利用熱能、機械力與酵素，以無化學添加的生物製程，提取秸 稈纖維，產出秸稈生物製漿 nPulp 做成各式綠色包材。2014 年，nPulp 亦獲得鼓勵創新發明的美國「愛迪生獎」肯定。',
      svg: '<img src="./assets/images/step7-mb.png">',
    }, {
      name: '紙循環',
      content: '永豐餘旗下中華紙漿「益利全回收食安用紙系列」，突破傳統紙容器製程，不需淋膜也能防水防油，全紙材質可直接進入一般紙類回收，再次循環成為造紙原料。<br>永豐餘工紙使用回收紙比例高達 96.7%，木漿的木片原料從建築剩餘邊材和農林廢棄物為主，並管控料源，守護森林生態。',
    }, {
      name: '水循環',
      content: '水是造紙重要的介質，水的循環是永豐餘造紙重要的工藝，讓水在密閉系統不斷循環再生利用，建置厭氧反應系統，大幅降低製程排放水的有機物含量。一滴水必須通過物理、化學、生物處理等至少五道關卡，才能安全放流回歸大自然。',
    }, {
      name: '再生能源循環',
      content: '永豐餘的循環經濟發展出全台最大的再生能源場域，包括全台最早、最大木質素生質能發電、全台最大厭氧沼氣發電系統，和全台第一座 SRF 零燃煤汽電共生鍋爐。',
    }, {
      name: '碳循環',
      content: '光合作用將碳轉為有機形式固定貯存，累 積形成木材組織，紙產品以農林植物纖維為原料，因此具有纖維固碳的綠色產品特性。永豐餘兩岸 植林面積超過3 萬公頃，從造林到造紙形成獨特 的固碳產業鏈。',
    }
  ];

  //刪除圖片版本
  // $('#map_icon > div').each(function() {
  //   $(this).click(function() {
  //     const idx = $(this).index();
  //     const data = topic[idx];
  //     const str = `<div class="col-lg-12 lightbox-text mt-4 mt-lg-0">
  //       <div class="step-block">
  //         <div class="mb-4"><span class="step-title">${data.name}</span></div>
  //         <p>${data.content}</p>
  //       </div>
  //     </div>`;
  //     $('#lightbox-content').html(str);
  //     $('body').addClass('opened');
  //     $('.lightbox-block, .lightbox-black').fadeIn();
  //   });
  // });

  //有圖片版
  $('#map_icon > div').each(function() {
    $(this).click(function() {
      const idx = $(this).index();
      const data = topic[idx];
      const str = `<div class="col-lg-5 offset-lg-1">
          ${data.svg}
        </div>
        <div class="col-lg-6 lightbox-text mt-4 mt-lg-0">
          <div class="step-block">
            <div class="mb-4"><span class="step-title">${data.name}</span></div>
            <p>${data.content}</p>
          </div>
        </div>`;
      $('#lightbox-content').html(str);
      $('body').addClass('opened');
      $('.lightbox-block, .lightbox-black').fadeIn();
    });
  });



  $('.lightbox-close, .lightbox-black').click(function() {
    $('body').removeClass('opened');
    $('.lightbox-block, .lightbox-black').fadeOut();
  });

  const animNum = (EL) => {
    if (EL._isAnimated) return; // Animate only once!
    EL._isAnimated = true;
    
    $(EL).prop('Counter', 0).animate({
      Counter: EL.dataset.num
    }, {
      duration: 2000,
      step: function(now) {
        const text = (Math.ceil(now)).toLocaleString('en-US');
        const html = text.split(",").map(n => `<span class="count">${n}</span>`).join(",");
        $(this).html(html);
      }
    });
  };
  const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) animNum(entry.target);
    });
  };
  $("[data-num]").each((i, EL) => {
    const observer = new IntersectionObserver(inViewport);
    observer.observe(EL);
  });
});
