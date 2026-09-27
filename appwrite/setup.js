/**
 * Vishyx Techie — Appwrite Cloud setup script.
 *
 * Appwrite has no raw-SQL migration step (unlike the Supabase/Postgres
 * approach this replaces) — collections and attributes are created via
 * the server SDK or the Appwrite Console UI instead. This script does it
 * via the SDK, once per project.
 *
 * Usage:
 *   npm install node-appwrite
 *   APPWRITE_ENDPOINT=... APPWRITE_PROJECT_ID=... APPWRITE_API_KEY=... \
 *     node appwrite/setup.js
 */

const { Client, Databases, Permission, Role, ID } = require("node-appwrite");

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1")
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const databases = new Databases(client);
const DB_ID = "vishyx_techie";

// Permissions used throughout:
//   - Published, publicly readable content: anyone can read, only
//     logged-in admins can write.
//   - Form tables (contact/waitlist): anyone can create, only admins can
//     read/update/delete — mirrors the Supabase RLS "insert-only" policies.
const PUBLIC_READ_ADMIN_WRITE = [
  Permission.read(Role.any()),
  Permission.create(Role.users()),
  Permission.update(Role.users()),
  Permission.delete(Role.users()),
];

const PUBLIC_CREATE_ADMIN_READ = [
  Permission.create(Role.any()),
  Permission.read(Role.users()),
  Permission.update(Role.users()),
  Permission.delete(Role.users()),
];

async function run() {
  await databases.create(DB_ID, "Vishyx Techie");

  await createCollection("services", PUBLIC_READ_ADMIN_WRITE, [
    ["slug", "string", 191, true],
    ["title", "string", 255, true],
    ["summary", "string", 500, true],
    ["body", "string", 5000, false],
    ["photoId", "string", 50, false],
    ["startingPrice", "string", 50, false],
    ["features", "string", 255, false, true], // array
    ["techStack", "string", 100, false, true], // array
    ["steps", "string", 255, false, true], // array
    ["orderIndex", "integer", null, false],
    ["isPublished", "boolean", null, false],
  ]);

  await createCollection("packages", PUBLIC_READ_ADMIN_WRITE, [
    ["name", "string", 100, true],
    ["subtitle", "string", 150, false],
    ["price", "string", 100, false],
    ["features", "string", 255, false, true],
    ["isRecommended", "boolean", null, false],
    ["orderIndex", "integer", null, false],
    ["isPublished", "boolean", null, false],
  ]);

  await createCollection("products", PUBLIC_READ_ADMIN_WRITE, [
    ["slug", "string", 191, true],
    ["name", "string", 191, true],
    ["tagline", "string", 255, false],
    ["body", "string", 2000, false],
    ["photoId", "string", 50, false],
    ["status", "string", 50, false], // in_development | launched
  ]);

  await createCollection("blog_posts", PUBLIC_READ_ADMIN_WRITE, [
    ["slug", "string", 191, true],
    ["title", "string", 255, true],
    ["excerpt", "string", 500, false],
    ["body", "string", 20000, false],
    ["coverImage", "string", 255, false],
    ["author", "string", 100, false],
    ["publishedAt", "datetime", null, false],
    ["isPublished", "boolean", null, false],
    ["metaTitle", "string", 70, false],
    ["metaDescription", "string", 160, false],
  ]);

  await createCollection("faqs", PUBLIC_READ_ADMIN_WRITE, [
    ["question", "string", 255, true],
    ["answer", "string", 1000, true],
    ["orderIndex", "integer", null, false],
    ["isPublished", "boolean", null, false],
  ]);

  await createCollection("site_settings", PUBLIC_READ_ADMIN_WRITE, [
    ["phone", "string", 30, false],
    ["email", "string", 100, false],
    ["address", "string", 255, false],
    ["footerNote", "string", 255, false],
  ]);

  await createCollection("contact_submissions", PUBLIC_CREATE_ADMIN_READ, [
    ["name", "string", 100, true],
    ["email", "string", 150, true],
    ["phone", "string", 30, false],
    ["serviceInterest", "string", 100, false],
    ["message", "string", 3000, true],
    ["status", "string", 30, false], // new | replied | archived
  ]);

  await createCollection("waitlist_submissions", PUBLIC_CREATE_ADMIN_READ, [
    ["productSlug", "string", 100, true],
    ["name", "string", 100, true],
    ["email", "string", 150, true],
    ["phone", "string", 30, false],
    ["company", "string", 150, false],
    ["notes", "string", 1000, false],
  ]);

  console.log("Appwrite database + collections created.");
}

async function createCollection(id, permissions, attributes) {
  await databases.createCollection(DB_ID, id, id, permissions);
  for (const [key, type, size, required, isArray] of attributes) {
    if (type === "string") {
      await databases.createStringAttribute(DB_ID, id, key, size, required, undefined, isArray);
    } else if (type === "integer") {
      await databases.createIntegerAttribute(DB_ID, id, key, required);
    } else if (type === "boolean") {
      await databases.createBooleanAttribute(DB_ID, id, key, required);
    } else if (type === "datetime") {
      await databases.createDatetimeAttribute(DB_ID, id, key, required);
    }
  }
  console.log(`Created collection: ${id}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
