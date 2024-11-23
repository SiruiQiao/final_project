document.getElementById("year").innerHTML = new Date().getFullYear();

// Code reference: https://www.w3schools.com/howto/howto_js_filter_elements.asp

// 选择筛选按钮、奶昔卡片和 body 元素
const filterButtons = document.querySelectorAll('.filter');
const smoothieCards = document.querySelectorAll('.smoothie-card');
const resetButton = document.querySelector('.reset');
const body = document.body; // 用于修改背景颜色

// 筛选按钮功能
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const fruit = button.dataset.fruit; // 获取水果名称
        const color = button.dataset.color; // 获取对应颜色
        changeBackgroundColor(color); // 改变背景颜色
        filterSmoothies(fruit); // 调用筛选函数
    });
});

// 筛选函数
function filterSmoothies(fruit) {
    smoothieCards.forEach(card => {
        const fruits = card.dataset.fruits || card.dataset.fruit; // 获取卡片数据
        if (fruits && fruits.split(',').map(f => f.trim()).includes(fruit)) {
            card.style.display = 'block'; // 显示匹配的卡片
        } else {
            card.style.display = 'none'; // 隐藏不匹配的卡片
        }
    });
}

// 重置按钮功能
if (resetButton) {
    resetButton.addEventListener('click', () => {
        smoothieCards.forEach(card => {
            card.style.display = 'block'; // 显示所有卡片
        });
        const resetColor = resetButton.dataset.color; // 获取重置按钮的颜色
        changeBackgroundColor(resetColor); // 重置背景颜色
    });
}

// 改变背景颜色函数
function changeBackgroundColor(color) {
    body.style.backgroundColor = color;
}


