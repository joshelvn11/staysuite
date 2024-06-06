export default async function ClientSite({
  params,
}: {
  params: { slug: string };
}) {
  return <p>Welcome to {params.slug}</p>;
}
