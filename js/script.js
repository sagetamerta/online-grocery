window.onload = function () {
	showAllCartItem();
};

function showDeliveryDetails() {
	if (localStorage.getItem("cart_item")) {
		document.getElementById("checkout").classList.remove("d-none");
	} else {
		alert("Please add item to cart first!");
	}
}

function showAllCartItem() {
	const cartItems = localStorage.getItem("cart_item");
	if (cartItems != null) {
		let cartItem = JSON.parse(cartItems);
		let header = `<table class="table">
				<thead>
					<tr>
					<th scope="col">Product ID</th>
					<th scope="col">Product Name</th>
					<th scope="col">Unit Price</th>
					<th scope="col">Unit Quantity</th>
					<th scope="col">In Stock</th>
					</tr>
				</thead>
				<tbody>`;
		let footer = `</tbody></table>`;
		let body = "";
		for (let key in cartItem) {
			body += `
				<tr>
					<td>${cartItem[key].product_id}</td>
					<td>${cartItem[key].product_name}</td>
					<td>${cartItem[key].unit_price}</td>
					<td>${cartItem[key].unit_quantity}</td>
					<td>${cartItem[key].in_stock}</td>
				</tr>
			`;
		}
		let cartItemList = header + body + footer;
		document.getElementById("invoice").value = cartItemList;
		document.getElementById("cart_item_list").innerHTML = cartItemList;
		let total = document.createElement("p");
		total.innerHTML = "Total: " + cartItem.length + " item";
		document.getElementById("cart_item_list").appendChild(total);
	}
}

function clearAllItem() {
	if (confirm("Are you sure to clear all item?")) {
		localStorage.removeItem("cart_item");
		window.location.reload();
	}
}

function showProductCategory(img_source) {
	// Create Element Image Inside Div detail_category
	let img = document.createElement("img");
	img.src = "./images/" + img_source + ".png";
	img.className = "img-fluid";
	img.alt = img_source;
	img.useMap = "#" + img_source;

	// Append Child to Div detail_category
	document.getElementsByClassName("detail_category")[0].innerHTML = "";
	document.getElementsByClassName("detail_category")[0].appendChild(img);

	// Create Element Map Inside Div detail_category
	let map = document.createElement("map");
	map.name = img_source;
	map.className = "detail_map";

	// Append Child to Div detail_category
	document.getElementsByClassName("detail_category")[0].appendChild(map);

	// Create Element Area Inside Map
	// Check product category because each category have different area
	if (img_source == "frozen_food") {
		for (let key in frozen_food_coords_href) {
			// Create Element Area Inside Map
			let area = document.createElement("area");
			area.shape = "rect";
			area.coords = frozen_food_coords_href[key].coords;
			area.alt = key;
			area.id = frozen_food_coords_href[key].id;
			area.style.cursor = "pointer";
			area.onmouseover = function () {
				document.body.style.cursor = "default";
			};
			let idProduct = area.id;
			area.onclick = function () {
				showProductDetails(idProduct);
			};
			// Append Child to Map
			map.appendChild(area);
		}
	}
	if (img_source == "fresh_food") {
		for (let key in fresh_food_coords_href) {
			// Create Element Area Inside Map
			let area = document.createElement("area");
			area.shape = "rect";
			area.coords = fresh_food_coords_href[key].coords;
			area.alt = key;
			area.id = fresh_food_coords_href[key].id;
			area.style.cursor = "pointer";
			area.onmouseover = function () {
				document.body.style.cursor = "default";
			};
			let idProduct = area.id;
			area.onclick = function () {
				showProductDetails(idProduct);
			};
			// Append Child to Map
			map.appendChild(area);
		}
	}
	if (img_source == "beverages") {
		for (let key in beverages_coords_href) {
			// Create Element Area Inside Map
			let area = document.createElement("area");
			area.shape = "rect";
			area.coords = beverages_coords_href[key].coords;
			area.alt = key;
			area.id = beverages_coords_href[key].id;
			area.style.cursor = "pointer";
			area.onmouseover = function () {
				document.body.style.cursor = "default";
			};
			let idProduct = area.id;
			area.onclick = function () {
				showProductDetails(idProduct);
			};
			// Append Child to Map
			map.appendChild(area);
		}
	}
	if (img_source == "home_health") {
		for (let key in home_health_coords_href) {
			// Create Element Area Inside Map
			let area = document.createElement("area");
			area.shape = "rect";
			area.coords = home_health_coords_href[key].coords;
			area.alt = key;
			area.id = home_health_coords_href[key].id;
			area.style.cursor = "pointer";
			area.onmouseover = function () {
				document.body.style.cursor = "default";
			};
			let idProduct = area.id;
			area.onclick = function () {
				showProductDetails(idProduct);
			};
			// Append Child to Map
			map.appendChild(area);
		}
	}
	if (img_source == "pet_food") {
		for (let key in pet_food_coords_href) {
			// Create Element Area Inside Map
			let area = document.createElement("area");
			area.shape = "rect";
			area.coords = pet_food_coords_href[key].coords;
			area.alt = key;
			area.id = pet_food_coords_href[key].id;
			area.style.cursor = "pointer";
			area.onmouseover = function () {
				document.body.style.cursor = "default";
			};
			let idProduct = area.id;
			area.onclick = function () {
				showProductDetails(idProduct);
			};
			// Append Child to Map
			map.appendChild(area);
		}
	}
}

function showProductDetails(idProduct) {
	XMLHttpRequestObject = new XMLHttpRequest();
	XMLHttpRequestObject.onreadystatechange = function () {
		if (
			XMLHttpRequestObject.readyState == 4 &&
			XMLHttpRequestObject.status == 200
		) {
			document.getElementById("product_details").innerHTML =
				XMLHttpRequestObject.responseText;
		}
	};
	XMLHttpRequestObject.open(
		"GET",
		"./php/product_details.php?id=" + idProduct,
		true
	);
	XMLHttpRequestObject.send();
}

function addProductToCart() {
	let allCartItem = JSON.parse(localStorage.getItem("cart_item") || "[]");
	const cartItem = {
		product_id: document.getElementById("product_id").innerText,
		product_name: document.getElementById("product_name").innerText,
		unit_price: document.getElementById("unit_price").innerText,
		unit_quantity: document.getElementById("unit_quantity").innerText,
		in_stock: document.getElementById("in_stock").innerText,
	};
	let isExist = false;
	allCartItem.forEach(function (item) {
		if (item.product_id == cartItem.product_id) {
			isExist = true;
		}
	});
	if (isExist == false) {
		allCartItem.push(cartItem);
	}
	window.localStorage.setItem("cart_item", JSON.stringify(allCartItem));
	showAllCartItem();
}

// initialize frozen coords
const frozen_food_coords_href = {
	frozen_food_1: {
		coords: "7,131,88,170",
		id: 1002,
	},
	frozen_food_2: {
		coords: "61,249,144,288",
		id: 1000,
	},
	frozen_food_3: {
		coords: "155,252,236,288",
		id: 1001,
	},
	frozen_food_4: {
		coords: "278,172,195,133",
		id: 1003,
	},
	frozen_food_5: {
		coords: "254,249,336,286",
		id: 1004,
	},
	frozen_food_6: {
		coords: "349,249,429,289",
		id: 1005,
	},
};

const fresh_food_coords_href = {
	fresh_food_1: {
		coords: "3,130,69,171",
		id: 3002,
	},
	fresh_food_2: {
		coords: "32,248,114,289",
		id: 3000,
	},
	fresh_food_3: {
		coords: "130,250,209,290",
		id: 3001,
	},
	fresh_food_4: {
		coords: "142,132,205,171",
		id: 3003,
	},
	fresh_food_5: {
		coords: "213,130,278,170",
		id: 3004,
	},
	fresh_food_6: {
		coords: "284,130,347,171",
		id: 3006,
	},
	fresh_food_7: {
		coords: "354,130,417,170",
		id: 3007,
	},
	fresh_food_8: {
		coords: "422,131,484,170",
		id: 3005,
	},
};

const beverages_coords_href = {
	beverages_1: {
		coords: "19,245,84,284",
		id: 4003,
	},
	beverages_2: {
		coords: "90,245,154,283",
		id: 4004,
	},
	beverages_3: {
		coords: "162,246,222,284",
		id: 4000,
	},
	beverages_4: {
		coords: "229,245,292,283",
		id: 4001,
	},
	beverages_5: {
		coords: "300,245,364,283",
		id: 4002,
	},
	beverages_6: {
		coords: "394,136,476,177",
		id: 4005,
	},
};

const home_health_coords_href = {
	home_health_1: {
		coords: "7,130,89,171",
		id: 2002,
	},
	home_health_2: {
		coords: "62,250,144,290",
		id: 2000,
	},
	home_health_3: {
		coords: "155,250,237,290",
		id: 2001,
	},
	home_health_4: {
		coords: "195,132,279,173",
		id: 2005,
	},
	home_health_5: {
		coords: "255,250,337,290",
		id: 2003,
	},
	home_health_6: {
		coords: "350,250,431,290",
		id: 2004,
	},
	home_health_7: {
		coords: "388,132,471,172",
		id: 2006,
	},
};

const pet_food_coords_href = {
	pet_food_1: {
		coords: "101,132,182,170",
		id: 5002,
	},
	pet_food_2: {
		coords: "195,131,278,173",
		id: 5003,
	},
	pet_food_3: {
		coords: "255,247,337,291",
		id: 5001,
	},
	pet_food_4: {
		coords: "351,250,431,288",
		id: 5000,
	},
	pet_food_5: {
		coords: "389,132,470,171",
		id: 5004,
	},
};
