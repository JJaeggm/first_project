'use strict';

// iframe 조작하기
const iframe1 = document.querySelector('#iframe1');
iframe1.addEventListener('load', (e) => {
  const iframeDocument = iframe1.contentDocument;
  iframeDocument.body.style.backgroundColor = 'royalblue';

  const newEl = document.createElement('div');
  newEl.innerHTML = `<h1>iframe 안쪽문서</h1>`;
  newEl.style.color = 'white';
  iframeDocument.body.appendChild(newEl);

  setTimeout(() => {
    const iframeWindow = iframe1.contentWindow;
    iframeDocument.location = 'http://google-analytics.com';
  }, 3000);
})