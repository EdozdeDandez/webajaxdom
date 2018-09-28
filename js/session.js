var session;

// if (session == ) 

var items = [];


function addToCart(id, image, name, price) 
{
	var item = {id: id, image: image, name: name, price: price};
	items.push(item);
	document.getElementById("cartCount").innerHTML=items.length + " items in cart";
	localStorage.setItem('cartItems', JSON.stringify(items));
	alert(name + 'added to cart');
}

function clearCart()
{
	items.length = 0;
}

function removeFromCart(id)
{
	index = items.findIndex(x => x.id == id);
	if (index > -1) {
		items.splice(index, 1);
		document.getElementById("cartCount").innerHTML=items.length + " items in cart";
		localStorage.setItem('cartItems', JSON.stringify(items));
	}
	displayCartItems();
}

function displayCartItems()
{
	var cart_itemsdiv = document.getElementById("cart_items");
	cart_itemsdiv.innerHTML = '';
	var total = 0;
	for (var index=0; index < items.length; index++) {
		var newDivElement = document.createElement('div');
		newDivElement.innerHTML = '<div class="row">' + 
										'<div class="col-md-3 col-sm-3">' + 
											'<img src="img/' + items[index].image +'" alt="' + items[index].image + '" class="img-responsive mycenter">' + 
										'</div>' + 
										'<div class="col-md-6 col-sm-6">' + 
											'<p>' + items[index].name + '</p>' + 
											'<p> <strong>Price:</strong> ' + items[index].price + '</p>' + 
										'</div>' + 
										'<div class="col-md-3 col-sm-3">' + 
											'<button onclick="removeFromCart(' + items[index].id +')" class="btn btn-primary">Remove</button>' + 
										'</div>' +
									'</div>'
		cart_itemsdiv.appendChild(newDivElement);
		total += items[index].price;
	}

	document.getElementById("cart_total").innerHTML = total;
}