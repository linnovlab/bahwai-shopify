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
  let formPartenaireSubmited = getUrlParameter('contact_posted');
  if (formPartenaireSubmited) {
    $('#notif-partenaire').fadeIn().fadeOut(10000);
  }
  /*$('#btn-partenaire').on('click', () => {
    $('#notif-partenaire').fadeIn().fadeOut(10000);
  });*/
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
        $('#sujetFormContact').val($(this).text());
      });
    });
  };

  selected('#panel-partenaire li');
  selected('#panel-inscription li');

  /**
   * popup contactez-nous hide/show
   */
  $('#btn-contact').on('click', function (e) {
    e.preventDefault();
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
      $(this).next().prop('checked', true);
    } else {
      $(this).next().css('background-color', 'rgba(0, 0, 0, 0)');
      $(this).next().prop('checked', false);
    }
  });
  $('.filter-item label').on('click', function (e) {
    if ($(this).prev().css('background-color') === 'rgba(0, 0, 0, 0)') {
      $(this).prev().css('background-color', '#EA4038');
      $(this).next().prop('checked', true);
    } else {
      $(this).prev().css('background-color', 'rgba(0, 0, 0, 0)');
      $(this).next().prop('checked', false);
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
  increment($('#form-command #up'), $('#input-produit'));

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
  decrement($('#form-command #down'), $('#input-produit'));

  /**
   * form type d'achat
   */
  $('#form-type-achat input').each((i, item) => {
    $(item).on('click', function () {
      $('#form-type-achat input').each((i, input) => {
        $(input).prop('checked', '');
      });
      $(this).prop('checked', true);
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
  const showPanier = () => {
    $('#panier').fadeIn();
    $('body').css('overflow', 'hidden');
  };
  const hidePanier = (e) => {
    $('#panier').fadeOut();
    $('body').css('overflow', 'initial');
  };
  const close_panier = () => {
    $('#close-panier').on('click', () => {
      hidePanier();
    });
    $('#btn-continuer').on('click', () => {
      hidePanier();
    });
  };
  close_panier();

  /**
   * faq links switch
   */
  $('#faq-links a').each((i, a) => {
    $(a).on('click', function (e) {
      e.preventDefault();
      let href = $(this).attr('href');
      let content = $(href);

      // links
      $('#faq-links a').each((i, link) => {
        $(link).removeClass('active');
      });
      $(this).addClass('active');

      // container des questions
      content
        .parent()
        .children()
        .each((i, item) => {
          if ($(item).hasClass('flex')) {
            $(item).removeClass('flex').addClass('hidden');
          }
        });
      content.removeClass('hidden').addClass('flex');
    });
  });

  /**
   * Nouvautes links feat
   */
  $('#nouveautes-links span').each((i, link) => {
    $(link).on('click', function (e) {
      $('#nouveautes-links span').each((i, a) => {
        if ($(a).hasClass('active')) {
          $(a).removeClass('active');
        }
      });
      $(this).addClass('active');
      var handle = $(this).data('handle');
      const container = $('div.nouveautes-content .swiper-wrapper'),
        btn = $('#btn-nouveautes');

      btn.prop('href', `/collections/${handle}`);

      // ajax
      $.ajax({
        type: 'GET',
        url: `/collections/${handle}/products.json`,
        dataType: 'JSON',
        success: function (response) {
          var products = response.products;
          console.log(products);
          container.html('');

          products.forEach((product) => {
            container.append(`
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
              `);
          });

          // reinitialize the swiper for it recalculate sizes
          var swipperNouveautes = new Swiper('.swiper-nouveautes', {
            slidesPerView: 1,
            centeredSlides: false,
            slidesPerGroupSkip: 2,
            grabCursor: false,

            // autoplay: {
            // delay: 10000,
            // disableOnInteraction: false,
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
        },
      });
    });
  });

  /**
   * Ajax for filter product
   */
  $('#form-filtre i').each((i, input) => {
    $(input).on('click', (e) => {
      $('#btn-valider-filter').trigger('click');
    });
  });

  /**
   * Ajax to add product in a cart
   */
  $(`form[action="/cart/add"]`).on('submit', (e) => {
    e.preventDefault();
  });

  // add product to the cart
  const addToCart = (btn) => {
    btn.on('click', async function (e) {
      const form = document.querySelector(`form[action="/cart/add"]`);
      await fetch('/cart/add', {
        method: 'POST',
        body: new FormData(form),
      }).then((resp) => {
        if (resp.ok) {
          // update cart items before show it up
          $.ajax({
            type: 'GET',
            url: `${location.origin}/cart.json`,
            dataType: 'json',
            success: function (response) {
              updatePanier(response);
            },
          });
          showPanier();
        }
      });
    });
  };
  addToCart($('#btn-ajout-panier'));

  /**
   * update les produits du panier
   * @param {object} cart contient les donnees du pannier
   */
  const updatePanier = (cart) => {
    const items = cart.items;
    var content = '';
    if (items.length > 0) {
      items.forEach((item) => {
        content += `
				<div class="prod flex px-5">
				<a href="${item.url}" class="flex">
					<img
					class="h-[61px] w-[61px] me-3"
					src="${item.image}"
					alt="produit">
					<div class="desc">
					<p class="font-medium text-_main_color_dark">${item.title}</p>
					<p class="text-[12px] font-medium text-_main_color_dark mt-1">${item.price}€ l’unité</p>
					</div>
				</a>
				</div>

				<form action="/cart" method="POST" class="flex mb-4 px-5 mt-4" id="form-panier">
					<input id="prod-variant-id" type="hidden" value="${item.variant_id}">
					<input
						class="w-16 ms-12"
						name="quantity"
						type="text"
						id="input-produit"
						min="1"
						max="20"
						value="${item.quantity} x">
					<button
						class="me-8"
						type="button"
						id="down">-</button>
					<button type="button" id="up">+</button>
				</form>
			`;
      });
    } else {
      content =
        '<p class="text-center mt-8 text-gray-500 text-lg">Votre panier est vide</p>';
      hidePayement();
    }

    $('#panier-items-container').html(content);
    $('#qty-items-panier').text(cart.item_count);
    $('#total-price-panier').text(cart.total_price);

    updateProduct();
  };

  /**
   * hide the payement btns
   */
  const hidePayement = () => {
    $('#payment-div').fadeOut(0);
    $('#payment-div').prev().prev('h2').fadeOut(0);
  };

  /**
   * update the qty of each product in the cart
   */
  const updateProduct = () => {
    $('#panier-items-container #form-panier').each((i, form) => {
      var variant_id = $(form).children('input[type="hidden"]').val();
      var up = $(form).children('#up');
      var down = $(form).children('#down');
      var input = $(form).children('#input-produit');
      var qty = input.val().replace('x', '');
      qty = new Number(qty);
      // console.log('variant = ' + variant_id)

      up.on('click', (e) => {
        qty++;
        updateQtyProduct(
          JSON.stringify({ id: variant_id, quantity: qty }),
          input,
          qty,
        );
      });
      down.on('click', (e) => {
        qty--;
        updateQtyProduct(
          JSON.stringify({ id: variant_id, quantity: qty }),
          input,
          qty,
        );
      });
    });
  };

  /**
   * increase or decrease the qty of the product in cart
   * @param {string} data
   */
  const updateQtyProduct = (data, input, qty) => {
    $.ajax({
      type: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: data,
      url: window.Shopify.routes.root + 'cart/change.js',
      dataType: 'json',
      success: function (response) {
        // update panier inforamations
        if (qty <= 0) {
          $('#panier-items-container').html(
            '<p class="text-center mt-8 text-gray-500 text-lg">Votre panier est vide</p>',
          );
          hidePayement();
        } else {
          $(input).val(qty + ' x');
        }
        $('#qty-items-panier').text(response.item_count);
        $('#total-price-panier').text(response.total_price);
        // console.log(response)
      },
    });
  };

  /**
   * show up the cart everywhere in pages
   */
  $('#icon-panier').on('click', (e) => {
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: `${location.origin}/cart.json`,
      dataType: 'json',
      success: function (response) {
        updatePanier(response);
        showPanier();
      },
    });
  });

  // feat for rating products
  const productStarsSetUp = () => {
    const stars = $('div.spr-stars span');
    stars.addClass('flex text-_main_color_dark');
    $('#prod-stars-container').html(stars);
  };
  productStarsSetUp();

  /**
   * Form Compte recover feat hide/show
   */

  try {
    $('#recover').on('click', (e) => {
      e.preventDefault();
      $('#form-recover').fadeIn(0);
      $('#form-login').fadeOut(0);
    });
    $('#cancel').on('click', (e) => {
      e.preventDefault();
      $('#form-recover').fadeOut(0);
      $('#form-login').fadeIn(0);
    });
  } catch (e) {
    console.log(e);
  }

  try {
    $('#nav-actualites a').each((i, link) => {
      $(link).on('click', function (e) {
        $('#nav-actualites a').each((i, a) => {
          if ($(a).hasClass('active')) {
            $(a).removeClass('active');
          }
        });
        e.preventDefault();
        $(this).addClass('active');
      });
    });
  } catch (e) {}

  /**
   * newletter feat
   */
  $('#form-etre-prevenu').on('submit', function () {
    $(this)
      .parent()
      .html(
        '<p class="text-center text-green-700">Vous recevrez une notification sur les prochaines ouvertures !</p>',
      );
  });
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

function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
}

function shareProduct(url, title) {
  // Customize the sharing message as needed
  var message = 'Check out this product: ' + title + ' - ' + url;

  // Open a new window or tab with the sharing URL
  window.open(
    'https://example.com/share?url=' +
      encodeURIComponent(url) +
      '&text=' +
      encodeURIComponent(message),
    '_blank',
  );
}

const mapFinder = () => {
  const key = 'AIzaSyC_ltV0bno5e_SGphz9nSYy1hAqZdKj7Ys';
  const url =
    'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B16502530000&inputtype=phonenumber&key=' +
    key;

  axios
    .get(url)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
