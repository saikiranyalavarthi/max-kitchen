import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { menuCategories } from "@/data/menu";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  const currentCategory = menuCategories.find(
    (item) => item.id === category
  );

  if (!currentCategory) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8f5f0] px-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#651719]">
            Category Not Found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            This menu category does not exist.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#651719] px-5 py-3 text-sm font-semibold text-white"
          >
            <ArrowLeft size={17} />
            Back to Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#24150f]">
      {/* Header */}
      <header className="bg-[#651719] px-4 pb-6 pt-5 text-white">
        <div className="mx-auto max-w-md">
          <Link
            href="/"
            className="mb-5 inline-flex items-center gap-2 text-sm text-[#f2d79d]"
          >
            <ArrowLeft size={18} />
            Back to Menu
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#d6ad63] bg-white shadow-lg">
              <span className="text-center text-xs font-black leading-tight text-[#651719]">
                MAX
                <br />
                KITCHEN
              </span>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#e8c987]">
                MAX KITCHEN
              </p>

              <h1 className="mt-1 text-2xl font-bold">
                {currentCategory.name}
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Items */}
      <section className="mx-auto max-w-md px-4 py-6">
        {currentCategory.items.length === 0 ? (
          <div className="rounded-2xl border border-[#eadfd2] bg-white px-5 py-12 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f5e8d7]">
              <ChevronRight className="text-[#651719]" size={24} />
            </div>

            <h2 className="text-lg font-bold">
              Menu Coming Soon
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Items for this category will be displayed here.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {currentCategory.items.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-[#eadfd2] bg-white shadow-sm"
              >
                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h2 className="font-bold text-[#24150f]">
                        {item.name}
                      </h2>

                      {item.description && (
                        <p className="mt-1 text-sm leading-5 text-gray-500">
                          {item.description}
                        </p>
                      )}

                      {item.calories && (
                        <p className="mt-2 text-xs text-gray-400">
                          {item.calories} kcal
                        </p>
                      )}
                    </div>

                    {item.price && (
                      <div className="shrink-0 rounded-lg bg-[#651719] px-3 py-1.5">
                        <span className="text-sm font-bold text-white">
                          SAR {item.price}
                        </span>
                      </div>
                    )}
                  </div>

                  {item.variants && item.variants.length > 0 && (
                    <div className="mt-4 border-t border-gray-100 pt-3">
                      <div className="space-y-2">
                        {item.variants.map((variant) => (
                          <div
                            key={variant.name}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-gray-600">
                              {variant.name}
                            </span>

                            <span className="font-semibold text-[#651719]">
                              SAR {variant.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Back Button */}
        <Link
          href="/"
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#d8c7b5] bg-white py-3.5 text-sm font-semibold text-[#651719] shadow-sm"
        >
          <ArrowLeft size={17} />
          View All Categories
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#eadfd2] px-5 py-7 text-center">
        <p className="font-semibold text-[#651719]">
          MAX KITCHEN
        </p>

        <p className="mt-1 text-xs text-gray-500">
          Digital Menu • Prices in SAR
        </p>
      </footer>
    </main>
  );
}