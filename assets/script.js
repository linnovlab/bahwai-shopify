$(document).ready(() => {
  /**
   * accordions features
   */
  $('.accordions #btn-accordion').each((i, btn) => {
    $(btn).on('click', function (e) {
      $(this).next().fadeToggle();
      $(this).toggleClass('active'); // for chrevron rotation
    });
  });

  /**
   * menu berguer hide/show
   *
   */
  $('#open-bars').on('click', () => {
    $('#menu-bars').slideDown();
    $('body').css('overflow', 'hidden');
    console.log($('#menu-bars'));
  });
  $('#close-bars').on('click', () => {
    $('#menu-bars').slideUp();
    $('body').css('overflow', 'initial');
  });

  /**
   * etre prevenu hide/show
   */
  $('#btn-etre-prevenu').on('click', function () {
    $(this).addClass('hidden');
    $('#form-etre-prevenu').removeClass('hidden').addClass('flex');
  });
  $('#close-etre-prevenu').on('click', function () {
    $('#btn-etre-prevenu').removeClass('hidden');
    $('#form-etre-prevenu').addClass('hidden').removeClass('flex');
  });

  /**
   * searchbar feature
   */
  $('#input-homepage-search').on('focus', () => {
    $('#search-section').fadeIn();
    $('#input-popup-search').focus();
    $('body').css('overflow', 'hidden');
    console.log($('#search-section'));
  });
  $('#search-icon').on('click', (e) => {
    e.preventDefault();
    $('#search-section').fadeIn();
    $('#input-popup-search').focus();
    $('body').css('overflow', 'hidden');
  });
  $('#close-popup-search').on('click', () => {
    $('#search-section').fadeOut();
    $('body').css('overflow', 'initial');
  });

  // suggestions search hide/show
  $('#input-popup-search').on('keyup', function () {
    $('#propositons').fadeIn();
    if ($(this).val() == '') {
      $('#propositons').fadeOut();
    }
  });

  /**
   * hide/show password
   */
  $('#eye-password').on('click', function () {
    if ($(this).hasClass('fa-eye')) {
      $(this).removeClass('fa-eye').addClass('fa-eye-slash');
      $('#input-password').prop('type', 'text');
    } else {
      $(this).addClass('fa-eye').removeClass('fa-eye-slash');
      $('#input-password').prop('type', 'password');
    }
  });

  /**
   * notif partenaire hide/show
   */
  $('#btn-partenaire').on('click', () => {
    $('#notif-partenaire').fadeIn().fadeOut(10000);
  });
  $('#close-notif-partenaire').on('click', () => {
    $('#notif-partenaire').css('display', 'none');
  });

  /**
   * select accordions feature
   * @param {string} items
   */
  const selected = (items) => {
    $(items).each((i, li) => {
      $(li).on('click', function (e) {
        $(items).each((i, li) => {
          $(li).removeClass('selected');
        });
        $(this).addClass('selected');
        $('.accordions #layout').text($(this).text());
      });
    });
  };

  selected('#panel-partenaire li');
  selected('#panel-inscription li');

  /**
   * popup contactez-nous hide/show
   */
  $('#btn-contact').on('click', function () {
    $(this).fadeOut();
    $('#form-contact').fadeIn();
  });

  $('#close-form-contact').on('click', function () {
    $('#btn-contact').fadeIn();
    $('#form-contact').fadeOut();
  });

  /**
   * filter categories filters
   */

  $('.filter-item i').on('click', function (e) {
    if ($(this).next().css('background-color') === 'rgba(0, 0, 0, 0)') {
      $(this).next().css('background-color', '#EA4038');
      $(this).next().prop("checked", true);
    } else {
      $(this).next().css('background-color', 'rgba(0, 0, 0, 0)');
      $(this).next().prop("checked", false);
    }
  });
  $('.filter-item label').on('click', function (e) {
    if ($(this).prev().css('background-color') === 'rgba(0, 0, 0, 0)') {
      $(this).prev().css('background-color', '#EA4038');
      $(this).next().prop("checked", true);
    } else {
      $(this).prev().css('background-color', 'rgba(0, 0, 0, 0)');
      $(this).next().prop("checked", false);
    }
  });

  /**
   * categories filter modal hide/show
   */
  $('#open-filter-modal').on('click', function () {
    $(this).css('display', 'none');
    $('#filter-modal').fadeIn();
    $('body').css('overflow', 'hidden');
  });
  $('#close-filter-modal').on('click', () => {
    $('#filter-modal').fadeOut();
    $('#open-filter-modal').fadeIn();
    $('body').css('overflow', 'initial');
  });

  // input fonctionality

  const increment = (el, input) => {
    $(el).on('click', (e) => {
      var value = parseInt(input.val(), 10);
      if ($(input).prop('type') === 'text') {
        if (value < 30) {
          input.val(value + 1 + ' x');
        } else {
          return;
        }
      } else {
        if (value < 30) {
          input.val(value + 1);
        } else {
          return;
        }
      }
    });
  };
  increment($('#form-command #up'), $('#form-command #input-produit'));
  increment($('#form-panier #up'), $('#form-panier #input-produit'));

  const decrement = (el, input) => {
    $(el).on('click', (e) => {
      var value = parseInt(input.val(), 10);
      if ($(input).prop('type') === 'text') {
        if (value > 1) {
          input.val(value - 1 + ' x');
        } else {
          return;
        }
      } else {
        if (value > 1) {
          input.val(value - 1);
        } else {
          return;
        }
      }
    });
  };
  decrement($('#form-command #down'), $('#form-command #input-produit'));
  decrement($('#form-panier #down'), $('#form-panier #input-produit'));

  /**
   * form type d'achat
   */
  $('#form-type-achat input').each((i, item) => {
    $(item).on('click', function () {

      if ($(window).width() <= 750) {
        if ($(item).is(':checked')) {
          $(this).css('border-color', 'white');
          $(this).next().css('color', 'white');
        } else {
          $(this).next().css('color', '#240343');
          $(this).css('border-color', '#240343');
        }
      } else {
        $(this).next().css('color', '#240343');
      }
    });
  });

  /**
   * description produit hide/show
   */
  $('#btn-produit-desc').on('click', () => {
    $('#produit-desc').fadeIn();
    $('body').css('overflow', 'hidden');
  });
  $('#close-produit-desc').on('click', () => {
    $('#produit-desc').fadeOut();
    $('body').css('overflow', 'initial');
  });

  /**
   * panier hide/show
   */
  const panier_layout = (el) => {
    $(el).on('click', (e) => {
      e.preventDefault();
      $('#panier').fadeIn();
      $('body').css('overflow', 'hidden');
    });
    $('#close-panier').on('click', () => {
      $('#panier').fadeOut();
      $('body').css('overflow', 'initial');
    });
    $('#btn-continuer').on('click', () => {
      $('#panier').fadeOut();
      $('body').css('overflow', 'initial');
    });
  };

  panier_layout($('#btn-ajout-panier'));
  panier_layout($('#icon-panier'));

  /**
   * faq links switch
   */
  $('#faq-links a').each((i, a) => {
    $(a).on('click', function () {
      $('#faq-links a').each((i, link) => {
        $(link).removeClass('active');
      });
      $(this).addClass('active');
    });
  });

  /**
   * disable faq-links
   */
  $('.faq-link').each((i, a) => {
    $(a).on('click', (e) => {
      e.preventDefault();
    });
  });

  /**
   * Nouvautes links feat
   */
  $('#nouveautes-links span').each((i, link) => {
    $(link).on('click', function (e) {
      $('#nouveautes-links span').each((i, a) => {
        if ($(a).hasClass('active')) {
          $(a).removeClass('active')
        }
      })
      $(this).addClass('active')
      var handle = $(this).data('handle')
      const container = $('div.nouveautes-content .swiper-wrapper'),
        btn = $('#btn-nouveautes');

      btn.prop('href', `/collections/${handle}`)

      // ajax
      $.ajax({
        type: "GET",
        url: `/collections/${handle}/products.json`,
        dataType: "JSON",
        success: function (response) {
          var products = response.products
          container.html('')

          products.forEach(product => {
            container.append(
              `
              <div class="swiper-slide">
                <a href="/products/${product.handle}" class="item text-_main_color_dark text-[12px] max-w-[230px] w-full m-1 flex items-center flex-col gap-1">
                  <div class="img w-full">
                    <img
                      src="${product.images[0].src}"
                      alt="${product.title}"
                      class="w-full object-cover h-[220px]" 
                      >
                  </div>
                  <p class="font-semibold w-[10rem] text-center mt-2">${product.title}</p>
                  <div class="avis flex items-center gap-2 h-[1.1rem] mb-2">
                    <div class="stars flex text-sm">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <span class="border-_main_color_dark border-b text-_main_color_dark ">26 avis</span>
                  </div>
                  <p class="font-medium">À partir de ${product.variants[0].price} €
                  </p>
                </a>
              </div>
              `
            )
          });

          // reinitialize the swiper for it recalculate sizes
          var swipperNouveautes = new Swiper('.swiper-nouveautes', {
            slidesPerView: 1,
            centeredSlides: false,
            slidesPerGroupSkip: 2,
            grabCursor: false,
            // autoplay: {
            //   delay: 10000,
            //   disableOnInteraction: false,
            // },
            keyboard: {
              enabled: true,
            },
            breakpoints: {
              // responsivity
              330: {
                slidesPerView: 2,
              },
              780: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            },
            navigation: false,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });

        }
      });

    })

  })

});

try {
  new Swiper('.swiper-nouveautes', {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 2,
    grabCursor: false,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      // responsivity
      330: {
        slidesPerView: 2,
      },
      780: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  new Swiper('.swiper-avis', {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 2,
    grabCursor: false,
    // spaceBetween: 30,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      // responsivity
      600: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1010: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1300: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  new Swiper('.swiper-actu', {
    slidesPerView: 1,
    centeredSlides: false, // true il centre le 1er element (swiper-slide)
    slidesPerGroupSkip: 2,
    grabCursor: false,
    // spaceBetween: 30,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      // responsivity
      460: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      720: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1000: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
} catch (e) {
  console.log('erreur de swiper, non accessible dans cette page');
}
