<?php

require "./connect.php";


$sql = "SELECT * FROM products where product_id = '$_GET[id]'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) { ?>
        <!-- span hidden -->
        <span id="product_id" style="display: none;"><?php echo $row['product_id']; ?></span>
        <tr>
            <p>
                <span class="font-weight-bold">Product Name : </span><span id="product_name"><?= $row['product_name']; ?></span>
            </p>
        </tr>
        <tr>
            <p>
                <span class="font-weight-bold">Item Price : </span><span id="unit_price">$<?= $row['unit_price']; ?></span>
            </p>

        </tr>
        <tr>
            <p>
                <span class="font-weight-bold">Quantity : </span><span id="unit_quantity"><?= $row['unit_quantity']; ?></span>
            </p>
        </tr>
        <tr>
            <p>
                <span class="font-weight-bold">Item in stock : </span><span id="in_stock"><?= $row['in_stock']; ?></span>
            </p>
        </tr>
<?php
    }
} else {
    echo "no products found";
}
?>