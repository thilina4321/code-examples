function ex() {
  const res = await fetch(
    "https://qjgw0y2t09.execute-api.us-east-1.amazonaws.com/metadata?index=6317"
  );

  const resJson = await res.json();

  console.log(resJson);
}
