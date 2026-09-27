import { notFound } from "next/navigation";
import AdminCollectionManager from "@/components/AdminCollectionManager";

const sections = ["packages", "products", "blog", "faq", "submissions", "waitlist"];
export function generateStaticParams() { return sections.map((section) => ({ section })); }
export default async function AdminManagePage({ params }) { const { section } = await params; if (!sections.includes(section)) notFound(); return <AdminCollectionManager section={section} />; }
