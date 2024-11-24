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


// 获取所有按钮
const buttons = document.querySelectorAll('.filter');

// 遍历每个按钮，绑定点击事件
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除其他按钮的 active 状态
        buttons.forEach(btn => btn.classList.remove('active'));

        // 为当前点击的按钮添加 active 状态
        button.classList.add('active');

        // 动态改变页面背景颜色（根据 data-color 属性）
        document.body.style.backgroundColor = button.dataset.color;
    });
});

// 获取表单和消息元素
const form = document.getElementById('recipeForm');
const successMessage = document.getElementById('successMessage');

// 监听表单提交事件
if (form && successMessage) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // 阻止默认提交行为

        // 显示成功消息
        successMessage.classList.remove('hidden');

        // 清空表单
        form.reset();

        // 隐藏消息（可选，延迟几秒后隐藏）
        // setTimeout(() => {
        //     successMessage.classList.add('hidden');
        // }, 5000); // 5秒后隐藏
    });
}



// 获取模态框和相关元素
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalIngredients = document.getElementById('modal-ingredients');
const closeButton = document.querySelector('.close-btn');

// 函数：显示模态框
function showModal(card) {
    const imageSrc = card.querySelector('img').src;
    const title = card.querySelector('h3').textContent;
    const ingredientsList = card.querySelectorAll('ul li');

    // 填充模态框内容
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalIngredients.innerHTML = ''; // 清空现有内容
    ingredientsList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.textContent;
        modalIngredients.appendChild(li);
    });

    // 显示模态框
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 禁用背景滚动
}

// 函数：关闭模态框
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // 恢复背景滚动
}

// 为每个卡片添加点击事件，仅在宽度大于 800px 时启用
smoothieCards.forEach(card => {
    card.addEventListener('click', () => {
        if (window.innerWidth >= 800) {
            showModal(card);
        }
    });
});

// 关闭模态框
closeButton.addEventListener('click', closeModal);

// 点击模态框背景关闭
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
