<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Grocery</title>
    <link rel="stylesheet" href="./styles/style.css">
    <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col p-2 w-100 left-sidebar">
                <img src="./images/categories.png" alt="Products Category" usemap="#products_category">
                <map name="products_category">
                    <area shape="rect" coords="4,180,88,140" href="#" alt="Frozen_Food" onmouseover="showProductCategory('frozen_food')">
                    <area shape="rect" coords="183,180,101,141" href="#" alt="Fresh_Food" onmouseover="showProductCategory('fresh_food')">
                    <area shape="rect" coords="197,141,278,180" href="#" alt="Beverages" onmouseover="showProductCategory('beverages')">
                    <area shape="rect" coords="292,141,373,180" href="#" alt="Home_Health" onmouseover="showProductCategory('home_health')">
                    <area shape="rect" coords="388,141,466,180" href="#" alt="Pet_Food" onmouseover="showProductCategory('pet_food')">
                </map>
                <div class="detail_category"></div>
            </div>
            <div class="col p-2 w-100 right-sidebar">
                <div class="row pl-5 pt-5 product-details">
                    <h3 class="w-100">Product Details</h3>
                    <div class="w-100" id="product_details">
                        <p>No product details is shown. Select any product first.</p>
                    </div>
                    <button class="btn btn-outline-primary mb-5" onclick="addProductToCart()">Add to Cart</button>
                    <h3 class="w-100">Item added on Cart</h3>
                    <div class="w-100" id="cart_item_list">
                        <p>No Cart item is shown. Add any item to cart first.</p>
                    </div>
                    <div class="w-100 mb-5">
                        <button class="btn btn-primary mr-1" onclick="showDeliveryDetails()">Checkout Now</button>
                        <button class="btn btn-outline-danger" onclick="clearAllItem()">Clear Shopping Cart</button>
                    </div>
                </div>
                <div class="row mt-2 pl-5">
                    <form action="./php/mail.php" method="post" class="d-none" id="checkout">
                        <h3>Delivery Details</h3>
                        <div class="form-row">
                            <input type="hidden" id="invoice" name="invoice">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" name="name" id="name" placeholder="John Doe" required>
                            </div>
                            <div class="form-group">
                                <label for="address">Address</label>
                                <input type="text" class="form-control ml-2" name="address" id="address" placeholder="ABC Street" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="suburb">Suburb</label>
                                <input type="text" class="form-control" name="suburb" id="suburb" required>
                            </div>
                            <div class="form-group">
                                <label for="state">State</label>
                                <input type="text" class="form-control ml-2" name="state" id="state" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="country">Country</label>
                                <input type="text" class="form-control" name="country" id="country" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" class="form-control ml-2" name="email" id="email" placeholder="name@example.com" required>
                            </div>
                            <button type="submit" class="btn btn-primary mr-1">Purchase</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="./js/script.js"></script>
</body>

</html>