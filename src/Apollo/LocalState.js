//client에 없는 state
//application 의 local state는 복잡하지 않다.
//왜냐하면 사용자가 많은 걸 하지 않거든.

//요구하는 게 2가지
/*
    1. Type 정의
    2. Resolver
*/

export const defaults = {
  isLoggedIn: localStorage.getItem("token") !== null ? true : false
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggedIn: true
        }
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location.reload();
      return null;
    }
  }
};

/*
typeDefs    
isLoggedIn = false (기본값)
    
resolvers
특정 조건을 만족하면 
isLoggedIn을 true로 바꾸기 위한 함수 필요
*/
