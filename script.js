fetch("products.json")
.then(function(res){
    return res.json();
})

.then(function(products){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let product of products){
        out += `
        <tr>
            <td><img src='${product.img}'></td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.inventory}</td>
            <td>${product.productCode}</td>
        </tr>
        `;
    }

    placeholder.innerHTML = out;
})