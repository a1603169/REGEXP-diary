let str = `
010-8418-3838
abc@gmail.com
https://www.naver.com
the quick brown The fox jumps over the lazy dog
abbdcccdddd
`
// `` 은 줄바꿈 가능 나머지 불가

// const regexp = new RegExp('the', 'gi') //g flag


console.log(
  str.match(/(?<=@).{1,}/g)
  )
