// const userName = 'echo';
// const avatar = 'echo.png';

// const user = {
//     userName,
//     avatar,
//     setUserName(userName) {
//         this.userName = userName
//         return this
//     }
// }
// console.log(user)
// console.log(user.setUserName('Foo').userName)
// console.log(user)


// const createUser = ({ userName, avatar }) => ({
//     userName,
//     avatar,
//     setUserName(userName) {
//         this.userName = userName
//         return this
//     }
// })
// console.log(createUser({ userName: 'echo', avatar: 'echo.png' }))

// const noop = () => { return { foo: 'bar' } }
// const noop = () => ({ foo: 'bar' })
// console.log(noop())

const createUser = ({
    userName = 'Anonymous',
    avatar = 'anon.png'
  } = {}) => ({
    userName,
    avatar
  });
  console.log(
    // { userName: "echo", avatar: 'anon.png' }
    createUser({ userName: 'echo' }),
    // { userName: "Anonymous", avatar: 'anon.png' }
    createUser()
  );