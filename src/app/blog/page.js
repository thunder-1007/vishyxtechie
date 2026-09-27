import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Blog",
  description: "Insights on running a business online, from Vishyx Techie.",
};

// Posts will come from Appwrite's `blog_posts` collection (see
// Vishyx-Techie-Admin-Panel-Spec.md) once the admin panel is wired up.
const posts = [];

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Blog" subtitle="Ideas on running and growing a business online." />
      <section className="mx-auto max-w-4xl px-6 py-16">
        {posts.length === 0 ? (
          <div className="rounded-lg border border-dashed border-hairline-strong p-12 text-center">
            <p className="font-headline text-xl text-ink">
              Nothing published yet.
            </p>
            <p className="mt-2 text-ink-mute">
              Our first posts are on the way — check back soon, or manage
              posts from the admin panel once it&apos;s connected.
            </p>
          </div>
        ) : (
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>{post.title}</li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
