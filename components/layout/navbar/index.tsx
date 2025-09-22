import { getMenu } from "@/lib/shopify";

export async function Navbar() {
  const menu = await getMenu("nextjs-frontend-menu");
  console.log(menu);

  return <div>Navbar</div>;
}
