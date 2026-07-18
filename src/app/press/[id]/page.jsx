import PressArticlePage from "@/components/press/PressArticlePage";
import { pressReleases } from "@/components/press/PressData";
 
// Optional but recommended: pre-render a static page for every release at build time.
export function generateStaticParams() {
  return pressReleases.map((release) => ({ id: release.id }));
}
 
// NOTE: in Next.js 15, `params` is a Promise and must be awaited.
// `await` on a plain object (Next 14) also just resolves immediately,
// so this works on both versions.
export default async function Page({ params }) {
  const { id } = await params;
  return <PressArticlePage id={id} />;
}
 