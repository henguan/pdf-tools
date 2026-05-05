document.addEventListener('DOMContentLoaded', function () {

    // 1. 标签切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.panel');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // 通用：显示转换按钮
    function showConvertBtn(actionBox, text = '开始转换', callback) {
        actionBox.innerHTML = `<button class="upload-btn convert-btn">${text}</button>`;
        actionBox.querySelector('.convert-btn').addEventListener('click', callback);
    }

    // 通用：显示下载按钮
    function showDownload(resultBox, filename = '文件.pdf') {
        resultBox.innerHTML = `<a class="upload-btn" href="#" download="${filename}">下载 ${filename}</a>`;
    }

    // 绑定所有功能
    const functions = [
        { id: 'wordFile', panel: 'word2pdf', text: '开始转换Word→PDF' },
        { id: 'excelFile', panel: 'excel2pdf', text: '开始转换Excel→PDF' },
        { id: 'pptFile', panel: 'ppt2pdf', text: '开始转换PPT→PDF' },
        { id: 'jpgFile', panel: 'jpg2pdf', text: '开始生成PDF' },
        { id: 'pngFile', panel: 'png2pdf', text: '开始生成PDF' },
        { id: 'pdf2JpgFile', panel: 'pdf2jpg', text: '开始转换PDF→JPG' },
        { id: 'pdf2PngFile', panel: 'pdf2png', text: '开始转换PDF→PNG' },
        { id: 'pdf2HtmlFile', panel: 'pdf2html', text: '开始转换PDF→HTML' },
        { id: 'compressPdf', panel: 'compress', text: '开始压缩PDF' },
        { id: 'mergePdf', panel: 'merge', text: '开始合并PDF' },
        { id: 'splitPdf', panel: 'split', text: '开始拆分PDF' },
        { id: 'rotatePdf', panel: 'rotate', text: '开始旋转PDF' },
        { id: 'addPageNumPdf', panel: 'addPageNum', text: '开始添加页码' },
        { id: 'protectPdf', panel: 'protect', text: '开始加密PDF' },
        { id: 'unprotectPdf', panel: 'unprotect', text: '开始解密PDF' }
    ];

    functions.forEach(fn => {
        const el = document.getElementById(fn.id);
        if (!el) return;

        el.addEventListener('change', function (e) {
            const panel = document.getElementById(fn.panel);
            const actionBox = panel.querySelector('.action-box');
            const resultBox = panel.querySelector('.result-box');

            resultBox.innerHTML = `<p style="color:green">已选择文件，可点击处理</p>`;

            showConvertBtn(actionBox, fn.text, function () {
                resultBox.innerHTML = `<p style="color:#2563eb">处理中...</p>`;
                setTimeout(() => {
                    showDownload(resultBox, '处理完成.pdf');
                }, 800);
            });
        });
    });
});

