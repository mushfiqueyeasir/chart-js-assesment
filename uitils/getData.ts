export async function getData({
  endPoint,
}: {
  endPoint: string;

}) {
  let url: string = `${process.env.NEXT_PUBLIC_SERVER_URL}/${endPoint}`;
  console.log(url)

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch data");
  }

  return res.json();
}
