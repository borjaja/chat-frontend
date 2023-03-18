export const signUp = async () => {
  return await fetch("http://localhost:8080/", { method: "GET" }).then((res) => res.json());
};
