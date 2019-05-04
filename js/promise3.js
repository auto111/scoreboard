// promise 순차적으로 처리하기: 리턴시에 Promise를 리턴
// 제대로 처리되지

new Promise(resolve => {
  // 비동기로직1
  setTimeout(()=>{
    console.log('async setTimeout1');
    resolve('success');
  }, 1000);
}).then(value => {
  // 비동기 로직을 Promise로 감싸서 리턴해야 한다.
  return new Promise(resolve => {
    // 비동기로직2
    setTimeout(() => {
      console.log('async timeout2');
      resolve('async2 resolved');
    }, 1000);
  });
}).then(value => {
  console.log(value);
});