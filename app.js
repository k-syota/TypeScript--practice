var vegetables = document.querySelectorAll(".vegetable");
vegetables.forEach(function (vegetable) {
    vegetable.addEventListener("click", function () {
        vegetable.classList.toggle("vegetable__active");
        var totalWeigth = 0;
        var activeVegetables = document.querySelectorAll(".vegetable__active");
        activeVegetables.forEach(function (activeVegetable) {
            var _a;
            totalWeigth += Number((_a = activeVegetable.children[1].textContent) === null || _a === void 0 ? void 0 : _a.slice(0, -1));
        });
        var totalWeigthEl = document.querySelector(".total-weight");
        if (totalWeigthEl !== null) {
            totalWeigthEl.textContent = "".concat(totalWeigth, "g");
        }
    });
});
