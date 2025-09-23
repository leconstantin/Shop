import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  description:
    "High-performance e-commerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full border-bottom-b pt-12 md:pt-24 lg:pt-32">
        <div className="space-y-10 px-4 md:px-6 xl:space-y-16">
          <div className="mx-auto grid max-w-[1300px] gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-16 md:px-10">
            <div>
              <h1 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:leading-tighter xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Discover the Latest Fashion Trends
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore our curated collections of stylish apparel and
                accessories for every occasion.
              </p>
              <div className="flex w-full flex-col gap-2 text-nowrap md:flex-row">
                <Button>
                  <Link href="/search/womens-collection" prefetch={false}>
                    Shop Women
                  </Link>
                </Button>
                <Button variant={"outline"}>
                  <Link href="/search/mens-collection" prefetch={false}>
                    Shop Men
                  </Link>
                </Button>
                <Button variant={"outline"}>
                  <Link href="/search/sales" prefetch={false}>
                    Shop Sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <Image
            alt="Hero"
            className="mx-auto rounded-t-xl object-cover"
            height="300"
            src="/banner.png"
            width="1270"
          />
        </div>
      </section>
      <section className="grid w-full place-content-center py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                New Arrivals
              </div>
              <h2 className="font-bold text-3xl tracking-tighter sm:text-5xl">
                Trending Now
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out our latest collection of stylish and comfortable
                clothing.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start justify-center gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
            <div className="grid gap-1">
              <Link
                className="group"
                href="/search/womens-collection"
                prefetch={false}
              >
                <Image
                  alt="Women's Collection"
                  className="aspect-[4/5] overflow-hidden rounded-lg object-cover transition-transform group-hover:scale-105"
                  height="500"
                  src="/womens-collection.png"
                  width="400"
                />
                <h3 className="mt-4 font-bold text-lg group-hover:underline">
                  Women&apos;s Collection
                </h3>
              </Link>
            </div>
            <div className="grid gap-1">
              <Link
                className="group"
                href="/search/mens-collection"
                prefetch={false}
              >
                <Image
                  alt="Men's Collection"
                  className="aspect-[4/5] overflow-hidden rounded-lg object-cover transition-transform group-hover:scale-105"
                  height="500"
                  src="/mens-collection.png"
                  width="400"
                />
                <h3 className="mt-4 font-bold text-lg group-hover:underline">
                  Men&apos;s Collection
                </h3>
              </Link>
            </div>
            <div className="grid gap-1">
              <Link className="group" href="/search/kids" prefetch={false}>
                <Image
                  alt="Kids' Collection"
                  className="aspect-[4/5] overflow-hidden rounded-lg object-cover transition-transform group-hover:scale-105"
                  height="500"
                  src="/kids-collection.png"
                  width="400"
                />
                <h3 className="mt-4 font-bold text-lg group-hover:underline">
                  Kids&apos;s Collection
                </h3>
              </Link>
            </div>
            <div className="grid gap-1">
              <Link className="group" href="/search/sales" prefetch={false}>
                <Image
                  alt="Sale's Collection"
                  className="aspect-[4/5] overflow-hidden rounded-lg object-cover transition-transform group-hover:scale-105"
                  height="500"
                  src="/sales-collection.png"
                  width="400"
                />
                <h3 className="mt-4 font-bold text-lg group-hover:underline">
                  Sale&apos;s Collection
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="grid w-full place-content-center bg-[url('/sale-backdrop.svg')] py-12 lg:py-7">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <Image
            alt="sale footer banner"
            height={193}
            src="/sale-banner.svg"
            width={472}
          />
          <div className="z-50 space-y-3">
            <div className="bg-white dark:bg-black">
              <h2 className="p-2 font-bold text-3xl tracking-tighter md:text-4xl/tight">
                Explore Our Sale Collection
              </h2>
            </div>
            <div className="bg-white">
              <p className="mx-auto max-w-[600px] p-2 text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don&apos;t miss out on our amazing deals and discounts.
              </p>
            </div>
          </div>
          <div className="z-50 mx-auto w-full max-w-sm space-y-2">
            <Button asChild size={"lg"}>
              <Link href="#" prefetch={false}>
                Shop Sale
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
