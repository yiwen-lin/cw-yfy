$(function() {
  const topic = [
    {
      name: '農業循環',
      content: '以農業副產品製漿造紙全循環利用，替代森林資源。',
    }, {
      name: '紙的再生循環',
      content: '使用永續FSC紙漿，工紙回收紙比例達97%，無淋膜食安用紙能直接進入紙回收系統循環再利用。',
    }, {
      name: '水循環',
      content: '水在密閉系統不斷循環使用，製程用水重複利用率最高達98%。',
    }, {
      name: '再生能源循環',
      content: '造紙製程發展出台灣最大的生質能場域，包含木質素發電、規模最大的沼氣發電及全台第一座SRF零燃煤汽電共生鍋爐。',
    }, {
      name: '碳循環',
      content: '光合作用將碳儲存形成木材組織，紙品以農林植物纖維為原料，具有纖維固碳的特殊性。永豐餘兩岸植林面積超過3萬公頃，合計固碳量約 2,909,708 TCO2e。',
    }
  ];

  $('#map_icon > div').each(function() {
    $(this).click(function() {
      const idx = $(this).index();
      const data = topic[idx];
      const str = `<div class="col-lg-12 lightbox-text mt-4 mt-lg-0">
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
