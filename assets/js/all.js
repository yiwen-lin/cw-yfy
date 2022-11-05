$(function() {
  const topic = [
    {
      name: '從造紙到造林，形成固碳產業鍊',
      content: '永豐餘在兩岸植林面積超過3萬公頃，<span>林場固碳量</span>合計約2,909,708 公噸二氧化碳當量。森林中的<span>碳固存</span>，是通過光合作用捕獲和儲存大氣中二氧化碳的過程。森林的碳儲量會繼續增長，森林資源可替代高碳排的化石產品和燃料，對氣候變遷有積極正面的影響。<br>而在光合作用下，二氧化碳形成了植物的纖維素和澱粉，這是紙業的主要生產原料，也是最早醣化學的開始，而永豐餘提出醣經濟，期望提醒人們不需捨棄自然界最初始的光合作用碳循環。<br><span>醣</span>是全世界可不斷<span>循環再生</span>的物質，形式上不論如何改變，只要它是有機體，就可成為能源，更能轉換成其他任何形式的材料，進而發展獨一無二的全循環經濟。',
    }, {
      name: '紙的再生循環',
      content: '永豐餘工紙使用<span>回收紙</span>比例高達 96.7%，<span>木漿散漿</span>的木片原料從建築剩餘邊材和農林廢棄物為主，並管控料源，使用永續FSC 紙漿，守護森林生態。\n\n旗下中華紙漿「益利系列」非塑食安用紙，突破傳統紙容器製程，不需淋膜也能防水防油，全紙材質可直接進入一般紙類回收，再次循環成為<span>造紙</span>原料。',
    }, {
      name: '水循環',
      content: '水是造紙重要的介質，水的循環是永豐餘造紙重要的工藝，讓水在密閉系統不斷循環再生利用，建置<span>厭氧反應系統</span>，大幅降低<span>製程排放水</span>的有機物含量。一滴水必須通過物理、化學、生物處理等至少五道關卡，才能安全放流回歸大自然。<br><br><span>水資源系統:</span><br>水資源管理著重於「源頭管理」與「設備創新」，從製程排放水的出水口開始架設監測點，並於每條管線匯流處進行二次監測。多層監控的優點在於能使水處理系統持續保持高處理效能，並且確保未達標的排放水不會放流至生產據點外以造成環境衝擊。',
    }, {
      name: '再生能源循環',
      content: '永豐餘的循環經濟發展出全台最大的生質能場域，橫跨三大類的生質能源發展，包括全台最早、最大木質素生質能發電、全台最大厭氧沼氣發電系統，和全台第一座SRF零燃煤<span>汽電共生</span>鍋爐，SRF具有低環境衝擊、低燃料成本、可用於高能源效率鍋爐的三大優勢，不但可將減少廢棄物，亦可減少化石原料開採、降低空氣污染物，更具有降低溫室氣體的排放效益，經估算，使用SRF燃料的環境衝擊僅約燃煤的20%。<br><br><span>汽電共生系統:</span><br>採用「低排放高效率的循環式流體化床鍋爐」，每個月可處理5500噸的SRF （固體再生燃料），因此還有餘裕可以協助處理其他廠合適的餘料。每小時可同步產生70噸的汽與9500度的電，如果年底取得執照順利運轉，新屋廠的能源自給率將達到100%，且每年還可減少8萬7800噸的燃煤用量。',
    }, {
      name: '農業循環',
      content: '永豐餘以農業副產品蔗渣製作建材和造紙，是農業循環的源起。在大陸揚州，將<span>稻稈</span>(農田)利用熱能、機械力與酵素，以無化學添加的生物製程，以稻米、小麥採收後留下的大量秸稈為原料，提取<span>秸稈</span>纖維，產出秸稈生物製漿 nPulp 做成各式綠色包材。nPulp 也於 2014 年獲得鼓勵創新發明的美國「愛迪生獎」。<br><br><span>nPulp:</span><br>nPulp係「Natural Pulp」的縮寫，利用原本僅能燃燒或堆肥的稻桿、麥桿等農業秸稈為原料，利用分段、分篩技術，分開細屑和纖維。分出的纖維再利用熱能、機械力、和酵素，以無化學添加的製程，生產出生態秸稈生物漿。生產過程中不能成為紙槳，但富含有機質的副產品，則作為種植菇類的太空包，而其剩餘的殘渣還可以再製成生質燃料或肥料，再回到田間，讓秸稈資源還原肥田，符合與自然生態循環生生不息的自然法則。nPulp的工廠設於揚州，年產能為6萬6千噸。',
    }, {
      name: '再生能源循環',
      content: '<span>木質素:</span><br>紙過程中，木片放進如同大型電鍋的設備蒸煮，形成紙漿，漂白、加壓後製成我們所使用的紙張。但紙漿裡除了用來造紙的纖維素外，還有無法進入製程的木質素，這些木質素泡在水裡質地漆黑，因而稱為黑液，濃縮後便成為可再利用的燃料，永豐餘花蓮廠自1968年建廠就以此為主要的再生能源發電。<br>延伸閱讀：<a href="https://www.cw.com.tw/article/5119522?template=transformers" target="_blank">這罐黑液多神奇？竟讓50年老紙廠　從此關掉重污的燃油發電</a>',
    }, {
      name: '碳循環',
      content: '光合作用將碳轉為有機形式固定貯存，時間累積形成木材組織，紙產品以農林植物纖維為原料，因此具有纖維固碳的綠色產品特殊性。永豐餘兩岸植林面積超過3 萬公頃，大陸植林面積 29,463公頃，台灣林地面積約 1,000 公頃，從造林到造紙形成獨特的固碳產業鏈。森林中的碳固存，是通過光合作用捕獲和儲存大氣中二氧化碳的過程。森林的碳儲量會繼續增長，森林資源可替代高碳排的化石產品和燃料，對氣候變遷有積極正面的影響。<br><span>2020年，永豐餘旗下中華紙漿在台灣的五座林場，初步自行估算固碳量約為174,145 噸二氧化碳封存當量，大陸的鼎豐林場，初步自行估算固碳量約為2,550,530 噸二氧化碳封存當量，兩岸植林面積合計固碳量約為2,724,675 噸二氧化碳封存當量。</span><span>而各廠所生產的各類型紙製品或漿成品中，所含每噸纖維素的二氧化碳捕捉量，計算出永豐餘旗下紙產品纖維的總固碳量，約為1,985,386 噸二氧化碳當量。</span>',
    }
  ];

  $('#map_icon > div').each(function() {
    $(this).click(function() {
      const idx = $(this).index();
      const data = topic[idx];
      const str = `<div class="col-lg-7 lightbox-text mt-4 mt-lg-0">
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
