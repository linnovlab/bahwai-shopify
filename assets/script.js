let montant1 = 6000;
let montant2 = 10000;
let montant3 = 15000;
let restant = 60;
let pourcentage = 0;
let recompense_zone = ``;
let selectedGoodies = null;

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
    console.log($('#menu-bars'))
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
    $(this).hide();
    $('#eye-slash-password').show();
    $('#input-password').prop('type', 'text');
  });
  $('#eye-slash-password').on('click', function () {
    $(this).hide();
    $('#eye-password').show();
    $('#input-password').prop('type', 'password');
  });

  /**
   * notif partenaire hide/show
   */
  let formPartenaireSubmited = getUrlParameter('contact_posted');
  if (formPartenaireSubmited) {
    //$('#notif-partenaire').fadeIn().fadeOut(15000);
    $('#notif-contact-form').fadeIn().fadeOut(15000);
  }
  /*$('#btn-partenaire').on('click', () => {
    $('#notif-partenaire').fadeIn().fadeOut(10000);
  });*/
  $('#close-notif-partenaire').on('click', () => {
    $('#notif-partenaire').css('display', 'none');
  });

  $('#close-notif-contact-form').on('click', () => {
    $('#notif-contact-form').css('display', 'none');
  });

  $('#close-notif-subscription').on('click', () => {
    $('#notif-subscription').css('display', 'none');
  });

  let subsriptionSubmited = getUrlParameter('customer_posted');
  if (subsriptionSubmited) {
    $('#notif-subscription').fadeIn().fadeOut(15000);
  }
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
        $(this).parent().parent().fadeOut();
        $(this).parent().parent().prev().removeClass('active');
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

  $('#form-filtre .filter-item i').on('click', function (e) {
    if ($(this).next().css('background-color') === 'rgba(0, 0, 0, 0)') {
      $(this).next().css('background-color', '#EA4038');
      $(this).next().prop('checked', true);
    } else {
      $(this).next().css('background-color', 'rgba(0, 0, 0, 0)');
      $(this).next().prop('checked', '');
    }
  });
  $('#form-filtre .filter-item label').on('click', function (e) {
    e.preventDefault();
    if ($(this).prev().css('background-color') === 'rgba(0, 0, 0, 0)') {
      $(this).prev().css('background-color', '#EA4038');
      $(this).next().prop('checked', true);
    } else {
      $(this).prev().css('background-color', 'rgba(0, 0, 0, 0)');
      $(this).next().prop('checked', '');
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
      const btn = $('#btn-collection-link'),
        mainSwipperCollections = $('#main-swipper-collections');

      btn.prop('href', `/collections/${handle}`);
      mainSwipperCollections.children().each((i, content) => {
        $(content).addClass('hidden');
      });
      mainSwipperCollections.find('#' + handle).removeClass('hidden');
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
              deleteProduct();
              $('#panier-count').text(response.item_count);
            },
          });
          showPayement();
          showPanier();
        }
      });
    });
  };
  addToCart($('#btn-ajout-panier'));

  /**
   * delete product in the cart
   */
  const deleteProduct = async () => {
    $('#panier-items-container #btn-delete-product').each((i, btn) => {
      $(btn).click(function () {
        let product_id = $(this).data('product_id');
        $.post(
          window.Shopify.routes.root + 'cart/update.js',
          {
            updates: {
              [product_id]: 0,
            },
          },
          (cart) => {
            if (cart.item_count !== 0) {
              $(this).parents('.product_item').remove();
            } else {
              hidePanier();
            }

            $('#panier-count').text(cart.item_count);
            $('#qty-items-panier').text(cart.item_count);
            $('#total-price-panier').text(
              parseFloat(cart.total_price) / 100 + '€',
            );
          },
          'json',
        ).catch((error) => {
          console.log(error);
        });
      });
    });
  };

  /**
   * update les produits du panier
   * @param {object} cart contient les donnees du pannier
   */
  const updatePanier = (cart) => {
    $('#ZoneIncitation').show();
    $('#vous_avez_ajoute').show();
    updateIncitation(parseFloat(cart.total_price));
    const items = cart.items;
    var content = '';
    if (items.length > 0) {
      // function de suppression de produit lancer lorsqu'il ya update du panier
      deleteProduct();
      items.forEach((item) => {
        content += `
        <div class='product_item'> 
          <div class="prod flex px-5">
            <a href="${item.url}" class="flex">
              <img
              class="h-[61px] w-[61px] me-3"
              src="${item.image}"
              alt="produit">
              <div class="desc">
              <p class="font-medium text-_main_color_dark">${item.title}</p>
              <p class="text-[12px] font-medium text-_main_color_dark mt-1">${(
                item.price / 100
              ).toFixed(2)}€ le pack</p>
              </div>
            </a>
          </div>
          <form action="/cart" method="POST" class="flex items-center mb-4 px-5 mt-4" id="form-panier">
            <input id="prod-variant-id" type="hidden" value="${
              item.variant_id
            }">
            <input
              class="ms-12 sm:w-auto w-[50%]"
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
              <i data-product_id=${
                item.id
              } id='btn-delete-product' class="fa-solid fa-trash text-[37px] ms-8 text-red-600 cursor-pointer"></i>
          </form>
        </div>
			`;
      });
    } else {
      content =
        '<p class="text-center mt-8 text-gray-500 text-lg">Votre panier est vide</p>';
      hidePayement();
      $('#ZoneIncitation').hide();
      $('#vous_avez_ajoute').hide();
    }

    $('#panier-items-container').html(content);
    $('#qty-items-panier').text(cart.item_count);
    $('#total-price-panier').text(parseFloat(cart.total_price) / 100 + '€');
    updateProduct();
  };

  /**
   * Met à jour les informations du panier relatives aux récompenses
   * @param {*} total_panier
   */
  const updateIncitation = (total_panier) => {
    document.getElementById('ZoneIncitation').innerHTML = '';

    let ctn = ``;
    if (total_panier > 0 && total_panier < montant1) {
      restant =
        `<span class='font-bold'>` +
        ((montant1 - total_panier) / 100).toFixed(2) +
        `</span>`;
      pourcentage = (total_panier / montant1) * 100;
      ctn +=
        `<div class="flex w-full mb-1 gap-1" id="progressBar">
        <div class="relative w-1/3 h-6 bg-white">
          <div class="bg-_main_color_light h-full text-xs font-medium text-blue-100 p-0.5 leading-none" style="width: ` +
        pourcentage +
        `%"></div>
          <span class="absolute top-0 right-0 mt-1 mr-1 text-_orange_color font-extrabold">` +
        montant1 / 100 +
        `€</span>
          <span class="absolute top-0 right-0 -mt-8 mr-0 text-_main_color_light font-extrabold">
            <img
              class=""
              src="https://cdn.shopify.com/s/files/1/0747/8430/9521/files/king.svg?v=1691796016"
              alt="king"
              loading="lazy"
              width="auto"
              height="auto">
          </span>
        </div>

        <div class="relative w-1/3 h-6 bg-white">
          <div class="bg-white h-full text-xs font-medium text-blue-100 p-0.5 leading-none" style="width: 0%"></div>
          <span class="absolute top-0 right-0 mt-1 mr-1 text-_orange_color font-extrabold">` +
        montant2 / 100 +
        `€</span>
        </div>

        <div class="relative w-1/3 h-6 bg-white">
          <div class="bg-white h-full text-xs font-medium text-blue-100 p-0.5 leading-none" style="width: 0%"></div>
          <span class="absolute top-0 right-0 mt-1 mr-1 text-_orange_color font-extrabold">` +
        montant3 / 100 +
        `€</span>
        </div>
      </div>
      <p id="phrase">
         Dépensez ` +
        restant +
        `€ de plus et obtenez la livraison gratuite</p>`;
      recompense_zone = '';
      selectedGoodies = null;
    } else if (total_panier >= montant1 && total_panier < montant2) {
      restant =
        `<span class='font-bold'>` +
        ((montant2 - total_panier) / 100).toFixed(2) +
        `</span>`;
      pourcentage = (total_panier / montant2) * 100;
      ctn +=
        `<div class="flex w-full mb-1 gap-1" id="progressBar">
        <div class="relative w-1/3 h-6 bg-white">
          <div class="bg-_main_color_light h-full text-xs font-medium text-blue-100 p-0.5 leading-none" style="width: 100%"></div>
          <span class="absolute top-0 right-0 mt-1 mr-1 text-_orange_color font-extrabold">` +
        montant1 / 100 +
        `€</span>
         
        </div>

        <div class="relative w-1/3 h-6 bg-white">
          <div class="bg-_main_color_light h-full text-xs font-medium text-blue-100 p-0.5 leading-none" style="width:` +
        pourcentage +
        `%"></div>
          <span class="absolute top-0 right-0 mt-1 mr-1 text-_orange_color font-extrabold">` +
        montant2 / 100 +
        `€</span>
        <span class="absolute top-0 right-0 -mt-8 mr-0 text-_main_color_light font-extrabold">
        <img
          class=""
          src="https://cdn.shopify.com/s/files/1/0747/8430/9521/files/king.svg?v=1691796016"
          alt="king"
          loading="lazy"
          width="auto"
          height="auto">
      </span>
        </div>

        <div class="relative w-1/3 h-6 bg-white">
          <div class="bg-white h-full text-xs font-medium text-blue-100 p-0.5 leading-none" style="width: 0%"></div>
          <span class="absolute top-0 right-0 mt-1 mr-1 text-_orange_color font-extrabold">` +
        montant3 / 100 +
        `€</span>
        </div>
      </div>
      <p id="phrase">
         Dépensez ` +
        restant +
        `€ de plus et obtenez un ` +
        $('#panier').attr('data-product2') +
        `</p>`;
      recompense_zone = `
        <div class="prod flex px-5">
          <div class="flex">
          <img
          class="h-[61px] w-[61px] me-3"
          src="https://cdn.shopify.com/s/files/1/0747/8430/9521/files/livraison-gratuite.png?v=1693156594"
          alt="produit">
          <div class="desc">
          <p class="font-medium text-_main_color_dark">Récompense : Livraison</p>
          <p class="text-[12px] font-medium text-_main_color_dark mt-1">OFFERT</p>
          </div>
        </div>
        </div>
      `;
      /*selectedGoodies = $('#panier').attr('data-product1_id');*/
    } else if (total_panier >= montant2 && total_panier < montant3) {
      restant =
        `<span class='font-bold'>` +
        ((montant3 - total_panier) / 100).toFixed(2) +
        `</span>`;
      pourcentage = (total_panier / montant3) * 100;
      ctn +=
        `<div class="flex w-full mb-1 gap-1" id="progressBar">
        <div class="relative w-1/3 h-6 bg-white">
          <div class="bg-_main_color_light h-full text-xs font-medium text-blue-100 p-0.5 leading-none" style="width: 100%"></div>
          <span class="absolute top-0 right-0 mt-1 mr-1 text-_orange_color font-extrabold">` +
        montant1 / 100 +
        `€</span>
         
        </div>

        <div class="relative w-1/3 h-6 bg-white">
          <div class="bg-_main_color_light h-full text-xs font-medium text-blue-100 p-0.5 leading-none" style="width:100%"></div>
          <span class="absolute top-0 right-0 mt-1 mr-1 text-_orange_color font-extrabold">` +
        montant2 / 100 +
        `€</span>
        
        </div>

        <div class="relative w-1/3 h-6 bg-white">
          <div class="bg-_main_color_light h-full text-xs font-medium text-blue-100 p-0.5 leading-none" style="width: ` +
        pourcentage +
        `%"></div>
          <span class="absolute top-0 right-0 mt-1 mr-1 text-_orange_color font-extrabold">` +
        montant3 / 100 +
        `€</span>
        <span class="absolute top-0 right-0 -mt-8 mr-0 text-_main_color_light font-extrabold">
        <img
          class=""
          src="https://cdn.shopify.com/s/files/1/0747/8430/9521/files/king.svg?v=1691796016"
          alt="king"
          loading="lazy"
          width="auto"
          height="auto">
      </span>
        </div>
      </div>
      <p id="phrase">
         Dépensez ` +
        restant +
        `€ de plus et obtenez un ` +
        $('#panier').attr('data-product3') +
        `</p>`;
      recompense_zone =
        `
        <div class="prod flex px-5">
          <div class="flex">
          <img
          class="h-[61px] w-[61px] me-3"
          src="` +
        $('#panier').attr('data-product2_img') +
        `"
          alt="produit">
          <div class="desc">
          <p class="font-medium text-_main_color_dark">Récompense : ` +
        $('#panier').attr('data-product2') +
        ` + Livraison</p>
          <p class="text-[12px] font-medium text-_main_color_dark mt-1">OFFERT</p>
          </div>
        </div>
        </div>
      `;
      selectedGoodies = $('#panier').attr('data-product2_id');
    } else if (total_panier >= montant3) {
      ctn =
        `Vous obtenez un ` +
        $('#panier').attr('data-product3') +
        ` gratuitement et la livraison offerte`;
      recompense_zone =
        `
        <div class="prod flex px-5">
          <div class="flex">
          <img
          class="h-[61px] w-[61px] me-3"
          src="` +
        $('#panier').attr('data-product3_img') +
        `"
          alt="produit">
          <div class="desc">
          <p class="font-medium text-_main_color_dark">Récompense : ` +
        $('#panier').attr('data-product3') +
        ` + Livraison</p>
          <p class="text-[12px] font-medium text-_main_color_dark mt-1">OFFERT</p>
          </div>
        </div>
        </div>
      `;
      selectedGoodies = $('#panier').attr('data-product3_id');
    } else {
      ctn += `<p>Profitez de nos récompenses</p>`;
      recompense_zone = '';
      selectedGoodies = null;
    }
    document.getElementById('ZoneIncitation').innerHTML = ctn;
    document.getElementById('zoneRecompense').innerHTML = recompense_zone;
  };
  /**
   * Permet de rajouter la récompense au panier avant paiement
   */
  $('#btn-paiement').on('click', function (e) {
    e.preventDefault();
    //console.log(selectedGoodies);
    // Use the Shopify AJAX API to add the product to the cart
    if (selectedGoodies) {
      $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: {
          quantity: 1, // Adjust quantity as needed
          id: eval(selectedGoodies),
        },
        dataType: 'json',
        success: function () {
          // Redirect to the checkout page
          window.location.href = '/checkout';
        },
        error: function (response) {
          console.error('Error adding product to cart: ', response);
        },
      });
    } else {
      window.location.href = '/checkout';
    }
  });
  /**
   * hide the payement btns
   */
  const hidePayement = () => {
    $('#payment-div').fadeOut(0);
    $('#payment-div').prev().prev('h2').fadeOut(0);
  };

  /**
   * show the payement btns
   */
  const showPayement = () => {
    $('#payment-div').fadeIn(0);
    $('#payment-div').prev().prev('h2').fadeIn(0);
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
        updatePanier(response);
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
        deleteProduct();
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
  /*$('#form-etre-prevenu').on('submit', function () {
    $(this)
      .parent()
      .html(
        '<p class="text-center text-green-700">Vous recevrez une notification sur les prochaines ouvertures !</p>',
      );
  });*/

  // Close the modals if the user clicks outside of it
  window.onclick = function (event) {
    // panier
    if (event.target.matches('#panier') == true) {
      $('#panier').fadeOut();
      $('body').css('overflow', 'initial');
    }

    // popup product image
    if (event.target.matches('#image-product-popup') === true) {
      $('#image-product-popup').fadeOut();
      $('body').css('overflow', 'initial');
    }
  };

  /**
   * form addresses compte hide/show
   */
  // form add address
  $('#btn-open-addresse-form').on('click', function () {
    $(this).fadeOut(0);
    $('#form-add-address').fadeIn();
  });
  $('#btn-reset').on('click', (e) => {
    $('#form-add-address').fadeOut(0);
    $('#btn-open-addresse-form').fadeIn(0);
  });

  // form edit address
  const formsContainer = $('#forms-container');
  $('#address-content form').each((i, form) => {
    $(form).addClass('hidden');
    formsContainer.append(form);
  });
  $('#address-content #btn-edit').each((i, btn) => {
    $(btn).click(function () {
      $('#forms-container')
        .children('form')
        .each((i, form) => {
          $(form).fadeOut(0);
        });
      let id = $(this).data('id');
      let form = $('#form-edit-address-' + id).parent();
      form.fadeIn();
      form
        .children('div')
        .find('#btn-reset-edit-' + id)
        .click(() => form.fadeOut(0));
    });
  });

  /**
   * checked inputs for defaults address in inputs container
   */
  $('#forms-container i').each((i, icon) => {
    $(icon).click(function (e) {
      let input = $(this).next();
      if (input.prop('checked') === true) {
        input.prop('checked', '');
        input.css('background-color', '#FFF');
      } else {
        input.prop('checked', true);
        input.css('background-color', '#EA4038');
      }
    });
  });
  $('#forms-container label').each((i, label) => {
    $(label).click(function (e) {
      e.preventDefault();
      let input = $(this).prev();
      if (input.prop('checked') === true) {
        input.prop('checked', '');
        input.css('background-color', '#FFF');
      } else {
        input.prop('checked', true);
        input.css('background-color', '#EA4038');
      }
    });
  });

  /**
   * inputs form addresses feat
   */
  $('#address-content .address-items input').each((i, input) => {
    $(input).click(function (e) {
      $('#address-content .address-items input').each((i, item) => {
        $(item).prop('checked', '');
      });
      $(input).prop('checked', true);
    });
  });

  /**
   * checkbox for default address in address page
   */
  $('#form-add-address .filter-item i').on('click', function (e) {
    let input = $(this).next();
    if (input.prop('checked') === true) {
      input.prop('checked', '');
      input.css('background-color', '#FFF');
    } else {
      input.prop('checked', true);
      input.css('background-color', '#EA4038');
    }
  });
  $('#form-add-address .filter-item label').on('click', function (e) {
    e.preventDefault();
    let input = $(this).prev();
    if (input.prop('checked') === true) {
      input.prop('checked', '');
      input.css('background-color', '#FFF');
    } else {
      input.prop('checked', true);
      input.css('background-color', '#EA4038');
    }
  });

  /**
   * copie and paste - partage product feat
   */
  $('#btn-share').click(() => {
    navigator.clipboard.writeText(location.href).then(() => {
      $('#msg-share').fadeIn().fadeOut(5000);
    });
  });

  /**
   * showing popup when page finish load
   */
  /*if (location.pathname == '/') {
    setTimeout(() => {
      if (!hasSeenPopup()) {
        $('#home-popup').fadeIn();
        setPopupSeenCookie();
      }
    }, 2000);
  }*/

  $('#close-home-popup').click(function () {
    $('#home-popup').fadeOut();
  });

  // popup pour form on est ensemble de la newsletter
  /*$('#form-on-est-ensemble').submit(function (e) {
    e.preventDefault();

    const url = $(this).prop('action');
    $.post(url, $(this).serialize())
      .then((res) => {
        if (res.statusText !== 'Bad Request' && res.status !== 404) {
          console.log(res);
          //$('#popup-on-est-ensemble').fadeIn(1000).fadeOut(15000);
          $('#notif-subscription').fadeIn(1000).fadeOut(15000);
          $(this).children('input[type="text"]').val('');
          // send the email
        }
      })
      .catch((er) => {
        console.log(er);
      });
  });*/

  $('#form-on-est-ensemble').submit(function (e) {
    e.preventDefault(); // Prevent the default form submission

    const $form = $(this);
    const email = $form.find('input[name="contact[email]"]').val();

    // Perform AJAX request
    $.ajax({
      type: 'POST',
      url: '/contact#contact_form',
      data: {
        'contact[email]': email,
        form_type: 'customer',
        utf8: '✓',
        _method: 'POST',
        commit: 'Subscribe',
        'contact[tags]': 'newsletter',
      },
      success: function (response) {
        // Handle a successful subscription (e.g., show a success message)
        console.log('Subscription successful!', response);
        $form.trigger('reset'); // Reset the form
        $('#notif-subscription').fadeIn(1000).fadeOut(15000);
      },
      error: function (xhr, status, error) {
        // Handle subscription errors (e.g., show an error message)
        console.error('Subscription error:', error);
      },
    });
  });

  // gestion formulaire contact, input tel
  $('#form-contact form').submit(function (e) {
    e.preventDefault();
    const result = $('#input-tel-contact').val().match('^[0-9]{10}$');
    if (result !== null) {
      $.post($(this).attr('action'), $(this).serialize())
        .done((res) => {
          console.log(res);
          //window.location.reload();
          //$('#notif-contact-form').fadeIn().fadeOut(15000);
          // send the email
        })
        .catch((e) => console.log(e));
    } else {
      $('#input-tel-contact').css('border-color', 'red');
    }
  });

  // gestion du formulaire de registration et affichage d'un popup
  $('#form-register').submit(function (e) {
    e.preventDefault();
    window.location.href = '/?registred=1';
  });

  // check pour afficher le popup de bienvenue apres registration
  if (window.location.href.match('/?registred=1')) {
    $('#popup-welcom').fadeIn().fadeOut(7000);
  }

  // feat to display product images
  const productImgsContainer = $('#product-images');

  if (productImgsContainer.length >= 1) {
    productImgsContainer.children().each((i, img) => {
      $(img).click(function () {
        window.scrollTo(0, 167);
        var img_tag = $(this).removeClass('cursor-pointer').clone();
        $('#image-product-popup #img_show_up').html('');
        $('#image-product-popup #img_show_up').html(img_tag);
        $('#image-product-popup').css('display', 'flex');
        $(document.body).css('overflow', 'hidden');
      });
    });
  }
  $('#close-img-prod-poppup').click(() => {
    $('#image-product-popup').fadeOut(700);
    $(document.body).css('overflow', 'auto');
  });

  // disabeling the input key enter press to the map section
  $('#userAddress').on('keypress', (e) => {
    if (e.key === 'Enter') {
      return false;
    }
  });

  // review design feat
  // $(".jdgm-carousel-wrapper").css('background', 'red !important');
  // $(".jdgm-carousel-wrapper").parent().css('max-width', '100% !important');
  // console.log($(".jdgm-carousel-wrapper"))

  // voir plus feat
  const voirPlus = (el)=>{
    el.click(function(e){
      $(this).hide();
      $(this).parent().prev().removeClass('height-hide-text');
      $(this).parent().prev().find('div#shadow-hide-text').hide();
    });
  }
  voirPlus($("#read-more-trigger-desc"));
  voirPlus($("#read-more-trigger-comp"));

});


try {

  new Swiper('.swiper-photos', {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 2,
    grabCursor: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

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
  /*// Customize the sharing message as needed
  var message = 'Check out this product: ' + title + ' - ' + url;

  // Open a new window or tab with the sharing URL
  window.open(
    'https://example.com/share?url=' +
      encodeURIComponent(url) +
      '&text=' +
      encodeURIComponent(message),
    '_blank',
  );*/
}

// Check if the user has already seen the popup
function hasSeenPopup() {
  return document.cookie.includes('popup_seen=true');
}

// Set a cookie to indicate that the popup has been seen
function setPopupSeenCookie() {
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30); // Cookie will expire in 30 days
  document.cookie =
    'popup_seen=true; expires=' + expirationDate.toUTCString() + '; path=/';
}

// sending email
// try {
//   $('#form_test').on('click', function () {
//     console.log("btn clicked")
//     Email.send({
//       SecureToken: "e4a17db0-df95-4b53-aaf5-1159a2decdd9",
//       To: 'mamadoualioudeveloppeurweb@gmail.com',
//       From: "mamadouamamadoucom030@gmail.com",
//       Subject: "test functionnality email",
//       Body: "And this is the body of the test functionality email"
//     }).then((message) => {
//       alert(message)
//     });
//   })

// } catch (error) {
//   console.log(error)
// }
