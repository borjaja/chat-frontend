interface Args {
  username: string;
  password: string;
}
const signUp = async ({ username, password }: Args) => {
  return await fetch("http://localhost:8080/auth/sign-up", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};

const auth = { signUp };

export default auth;
