export default async function ClientSite({
  params,
}: {
  params: { siteId: string };
}) {
  return <p>Welcome to {params.siteId}</p>;
}
