self.addEventListener("install", () => {
  console.log("Service Worker 설치 완료");
});

self.addEventListener("activate", () => {
  console.log("Service Worker 활성화 완료");
});
