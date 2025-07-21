$(document).ready(function () {
      $('#searchTerm').text(localStorage.getItem('searchQuery'));
      $('.product').click(function () {
        const product = {
          name: $(this).data('name'),
          price: $(this).data('price'),
          size: $(this).data('size'),
          closetOwner: JSON.parse($(this).attr('data-closet'))
        };
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        localStorage.setItem('closetOwner', JSON.stringify(product.closetOwner));
        window.location.href = 'product.html';
      });
    });

    