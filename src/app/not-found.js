import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="font-data text-sm text-accent-deep">404</p>
      <h1 className="mt-3 font-headline text-3xl text-ink">
        This page took a wrong turn.
      </h1>
      <p className="mt-3 text-ink-mute">
        The page you&apos;re looking for doesn&apos;t exist — it may have
        moved, or the link might be outdated.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/" variant="accent">
          Go to homepage
        </Button>
        <Button href="/contact" variant="outline">
          Contact us
        </Button>
      </div>
    </section>
  );
}
