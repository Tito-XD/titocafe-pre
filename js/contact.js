/**
 * 联系页面交互脚本
 */

document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    initFAQ();
});

// 联系表单处理
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const formData = new FormData(form);
        
        // 收集表单数据
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // 简单验证
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert('请填写所有必填项');
            return;
        }

        // 模拟提交
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // 模拟网络请求
        await new Promise(resolve => setTimeout(resolve, 1500));

        // 显示成功消息
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // 重置表单
        form.reset();
        
        // 显示成功提示
        alert('消息已发送成功！我们会尽快回复你。');
    });
}

// FAQ手风琴
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // 关闭其他打开的项目
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('open')) {
                    otherItem.classList.remove('open');
                }
            });
            
            // 切换当前项目
            item.classList.toggle('open');
        });
    });
}
